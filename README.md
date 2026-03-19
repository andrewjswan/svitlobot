# ESPHome SvitloBot

[![esphome_badge](https://img.shields.io/static/v1?label=ESPHome&message=Config&color=blue&logo=esphome)](https://esphome.io/)
[![svitlobot_badge](https://img.shields.io/badge/Svitlo-Bot-orange.svg)](https://svitlobot.in.ua/)
[![Build](https://github.com/andrewjswan/svitlobot/actions/workflows/test_build.yaml/badge.svg)](https://github.com/andrewjswan/svitlobot/actions/workflows/build.yaml)
[![GitHub](https://img.shields.io/github/license/andrewjswan/svitlobot?color=blue)](https://github.com/andrewjswan/svitlobot/blob/main/LICENSE)
[![GitHub release (latest SemVer including pre-releases)](https://img.shields.io/github/v/release/andrewjswan/svitlobot?include_prereleases)](https://github.com/andrewjswan/svitlobot/releases)
[![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/downloads-pre/andrewjswan/svitlobot/latest/total?label=release@downloads)](https://github.com/andrewjswan/svitlobot/releases)
[![StandWithUkraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://github.com/vshymanskyy/StandWithUkraine/blob/main/docs/README.md)

## 💡 Ідея
Ідея **Svitlo**Bot полягає у створенні простого та зручного рішення для інтеграції з системою [**Світло**Бот](https://svitlobot.in.ua/), що дозволяє автоматично повідомляти про наявність світла.

> [!NOTE]
> [**Світло**Бот](https://svitlobot.in.ua/) - проект ентузіастів для моніторингу статусу світла у вашому будинку, який створила група учнів із ліцею [«Наукова&#160;Зміна»](https://naukova-zmina.org.ua/) - **Чигарьови [Дмитро](https://github.com/DimChig) і Артем**. Суть проекту полягає в тому, аби підключивши вдома або в офісі бота на базі `ESP8266` або `ESP32` або підключивши в розетку на зарядку старенький або непотрібний смартфон/планшет (Android) та налаштувавши його згідно інструкції, ви зможете отримувати сповіщення у свій створений телеграм-канал повідомлення про наявність/відсутність світла на підставі того, йде зарядка цього смартфону чи ні. Він допомагає тисячам українців оперативно дізнаватися про статус електромережі у себе вдома чи в офісі.

## Повна документація проекту

> [!IMPORTANT]
> [**Svitlo**Bot - Документація](https://andrewjswan.github.io/svitlobot/)

## Ключові можливості
*   **Миттєві сповіщення:** Прямі повідомлення у ваш телеграм-канал.
*   **Універсальність:** Підтримка будь-яких плат `ESP8266` та `ESP32`.
*   **Просте встановлення:** Прошивка в один клік через браузер.
*   **Гнучкість:** Можливість інтеграції з **Home Assistant** або робота як автономного пристрою.

## Варіанти прошивки

Виберіть конфігурацію, яка найкраще відповідає вашим потребам:

| Версія | Опис | Функціонал |
| :--- | :--- | :--- |
| [**Svitlo**Bot](https://github.com/andrewjswan/svitlobot/tree/main/svitlobot) | Базова версія | Сповіщення в телеграм-канал від системи [**Світло**Бот](https://svitlobot.in.ua/) при зміні стану живлення. |
| [**Health**Сheck](https://github.com/andrewjswan/svitlobot/tree/main/healthcheck) | Моніторинг зв'язку | "Сигнали життя" (heartbeat) на [**Health**сhecks.io](https://healthchecks.io). Сповістить, якщо пристрій офлайн. |
| [**Custom**URL](https://github.com/andrewjswan/svitlobot/tree/main/custom_url) | Індивідуальний моніторинг | "Сигнали життя" (heartbeat) на будь-який сервіс, URL вказується в налаштуваннях. |
| [**All**-in-**One**](https://github.com/andrewjswan/svitlobot/tree/main/all-in-one) | **Максимальний захист** | **Svitlo**Bot + **Health**Сheck + **Custom**URL. Поєднує прямі звіти в Telegram та зовнішній моніторинг доступності. |

## Швидкий старт (Прошивка)

Встановити прошивку можна двома способами:

1.  **Web Installer (Рекомендовано):** Скористайтеся [**SvitloBot - ESP Web Tools**](https://andrewjswan.github.io/svitlobot/firmware/). Це найпростіший шлях — просто підключіть `ESP` до `USB` та натисніть `Connect` у браузері.
2.  **ESPHome:** Використовуйте готові `.yaml` конфігурації з цього репозиторію для самостійної збірки.

> [!TIP]
> **ESP Web Tools** - [Документація та приклади використання](https://esphome.github.io/esp-web-tools/)

## Повна документація проекту

> [!IMPORTANT]
> [**Svitlo**Bot - Документація](https://andrewjswan.github.io/svitlobot/)

## 🤝 Підтримка та розвиток
Якщо вам подобається проект, ви можете підтримати його зіркою ⭐ на GitHub.
