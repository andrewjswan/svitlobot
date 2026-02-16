$(document).ready(function() {
    // Version
    const url = "https://andrewjswan.github.io/svitlobot/svitlobot-manifest.json";
    $.getJSON(url).done(function(data) {
        $("#version").text(data.version);
    });

    // Handle selecting a device
    document.querySelectorAll("input.device").forEach((radio) => {
        radio.addEventListener("change", () => {
            const button = document.querySelector('esp-web-install-button');
            let device = radio.value;
            let family = radio.id;
            device = device ? `devices/${device}-` : "";
            button.manifest = `${device}${family}-manifest.json`;
        });
    });
});
