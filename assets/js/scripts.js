let isAsleep = false;
let isNight = false;

document.getElementById('character').addEventListener('click', toggleSleep);

function toggleSleep() {
    const character = document.getElementById('character');
    character.style.opacity = 0;  // Set opacity to 0 to start fade out
    
    setTimeout(() => {
        isAsleep = !isAsleep;
        character.src = isAsleep ? 'assets/img/fox_asleep.png' : 'assets/img/fox_awake.png';
        character.style.opacity = 1;  // Set opacity to 1 to start fade in
        toggleDayNight();
    }, 1000);  // Wait for 1 second (the duration of the fade out) before switching the image and starting the fade in
}

function toggleDayNight() {
    isNight = !isNight;
    const background = document.getElementById('background');
    background.className = isNight ? 'night' : 'day';
}