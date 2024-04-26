function setPosition(element, rotation) {
    element.style.transform = `rotate(${rotation}deg)`;
}

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsRotation = ((seconds / 60) * 360) + 90;
    const minutesRotation = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursRotation = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    setPosition(document.getElementById('second-hand'), secondsRotation);
    setPosition(document.getElementById('minute-hand'), minutesRotation);
    setPosition(document.getElementById('hour-hand'), hoursRotation);
}

setInterval(updateClock, 1000);
updateClock(); // Run immediately to avoid delay
