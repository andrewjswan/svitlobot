<style>
.md-typeset__table {
    min-width: 100%;
}
.md-typeset__table table:not([class]) {
    display: table;
    width: 100%;
}
</style>

# Прошивка

!!! example "Варіанти прошивок"
    | Версія | Опис | Посилання |
    | :--- | :--- | :--- |
    | **Svitlo**Bot | Базова версія **(Рекомендовано)** | [SvitloBot - ESP Web Tools](svitlobot-firmware.md) |
    | **Health**Сheck | Моніторинг зв'язку | [HealthСheck - ESP Web Tools](healthcheck-firmware.md) |
    | **Custom**URL | Індивідуальний моніторинг  | [Custom URL - ESP Web Tools](custom-url-firmware.md) |
    | **All**-in-**One** | Комбінована прошивка | [All-in-One - ESP Web Tools](all-in-one-firmware.md) |

!!! info "Період надсилання HeartBeat"
    Період надсилання "сигналу життя" (heartbeat) в поточній прошивці дорівнює 55с.

!!! note "Опис прошивок"
    [Опис прошивок](index.md#варіанти-прошивки)

!!! tip "ESPHome: Adopt"
    [ESPHome: Інструкція з налаштування](adopt.md)

*[heartbeat]: "Сигнал життя" - Регулярний запит від вашої системи, що підтверджує її коректну роботу, або сповіщає про збій у разі відсутності сигналу.
