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
    Зручний інструмент для управління пристроями `ESP8266` та `ESP32` в браузері:

    * Встановити та оновити прошивку.
    * Підключити пристрій до мережі `WiFi`.
    * Відвідати `WEB-інтерфейс` пристрою.
    * Отримати доступ до журналів та надсилати команди терміналу.
    * Додати пристрої до [Home Assistant](https://www.home-assistant.io).

## Встановити SvitloBot | Debug <b><span id="version"></span></b>

<div class="esp-installer-page">
<div class="radios">
  <label>
    <input
      type="radio"
      name="combo-device"
      class="device"
      id="debug"
      value="svitlobot"
      checked
    />
    <img src="../img/debug.png" alt="ESP8266/ESP32 | Debug" />
    <span>SvitloBot | Debug</span>
  </label>
  <label>
    <input
      type="radio"
      name="combo-device"
      class="device"
      id="dev"
      value="svitlobot"
    />
    <img src="../img/dev.png" alt="ESP8266/ESP32 | Dev" />
    <span>SvitloBot | DEV</span>
  </label>
</div>

<div class="button-row">
  <esp-web-install-button manifest="../svitlobot-debug-manifest.json"></esp-web-install-button>
</div>

</div>

---

[SvitloBot | Debug](https://github.com/andrewjswan/svitlobot) — Інсталятор на базі [ESP Web Tools](https://esphome.github.io/esp-web-tools/).
