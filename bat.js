const BatteryLevel = document.querySelector(".battery");
navigator.getBattery().then(function(battery) {
    const level = battery.level;
    const status = level * 100 + "%";

    BatteryLevel.innerHTML = status;
})