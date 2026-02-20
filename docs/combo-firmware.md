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
    Зручний інструмент для управління пристроями `ESP8266` та `ESP32` в браузері:

    * Встановити та оновити прошивку.
    * Підключити пристрій до мережі `WiFi`.
    * Відвідати `WEB-інтерфейс` пристрою.
    * Отримати доступ до журналів та надсилати команди терміналу.
    * Додати пристрої до [Home Assistant](https://www.home-assistant.io).

## Встановити SvitloBot Combo <b><span id="version"></span></b>

<div class="esp-installer-page">
<div class="radios">
  <label>
    <input
      type="radio"
      name="combo-device"
      class="device"
      id="healthcheck"
      value="svitlobot"
      checked
    />
    <img src="../img/espressif.png" alt="ESP8266/ESP32" />
    <span>SvitloBot | HealthCheck</span>
  </label>
  <label>
    <input
      type="radio"
      name="combo-device"
      class="device"
      id="custom-url"
      value="svitlobot"
    />
    <img src="../img/espressif.png" alt="ESP8266/ESP32" />
    <span>SvitloBot | Custom URL</span>
  </label>
</div>

<div class="button-row">
  <esp-web-install-button manifest="../svitlobot-healthcheck-manifest.json"></esp-web-install-button>
</div>

</div>

---

[SvitloBot | Combo](https://github.com/andrewjswan/svitlobot) — Інсталятор на базі [ESP Web Tools](https://esphome.github.io/esp-web-tools/).
