## Інтеграція SvitloBot з Home Assistant

Пакет призначений для регулярного надсилання сигналів активності (ping) від Home Assistant на сервер сервісу **SvitloBot**. Це дозволяє відстежувати наявність електроенергії за доступністю вашого сервера розумного будинку.

!!! warning "Важливо"
    Якщо ваш сервер із Home Assistant підключений до мережі **без ДБЖ (UPS)** — наведений нижче код працюватиме «з коробки» та вимикатиметься разом зі світлом.

    Якщо ж сервер живиться **від ДБЖ або інвертора**, вам потрібно додати в блок `condition` автоматизації перевірку наявності вхідної мережі (наприклад, статус живлення інвертора від мережі або статус ДБЖ через інтеграцію NUT — `Online`), щоб запити надсилалися лише тоді, коли є електрика. Також для миттєвого сповіщення про зникнення світла ви можете самостійно додати виклик `channelPingOff` згідно з [офіційною документацією (питання №20)](https://svitlobot.in.ua).

### Отримання ключа каналу

1. Відкрийте Telegram-бот `@SvitloUkraineBot`.
2. Натисніть кнопку **«📊 Статус розгорнутий»** та скопіюйте ваш унікальний `channel_key`.

### Варіанти налаштування

Оберіть потрібний варіант конфігурації та додайте код у ваш пакет (наприклад, `packages/svitlobot.yaml`), замінивши `КЛЮЧ` на ваш реальний ключ каналу.

=== "Простий варіант"

    Базова конфігурація для швидкого запуску. У розгорнутому статусі бота пристрій відображатиметься як анонімний клієнт (`👻 HomeAssistant/...`).

    ```yaml
    rest_command:
      svitlobot_heartbeat:
        url: "https://svitlobot.in.ua"

    automation:
      - id: svitlobot_fallback_heartbeat
        alias: SvitloBot | Fallback Heartbeat
        description: "Send heartbeat ping to SvitloBot every 90 seconds"
        trigger:
          - platform: time_pattern
            seconds: "/30"
        condition:
          - condition: template
            value_template: >-
              {{ (now().hour * 3600 + now().minute * 60 + now().second) % 90 == 0 }}
        actions:
          - action: rest_command.svitlobot_heartbeat
            response_variable: svitlobot_response
        max_exceeded: silent
        mode: single
    ```

    Детальніше про базові запити до API читайте в [офіційному FAQ SvitloBot (питання №20)](https://svitlobot.in.ua).

=== "Розширений варіант"

    Конфігурація з передачею метаданих про сервер. Дозволяє бачити конкретний пристрій, його модель та версію Home Assistant у розділі **«📱 Пінгують»** розгорнутого статусу бота.

    !!! tip "Навіщо передавати метадані?"
        Якщо до одного каналу підключено кілька пристроїв (наприклад, Home Assistant, ESP32 та смартфон), передача параметрів `device`, `model` і `app` допомагає легко визначити у статистиці бота, який саме вузол зараз у мережі.

    #### 1. Попередні вимоги

    Для формування динамічного URL потрібно налаштувати два компоненти в Home Assistant:

    * **Інтеграція Local IP Address** — використовується для отримання локальної IP-адреси сервера (на її основі генерується унікальний хеш пристрою `device`). Встановіть її через **Налаштування → Пристрої та сервіси → Додати інтеграцію → Local IP Address** та переконайтеся, що створився сенсор `sensor.local_ip`.
    * **Сенсори Command Line** — використовуються для отримання назви материнської плати (моделі сервера) та поточної версії Home Assistant. Додайте їх до `configuration.yaml`:

    ```yaml
    command_line:
      - sensor:
          name: NUC System
          # Use 'cat /proc/device-tree/model' for Raspberry Pi
          command: "cat /sys/class/dmi/id/board_name"
          value_template: "{{ value | trim() }}"
          unique_id: nuc_system_name

      - sensor:
          name: Installed version
          command: "cat /config/.HA_VERSION"
          unique_id: ha_installed_version
    ```

    #### 2. Конфігурація пакета

    Після перевірки наявності сенсорів `sensor.local_ip`, `sensor.nuc_system` та `sensor.installed_version`, додайте основний код пакета:

    ```yaml
    rest_command:
      svitlobot_heartbeat:
        url: >-
          https://svitlobot.in.ua&device=ha-{{ md5(states('sensor.local_ip')) }}&model={{ states('sensor.nuc_system') }}&app=HA%20{{ states('sensor.installed_version') }}

    automation:
      - id: svitlobot_fallback_heartbeat
        alias: SvitloBot | Fallback Heartbeat
        description: "Send heartbeat ping with device metadata every 90 seconds"
        trigger:
          - platform: time_pattern
            seconds: "/30"
        condition:
          - condition: template
            value_template: >-
              {{ (now().hour * 3600 + now().minute * 60 + now().second) % 90 == 0 }}
        actions:
          - action: rest_command.svitlobot_heartbeat
            response_variable: svitlobot_response
        max_exceeded: silent
        mode: single
    ```

    #### 3. Опис параметрів запиту

    | Параметр | Значення у шаблоні | Опис |
    | :--- | :--- | :--- |
    | `channel_key` | `КЛЮЧ` | Секретний ключ вашого каналу з `@SvitloUkraineBot`. |
    | `device` | `ha-{{ md5(states('sensor.local_ip')) }}` | Унікальний ID пристрою. Складається з префікса `ha-` та MD5-хешу локальної IP-адреси (сервер зберігає перші 8 символів хешу). |
    | `model` | `{{ states('sensor.nuc_system') }}` | Відображуване ім'я пристрою у списку активних пінгів (до 64 символів). |
    | `app` | `HA%20{{ states('sensor.installed_version') }}` | Назва та версія ПЗ (наприклад, `HA 2026.11.0`). Пробіл закодовано як `%20`. |

    Детальні вимоги до формату ідентифікаторів та лімітів запитів описані в [офіційному FAQ SvitloBot (питання №44)](https://svitlobot.in.ua).

### Як працює інтервал відправки

Автоматизація перевіряє час кожні 30 секунд і надсилає запит рівно **раз на 90 секунд** (умова `% 90 == 0`). Це гарантує дотримання ліміту API (не більше 2 запитів за 45 секунд) та захищає IP-адресу від блокування за надмірну частоту звернень.
