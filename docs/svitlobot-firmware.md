<script type="module" src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="../js/installer.js"></script>

# ESP Web Tools

Зручні інструменти для управління пристроями `ESP8266` та `ESP32` в браузері:

* Встановити та оновити прошивку.
* Підключити пристрій до мережі `WiFi`.
* Відвідати `WEB-інтерфейс` пристрою.
* Отримати доступ до журналів та надсилати команди терміналу.
* Додати пристрої до [Home Assistant](https://www.home-assistant.io).

<a href="https://esphome.io/guides/made_for_esphome.html" target="_blank">
  <img src="../img/made-for-esphome.svg" width="300px" alt="Made for ESPHome"/>
</a>

## Встановити SvitloBot <b><span id="version"></span></b>

<div class="esp-installer-page">
<div class="radios">
  <label>
    <input
      type="radio"
      name="svitlobot-device"
      class="device"
      id="svitlobot"
      value=""
      checked
    />
    <img src="../img/espressif.png" alt="ESP8266/ESP32" />
    <span></span>
  </label>
  <label>
    <input
      type="radio"
      name="svitlobot-device"
      class="device"
      id="svitlobot"
      value="svitlobot-atom"
    />
    <img src="../img/devices/m5stack_atom_lite.png" alt="M5Stack Atom Lite" />
    <span>M5Stack Atom Lite</span>
  </label>
  <label>
    <input
      type="radio"
      name="svitlobot-device"
      class="device"
      id="svitlobot"
      value="svitlobot-atoms3r"
    />
    <img src="../img/devices/m5stack_atom_s3r.png" alt="M5Stack Atom S3R" />
    <span>M5Stack Atom S3R</span>
  </label>
  <label>
    <input
      type="radio"
      name="svitlobot-device"
      class="device"
      id="svitlobot"
      value="svitlobot-zero"
    />
    <img src="../img/devices/esp32_s3_zero_with_rgb.png" alt="ESP32 S3 with RGB" />
    <span>ESP32 S3 with RGB</span>
  </label>
  <label>
    <input
      type="radio"
      name="svitlobot-device"
      class="device"
      id="svitlobot"
      value="svitlobot-s3-geek"
    />
    <img src="../img/devices/esp32-s3-geek.png" alt="WaveShare ESP32 S3 GEEK" />
    <span>WaveShare ESP32 S3 GEEK</span>
  </label>
</div>

<div class="button-row">
  <esp-web-install-button manifest="../svitlobot-manifest.json"></esp-web-install-button>
</div>

</div>

---

[SvitloBot](https://github.com/andrewjswan/svitlobot) — Інсталятор на базі [ESP Web Tools](https://esphome.github.io/esp-web-tools/).
