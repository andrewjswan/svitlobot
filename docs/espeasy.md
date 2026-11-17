## Налаштування ESPEasy для SvitloBot

Інструкція з прошивки та налаштування контролерів на базі **ESP8266** та **ESP32** із використанням прошивки **ESPEasy** для моніторингу наявності електроенергії у сервісі **Svitlo**Bot.

### 1. Встановлення прошивки

1. Підключіть плату ESP8266 або ESP32 до комп'ютера через USB.
2. Перейдіть на сторінку веб-інсталятора [ESPEasy Web Flasher](https://td-er.nl/ESPEasy/).
3. У списку прошивок оберіть варіант для вашої плати (для більшості стандартних модулів на 4 МБ підходить збірка):
   `*** Normal 4M [ESP8266,ESP32,ESP32-S2/S3/C2/C3/C6]`
4. Натисніть кнопку **Install** та дочекайтеся завершення процесу.

### 2. Первинне підключення

Після прошивки контролер створить власну точку доступу Wi-Fi для первинного налаштування:

* **Wi-Fi мережа (SSID):** `ESP-easy`
* **Пароль:** `configesp`
* **Адреса веб-інтерфейсу:** `http://192.168.4.1`

Підключіться до цієї мережі, відкрийте панель керування у браузері та підключіть плату до вашого домашнього Wi-Fi роутера.

### 3. Активація правил (Rules)

За замовчуванням рушій правил в ESPEasy вимкнений. Щоб його активувати:

1. У веб-інтерфейсі пристрою перейдіть до розділу **Tools** -> **Advanced**.
2. Встановіть прапорець навпроти пункту **Rules**.
3. Натисніть **Submit** внизу сторінки. Після цього у верхньому меню з'явиться вкладка **Rules**.

### 4. Налаштування відправки пінгів

Перейдіть у вкладку **Rules**, відкрийте блок **Rules Set 1** та вставте відповідну конфігурацію. Замініть `ВАШ_КЛЮЧ` на ваш ключ каналу зі **Svitlo**Bot.

!!! warning "Обмеження за IP-адресою"
    Сервер **Svitlo**Bot обмежує частоту запитів з однієї зовнішньої IP-адреси. Якщо ви використовуєте два пристрої в одній локальній мережі, необхідно збільшити інтервал опитування та рознести їхній запуск у часі.

=== "Одна плата в мережі"

    Стандартний інтервал відправки запитів становить **35 секунд**.

    ```text title="Rules Set 1"
    on WiFi#Connected do
      // Start timer immediately after WiFi connection
      timerSet,1,1
    endon

    on Rules#Timer=1 do
      SendToHTTP https://api.svitlobot.in.ua/channelPing?channel_key=ВАШ_КЛЮЧ
      // Schedule next ping in 35 seconds
      timerSet,1,35
    endon
    ```

=== "Дві плати на одному IP"

    Інтервал збільшується до **70 секунд**, а старт другої плати зсувається на **35 секунд**, щоб запити не перетиналися.

    **Плата №1:**

    ```text title="Rules Set 1 (Device 1)"
    on WiFi#Connected do
      // Start timer immediately after WiFi connection
      timerSet,1,1
    endon

    on Rules#Timer=1 do
      SendToHTTP https://api.svitlobot.in.ua/channelPing?channel_key=ВАШ_КЛЮЧ
      // Schedule next ping in 70 seconds
      timerSet,1,70
    endon
    ```

    **Плата №2:**

    ```text title="Rules Set 1 (Device 2)"
    on WiFi#Connected do
      // Delay first request by 35 seconds to avoid IP collision
      timerSet,1,35
    endon

    on Rules#Timer=1 do
      SendToHTTP https://api.svitlobot.in.ua/channelPing?channel_key=ВАШ_КЛЮЧ
      // Schedule next ping in 70 seconds
      timerSet,1,70
    endon
    ```

Після вставки коду натисніть **Submit** для збереження правил.

### 5. Перевірка роботи та перезавантаження

1. Перейдіть до розділу **Tools** -> **Log** та дочекайтеся спрацювання таймера.
2. Переконайтеся, що в журналі з'явилися записи про успішну відправку запиту та відповідь сервера з кодом `200`:

```log title="Tools -> Log"
729064: WD : Uptime 12 ConnectFailures 0 FreeMem 19896 WiFiStatus: WL_CONNECTED 3 ESPeasy internal wifi status: Conn. IP Init
732673: EVENT: Rules#Timer=1,1
732680: ACT : SendToHTTP https://api.svitlobot.in.ua/
732923: ACT : timerSet,1,35
732929: EVENT: http#api.svitlobot.in.ua=200
```

3. Перейдіть до розділу **Tools** -> **Reboot**, щоб перезавантажити контролер і перевірити автоматичний запуск скрипта під час подачі живлення.

*[ESP32]: Серія мікроконтролерів типу «система на кристалі» китайського виробника Espressif, що мають інтегровані контролери Wi-Fi і Bluetooth, низьке енергоспоживання і невисоку ціну.
*[ESP8266]: Мікроконтролер китайського виробника Espressif з інтерфейсом Wi-Fi. Наприклад, NodeMCU або Wemos D1 Mini.
*[ESPEasy]: Готова прошивка з вебінтерфейсом для мікроконтролерів ESP8266 та ESP32, яка дозволяє легко підключати датчики та налаштовувати правила автоматизації без програмування.
