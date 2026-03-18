<style>
.md-typeset__table {
    min-width: 100%;
}
.md-typeset__table table:not([class]) {
    display: table;
    width: 100%;
}
</style>

# Каталог прошивок SvitloBot

У цьому розділі зібрані спеціалізовані збірки прошивок, оптимізовані під різні апаратні платформи. Основна логіка моніторингу залишається незмінною, проте функціонал кожної прошивки адаптований під конкретне «залізо»:

## Особливості збірок

* **Індикація та екрани:** Спеціальні версії для пристроїв із дисплеями (OLED/LCD).
* **RGB-статус:** Для мініатюрних плат реалізована колірна індикація через вбудовані адресні світлодіоди.
* **Інтерактивність:** Підтримка фізичних кнопок для керування екраном.

## Оберіть свій пристрій для прошивки

!!! tip "Пристрої"
    Натисніть на назву пристрою, щоб перейти до сторінки зі специфікаціями.

| Пристрій | Тип індикації | Документація |
| :--- | :--- | :--- |
| [**M5Stack Atom Lite**](svitlobot_m5stack_atom_lite.md) | Світлодіод SK6812 RGB | [Відкрити](https://docs.m5stack.com/en/core/ATOM%20Lite) |
| [**M5Stack Atom S3R**](svitlobot_m5stack_atom_s3r.md) | Екран 0.85" 128x128 | [Відкрити](https://docs.m5stack.com/en/core/AtomS3R) |
| [**WaveShare ESP32-S3 Zero**](svitlobot_esp32_s3_zero_with_rgb.md) | Світлодіод WS2812B RGB | [Відкрити](https://www.waveshare.com/wiki/ESP32-S3-Zero) |
| [**WaveShare ESP32-S3 GEEK**](svitlobot_esp32_s3_geek.md) | Екран 1.14" 135x240 | [Відкрити](https://www.waveshare.com/wiki/ESP32-S3-GEEK) |
