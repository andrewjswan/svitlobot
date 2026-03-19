---
title: ESPHome SvitloBot | Andrew J.Swan
description: SvitloBot просте та зручне рішення для інтеграції з системою СвітлоБот, що дозволяє автоматично повідомляти про наявність світла.
---

![Logo](img/logo_light.png#only-dark){ loading=lazy style="width:70%" }
![Logo](img/logo_dark.png#only-light){ loading=lazy style="width:70%" }

[![esphome_badge](https://img.shields.io/static/v1?label=ESPHome&message=Config&color=blue&logo=esphome)](https://esphome.io/)
[![svitlobot_badge](https://img.shields.io/badge/Svitlo-Bot-orange.svg)](https://svitlobot.in.ua/)
[![Build](https://github.com/andrewjswan/svitlobot/actions/workflows/test_build.yaml/badge.svg)](https://github.com/andrewjswan/svitlobot/actions/workflows/build.yaml)
[![GitHub](https://img.shields.io/github/license/andrewjswan/svitlobot?color=blue)](https://github.com/andrewjswan/svitlobot/blob/main/LICENSE)
[![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/andrewjswan/svitlobot?include_prereleases)](https://github.com/andrewjswan/svitlobot/releases)
[![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/downloads-pre/andrewjswan/svitlobot/latest/total?label=release@downloads)](https://github.com/andrewjswan/svitlobot/releases)
[![StandWithUkraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://github.com/vshymanskyy/StandWithUkraine/blob/main/docs/README.md)

## 💡 Ідея
Ідея **Svitlo**Bot полягає у створенні простого та зручного рішення для інтеграції з системою [**Світло**Бот](https://svitlobot.in.ua/), що дозволяє автоматично повідомляти про наявність світла.

!!! note "**Світло**Бот"
    [**Світло**Бот](https://svitlobot.in.ua/) - проект ентузіастів для моніторингу статусу світла у вашому будинку, який створила група учнів із ліцею [«Наукова&#160;Зміна»](https://naukova-zmina.org.ua/) - **Чигарьови [Дмитро](https://github.com/DimChig) і Артем**. Суть проекту полягає в тому, аби підключивши вдома або в офісі бота на базі **ESP32** | **ESP8266** або підключивши в розетку на зарядку старенький або непотрібний смартфон/планшет (Android) та налаштувавши його згідно інструкції, ви зможете отримувати сповіщення у свій створений телеграм-канал повідомлення про наявність/відсутність світла на підставі того, йде зарядка цього смартфону чи ні.  Він допомагає тисячам українців оперативно дізнаватися про статус електромережі у себе вдома чи в офісі.

## Ключові можливості
* **Миттєві сповіщення:** Прямі повідомлення у ваш телеграм-канал.
* **Універсальність:** Підтримка будь-яких плат **ESP32** та **ESP8266**.
* **Просте встановлення:** Прошивка в один клік через браузер.
* **Гнучкість:** Можливість інтеграції з **Home Assistant** або робота як автономного пристрою.

## Як це працює

Принцип роботи **ESPHome SvitloBot** повністю повторює логіку оригінального проекту для [смартфонів](https://svitlobot.in.ua/#how_it_works), але реалізований на базі енергоефективного мікроконтролера.

### Аналогія зі смартфоном

Працює це максимально просто:

* **Контролер як "сенсор":** Ви вмикаєте **ESP32** | **ESP8266** у розетку через звичайний блок живлення (як смартфон на зарядку).
* **Статус "Є світло":** Коли в мережі з'являється напруга, контролер вмикається, підключається до Wi-Fi та надсилає сигнал про те, що він "в мережі". Ви отримуєте повідомлення **"Світло є!"**.
* **Статус "Немає світла":** Як тільки живлення зникає, пристрій миттєво вимикається. Система фіксує припинення передачі сигналу та сповіщає про відсутність електрики. Ви отримуєте повідомлення **"Світло зникло"**

#### Схематичне зображення обох варіантів

[![svitlobot_badge](https://img.shields.io/badge/Svitlo-Bot-green.svg)](https://github.com/andrewjswan/svitlobot)
[![svitlobot_badge](https://img.shields.io/badge/Heart-Beat-green.svg)]()
[![svitlobot_badge](https://img.shields.io/badge/Світло-Бот-orange.svg)](https://svitlobot.in.ua/)
[![svitlobot_badge](https://img.shields.io/badge/-Telegram-blue.svg)]()
[![svitlobot_badge](https://img.shields.io/badge/Світло-Є-green.svg)](https://svitlobot.in.ua/)

[![svitlobot_badge](https://img.shields.io/badge/Svitlo-Bot-black.svg)](https://github.com/andrewjswan/svitlobot)
[![svitlobot_badge](https://img.shields.io/badge/Heart-Beat-red.svg)]()
[![svitlobot_badge](https://img.shields.io/badge/Світло-Бот-orange.svg)](https://svitlobot.in.ua/)
[![svitlobot_badge](https://img.shields.io/badge/-Telegram-blue.svg)]()
[![svitlobot_badge](https://img.shields.io/badge/Світло-Зникло-red.svg)](https://svitlobot.in.ua/)

### Переваги перед смартфоном

На відміну від старого телефона, використання ESP-контролера з цією прошивкою:

* **Більш безпечно:** Немає акумулятора, який може здутися від постійної зарядки.
* **Компактно:** Весь "пристрій" розміром із сірникову коробку.
* **Надійно:** Контролер споживає мінімум енергії та розрахований на роботу 24/7 роками.

## Варіанти прошивки

Виберіть конфігурацію, яка найкраще відповідає вашим потребам:

| Версія | Опис | Для кого | Функціонал |
| :--- | :--- | :--- | :--- |
| **Svitlo**Bot | Базова версія **(Рекомендовано)** | Для всіх користувачів | Сповіщення в телеграм-канал від системи [**Світло**Бот](https://svitlobot.in.ua/) при зміні стану живлення. |
| **Health**Сheck | Моніторинг зв'язку | Для досвідчених | "Сигнали життя" (heartbeat) на [**Health**сhecks.io](https://healthchecks.io). Сповістить, якщо пристрій офлайн. |
| **Custom**URL | Індивідуальний моніторинг  | Для досвідчених | "Сигнали життя" (heartbeat) на будь-який сервіс, URL вказується в налаштуваннях. |
| **All**-in-**One** | Комбінована прошивка | Для просунутих | **Svitlo**Bot + **Health**Сheck + **Custom**URL. Поєднує сповіщення в телеграм-канал від системи [**Світло**Бот](https://svitlobot.in.ua/) при зміні стану живлення та зовнішній моніторинг доступності. |

!!! tip "Яку версію обрати?"
    * **SvitloBot** (Базова) — рекомендована для більшості користувачів. Вона проста у налаштуванні та ідеально підходить для звичайного моніторингу світла.
    * **Healthcheck**, **Custom URL** або **All-in-One** — версії для просунутих користувачів, які розуміють принципи роботи зовнішнього моніторингу та потребують додаткового контролю доступності пристрою.

!!! info "Період надсилання HeartBeat"
    Період надсилання "сигналу життя" (heartbeat) в поточній прошивці дорівнює 55с.

## Швидкий старт

### Прошивка

Встановити прошивку можна двома способами:

1. **Web Installer (Рекомендовано):** Скористайтеся [**SvitloBot - ESP Web Tools**](firmware.md). Це найпростіший шлях — просто підключіть **ESP32** | **ESP8266** до **USB** та натисніть **Connect** у браузері.
2. **ESPHome:** Використовуйте готові `.yaml` конфігурації з цього репозиторію для самостійної збірки.

!!! tip "ESP Web Tools"
    [Документація та приклади використання](esp-web-tools.md)

### Отримайте ключ

Створіть бот у Telegram, скопіюйте з нього **"ключ для смартфона"** та вставте його у WEB-інтерфейс у поле **SvitloBot Key**.

!!! success "Готово!"
    Тепер ваш **ESP32** | **ESP8266** працює і надсилає сповіщення про світло.

## Відео інструкція

![type:video](https://www.youtube.com/embed/qwtNtQ2xhjc)

## Скріншоти

Темна                        |  Світла
:---------------------------:|:-------------------------:
![](img/screenshot/dark.jpg) |  ![](img/screenshot/light.jpg)

!!! info "Скріншоти"
    Приклад скріншотів для пристрою на базі [M5Stack Atom Lite](svitlobot_m5stack_atom_lite.md)

## Спільнота та підтримка

- **Співпраця**: Знайшли помилку? Маєте нові ідеї? Хочете допомогти? Перейдіть до розділу [підтримки](contributing.md)
- **Підтримка в Telegram**: [@SvitloBotAdmin](https://t.me/SvitloBotAdmin)
- **Новини спільноти**: [@svitlobot_news](https://t.me/svitlobot_news)
- **Офіційний сайт**: [svitlobot.in.ua](https://svitlobot.in.ua)
- **SvitloBot**: [GitHub](https://github.com/DimChig/SvitloBot)

*[ESP32]: Серія мікроконтролерів типу «система на кристалі» китайського виробника Espressif, що мають інтегровані контролери Wi-Fi і Bluetooth, низьке енергоспоживання і невисоку ціну.
*[ESP8266]: Мікроконтролер китайського виробника Espressif з інтерфейсом Wi-Fi. Наприклад, NodeMCU або Wemos D1 Mini.
*[USB]: (Universal Serial Bus, Універсальна Послідовна Шина) — стандарт роз'ємів і кабелів для передачі даних та живлення невеликих пристроїв.
*[heartbeat]: "Сигнал життя" - Регулярний запит від вашої системи, що підтверджує її коректну роботу, або сповіщає про збій у разі відсутності сигналу.
