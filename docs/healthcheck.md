## 🛡 Моніторинг доступності (Healthcheck)

Цей функціонал реалізований як модульне доповнення (package) для пристроїв на базі **ESPHome**. Ви можете використовувати його як у складі екосистеми **Svitlo**Bot, так і як незалежний інструмент для будь-якого іншого вашого проєкту.

Моніторинг дозволяє миттєво дізнатися, якщо пристрій зник із мережі (через вимкнення світла, проблеми з інтернетом або зависання) за допомогою сервісу **[Healthchecks.io](https://healthchecks.io)**.

### 📝 Як це працює (Принцип «Dead Man's Switch» | «Кнопки мерця»)

1. **Пристрій:** Раз у період відправляє сигнал («пінг») на сервер.
2. **Сервер:** Очікує на цей сигнал. Якщо він не приходить вчасно, сервер розуміє, що зв'язок розірвано.
3. **Ви:** Отримуєте повідомлення у Telegram або на пошту.

*   **Принцип моніторингу:** Пристрій використовує метод «Dead Man's Switch» | «Кнопки мерця». Він не чекає на запит, а сам активно повідомляє сервер, що він «живий». Якщо сигнал припиняється — сервер б'є на сполох.
*   **Автоматизація адреси:** Вам не потрібно вводити повний URL. Прошивка сама формує коректний запит, додаючи ваш ключ до адреси сервера.

### 📦 Варіанти підключення пакетів

Завдяки модульній структурі, ви можете гнучко налаштувати конфігурацію у секції `packages`:

#### Варіант 1: Повний набір **Svitlo**Bot, **Health**Checks і **Custom**URL

!!! example annotate "SvitloBot | HealthChecks | Custom URL"

    ``` { .yaml .copy .annotate }
    packages:
      remote_package:
        url: https://github.com/andrewjswan/svitlobot
        files:
          - packages/common.yaml (1)
          - packages/svitlobot.yaml (2)
          - packages/healthcheck.yaml (3)
          - packages/custom_url.yaml (4)
          - packages/sub_devices_svitlobot_all_in_one.yaml (5)
          - packages/esp32.yaml (6)
        refresh: 1s
    ```
1. Базові налаштування
2. Ядро Світлобота
3. Моніторинг доступності (HealthChecks)
4. Моніторинг доступності (Custom URL)
5. Окремі пристрої для SvitloBot і HealthChecks
6. Специфічні параметри платформи `ESP32` для `8266` використовуйте **esp8266.yaml**

#### Варіант 2: Набір **Svitlo**Bot і **Health**Checks

!!! example annotate "SvitloBot | HealthChecks"

    ``` { .yaml .copy .annotate }
    packages:
      remote_package:
        url: https://github.com/andrewjswan/svitlobot
        files:
          - packages/common.yaml (1)
          - packages/svitlobot.yaml (2)
          - packages/healthcheck.yaml (3)
          - packages/sub_devices_svitlobot_healthcheck.yaml (4)
          - packages/esp32.yaml (5)
        refresh: 1s
    ```
1. Базові налаштування
2. Ядро Світлобота
3. Моніторинг доступності (HealthChecks)
4. Окремі пристрої для SvitloBot і HealthChecks
5. Специфічні параметри платформи `ESP32` для `8266` використовуйте **esp8266.yaml**

#### Варіант 3: Набір **Health**Checks і **Custom**URL

!!! example annotate "HealthChecks | Custom URL"

    ``` { .yaml .copy .annotate }
    packages:
      remote_package:
        url: https://github.com/andrewjswan/svitlobot
        files:
          - packages/common.yaml (1)
          - packages/healthcheck.yaml (2)
          - packages/custom_url.yaml (3)
          - packages/sub_devices_svitlobot_healthcheck.yaml (4)
          - packages/esp32.yaml (5)
        refresh: 1s
    ```
1. Базові налаштування
2. Моніторинг доступності (HealthChecks)
3. Моніторинг доступності (Custom URL)
4. Окремі пристрої для HealthChecks і Custom URL
5. Специфічні параметри платформи `ESP32` для `8266` використовуйте **esp8266.yaml**

#### Варіант 4: Тільки моніторинг

!!! example annotate "HealthChecks"

    ``` { .yaml .copy .annotate }
    packages:
      remote_package:
        url: https://github.com/andrewjswan/svitlobot
        files:
          - packages/common.yaml
          - packages/healthcheck.yaml
          - packages/esp32.yaml (1)
        refresh: 1s
    ```
1. Специфічні параметри платформи `ESP32` для `8266` використовуйте **esp8266.yaml**

Пакет [healthcheck.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/healthcheck.yaml) дозволяє додати функцію «контролю життя» до будь-якого вашого пристрою на базі **ESPHome**. Якщо пристрій зависне, зникне інтернет або вимкнеться живлення — ви миттєво отримаєте сповіщення через сервіс **[Healthchecks.io](https://healthchecks.io)**.

### ⚙️ Швидке налаштування

Для активації моніторингу виконайте ці три прості кроки:

1. **Отримайте ключ:** Зареєструйтесь на **[Healthchecks.io](https://healthchecks.io)** та створіть новий «Check».
2. **Скопіюйте ID:** Скопіюйте унікальний набір символів (UUID) :material-information-outline:{ title="Наприклад: 550e8400-e29b-41d4-a716-446655440000" } з кінця вашого посилання.
3. **Активуйте пристрій:**

   * Зайдіть у веб-інтерфейс вашого пристрою (через браузер за його IP-адресою).
   * Вставте скопійований ID у поле **Healthcheck Key**.

*[UUID]: Universally Unique Identifier — Універсальний унікальний ідентифікатор


### ⏱ Налаштування часових лімітів (Важливо)

Щоб ви не отримували «хибні тривоги» під час короткочасних збоїв інтернету або перезавантаження роутера, налаштуйте часові межі на сайті **[Healthchecks.io](https://healthchecks.io)**:

*   **Period (Інтервал):** встановіть `2 minutes`. Це частота, з якою пристрій надсилає сигнал.
*   **Grace Period (Відстрочка):** встановіть `3 minutes`.

!!! info
    *Це «запасний час», який сервіс чекає після пропущеного сигналу, перш ніж надіслати вам сповіщення.*

### 🔔 Повідомлення в Telegram

Сервіс підтримує багато каналів зв'язку, але **Telegram** є найзручнішим:

1. У вашому кабінеті **[Healthchecks.io](https://healthchecks.io)** перейдіть до розділу **Integrations** -> **Telegram**.
2. Натисніть **Add Integration** та дотримуйтесь підказок офіційного бота **@healthchecks_io_bot**.
3. Докладніша інструкція доступна за посиланням: [Attaching Telegram](https://healthchecks.io/docs/attaching_telegram/).

Або **WebHook**:

1. У вашому кабінеті **[Healthchecks.io](https://healthchecks.io)** перейдіть до розділу **Integrations** -> **WebHook**.
2. Натисніть **Add Integration**.
3. Введіть необхідні URL-адреси та повідомлення для обох варіантів статусів.

!!! example annotate "Telegram Bot"

    URL:

    **POST** | https://api.telegram.org/bot88888888888:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/sendMessage

    Request Body:

    ``` { .json .copy .annotate }
    {
    "chat_id": "-888888888",
    "text": "🔴 <b>Світло зникло</b>",
    "parse_mode": "HTML"
    }
    ```

    Request Headers:

    ``` { .copy .annotate }
    Content-Type: application/json
    ```
