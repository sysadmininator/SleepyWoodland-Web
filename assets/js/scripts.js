let isAsleep = false;
let isNight = false;

document.getElementById('character').addEventListener('click', toggleSleep);

function toggleSleep() {
    isAsleep = !isAsleep;
    const character = document.getElementById('character');
    character.src = isAsleep ? 'assets/img/fox_asleep.png' : 'assets/img/fox_awake.png';
    toggleDayNight();
}

function toggleDayNight() {
    isNight = !isNight;
    const background = document.getElementById('background');
    background.className = isNight ? 'night' : 'day';
}