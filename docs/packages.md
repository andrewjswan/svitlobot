# 📦 Пакети конфігурації ESPHome для SvitloBot

Цей розділ містить готові модульні пакети ([packages](https://github.com/andrewjswan/svitlobot/tree/main/packages)), які дозволяють швидко зібрати прошивку для вашого пристрою. Замість копіювання величезних блоків коду, ви просто підключаєте потрібні функції однією директивою.

## 🚀 Переваги використання пакетів

* **Модульність:** підключайте лише те, що потрібно (тільки дисплей, тільки сенсори тощо).
* **Завжди актуально:** пристрої автоматично підтягують оновлення логіки з цього репозиторію при перезбірці.
* **Чистий код:** ваш основний YAML-файл залишається коротким і зрозумілим.

## 🛠 Доступні пакети

Нижче наведено перелік пакетів, які дозволяють гнучко збирати прошивку **Svitlo**Bot як конструктор.

### 🛠 Основні пакети

Виберіть базові пакети залежно від вашої платформи та потреб:

* **[common.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/common.yaml)** — Загальні налаштування системи (Wi-Fi, API, Logger).
* **[esp32.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/esp32.yaml)** / **[esp8266.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/esp8266.yaml)** — Конфігурація для відповідного типу мікроконтролера.
* **[web_server_auth.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/web_server_auth.yaml)** — Веб-інтерфейс із авторизацією.

### 🕵️ Моніторинг та сервіси

* **[svitlobot.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/svitlobot.yaml)** — Сповіщення в телеграм-канал від системи **Світло**Бот при зміні стану живлення. [Детальніше](index.md).
* **[healthcheck.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/healthcheck.yaml)** — "Сигнали життя" (pings) на [**Health**сhecks.io](https://healthchecks.io). Сповістить, якщо пристрій офлайн. [Детальніше](healthcheck.md).
* **[custom_url.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/custom_url.yaml)** — "Сигнали життя" (pings) на будь-який сервіс, URL вказується в налаштуваннях.
* **[ping.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/ping.yaml)** — Пакет дозволяє **Світло**Бот визначати наявність світла опосередковано — через доступність будь-якого пристрою в локальній мережі, який не підключений до UPS.  [Детальніше](ping.md).

### ⚙️ Настройка частоты опроса (Ping Interval)

* **[interval_esp32.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/interval_esp32.yaml)** — Пакет підтримує налаштування частоти опитування сервісів у діапазоні від **30 секунд** до **5 хвилин**.
* **[interval_esp8266.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/interval_esp8266.yaml)** — Пакет підтримує налаштування частоти опитування сервісів у діапазоні від **30 секунд** до **5 хвилин**.

!!! danger "Важливо: Оберіть правильний пакет!"
    Конфігурація містить два окремих пакети залежно від вашого заліза. Використовуйте лише той, що відповідає вашому контролеру:
    
    * **`interval_esp32.yaml`** — якщо у вас плата на базі ESP32.
    * **`interval_esp8266.yaml`** — якщо у вас плата на базі ESP8266 (наприклад, NodeMCU або Wemos D1 Mini).
    
    **Не підключайте обидва пакети одночасно!** Це призведе до помилок при компіляції.

!!! note "Особливість для ESP8266"
    У пакеті для **ESP8266** функція `restore_from_flash` увімкнена за замовчуванням.
    Це дозволяє пристрою «пам'ятати» встановлений інтервал після вимкнення живлення.
    Запис у Flash-пам'ять відбувається **виключно в момент зміни** параметра користувачем. Оскільки це трапляється рідко, ресурс чипа не вичерпується, а стабільність роботи підвищується.

### 🧩 Комбіновані під-пристрої (Sub Devices)

Готові збірки для специфічних сценаріїв:

* **[sub_devices_svitlobot_healthcheck.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/sub_devices_svitlobot_healthcheck.yaml)** — **Svitlo**Bot + **Health**Сheck
* **[sub_devices_svitlobot_custom_url.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/sub_devices_svitlobot_custom_url.yaml)** — **Svitlo**Bot + **Custom**URL
* **[sub_devices_healthcheck_custom_url.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/sub_devices_healthcheck_custom_url.yaml)** — **Health**Сheck + **Custom**URL
* **[sub_devices_all_in_one.yaml](https://github.com/andrewjswan/svitlobot/blob/main/packages/sub_devices_all_in_one.yaml)** — **Svitlo**Bot + **Health**Сheck + **Custom**URL

!!! tip "Коли використовувати?"
    При додаванні декількох пакетів моніторингу, для успішної збірки прошивки необхідно додати відповідний пакет під-пристроїв (Sub Devices).

## 📥 Як підключити

Додайте блок `packages` у свій конфігураційний файл `.yaml`:

!!! example annotate "Приклад"

    ``` { .yaml .copy .annotate }
    packages:
      remote_package:
        url: https://github.com/andrewjswan/svitlobot
        files:
          ...
          - packages/package_name.yaml
          ...
        refresh: 1s
    ```

!!! tip "ESPHome Packages"
    [Документація та приклади використання](https://esphome.io/components/packages/)

# Прошивки

!!! note "Опис прошивок"
    [**🛠 Варіанти прошивки**](index.md#-варіанти-прошивки)
