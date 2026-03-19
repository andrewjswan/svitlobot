---
title: CustomURL прошивка
description: Індивідуальний моніторинг | "Сигнали життя" (heartbeat) на будь-який сервіс
---

<script type="module" src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="../js/installer.js"></script>

<style>
  .md-typeset h1 {
    display: none;
  }
</style>

<div style="float: right; width: 30%; margin-left: 10px;" markdown="1">

[![Made for ESPHome](img/made-for-esphome.svg){ loading=lazy style="width:100% }](https://esphome.io/guides/made_for_esphome.html)

[![ESPHome](https://www.openhomefoundation.org/badges/esphome.png){ loading=lazy style="width:100% }](https://www.openhomefoundation.org)

</div>

!!! info "ESP Web Tools"
    Зручні інструменти для управління пристроями **ESP32** та **ESP8266** в браузері:

    * Встановити та оновити прошивку.
    * Підключити пристрій до мережі `WiFi`.
    * Відвідати `WEB-інтерфейс` пристрою.
    * Отримати доступ до журналів та надсилати команди терміналу.
    * Додати пристрої до [Home Assistant](https://www.home-assistant.io).

## Встановити Custom URL <b><span id="version"></span></b>

<div class="esp-installer-page">
<div class="radios">
  <label>
    <input
      type="radio"
      name="custom_url-device"
      class="device"
      id="custom_url"
      value=""
      checked
    />
    <img src="../img/espressif.png" alt="ESP8266/ESP32" />
    <span></span>
  </label>
</div>

<div class="button-row">
  <esp-web-install-button manifest="../custom_url-manifest.json"></esp-web-install-button>
</div>

</div>

## Досвідчені користувачі

- Цей пристрій можна адаптувати (adopt) в [ESPHome dashboard](https://my.home-assistant.io/redirect/supervisor_addon/?addon=5c53de3b_esphome&repository_url=https%3A%2F%2Fgithub.com%2Fesphome%2Fhome-assistant-addon)
- Конфігураційний файл YAML доступний на [GitHub](https://github.com/andrewjswan/svitlobot)

---

[SvitloBot | Custom URL](https://github.com/andrewjswan/svitlobot) — Інсталятор на базі [ESP Web Tools](https://esphome.github.io/esp-web-tools/).

*[ESP32]: Серія мікроконтролерів типу «система на кристалі» китайського виробника Espressif, що мають інтегровані контролери Wi-Fi і Bluetooth, низьке енергоспоживання і невисоку ціну.
*[ESP8266]: Мікроконтролер китайського виробника Espressif з інтерфейсом Wi-Fi. Наприклад, NodeMCU або Wemos D1 Mini.
