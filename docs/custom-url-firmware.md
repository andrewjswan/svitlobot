<script type="module" src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="../js/installer.js"></script>

<style>
  .md-typeset h1 {
    display: none;
  }
</style>

[![Made for ESPHome](img/made-for-esphome.svg){ align=right loading=lazy style="width:30%" }](https://esphome.io/guides/made_for_esphome.html)

!!! info "ESP Web Tools"
    Зручні інструменти для управління пристроями `ESP8266` та `ESP32` в браузері:

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

---

[SvitloBot | Custom URL](https://github.com/andrewjswan/svitlobot) — Інсталятор на базі [ESP Web Tools](https://esphome.github.io/esp-web-tools/).
