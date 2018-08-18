function init() {
    const hands = Array.from(document.querySelectorAll('.hand'));
    hands.forEach(h => {
        h.style.transformOrigin = 'center right';
        // h.style.transform='rotate(90deg)';
    });
};

init();

const date = new Date();
const currentTime = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
};

calculateSecondsPosition = (value) => value * 6 + 90;

calculateMinutesPosition = (value) => value / 10 + 90;

calculateHoursPosition = (value) => value / 2 + 90;

const hoursHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.second-hand');

function add() {
    currentTime.seconds++;
    if (currentTime.seconds === 60) {
        currentTime.minutes++;
        currentTime.seconds = 0;
    }
    if (currentTime.minutes === 60) {
        currentTime.hours++;
        currentTime.minutes = 0;
    }
    if (currentTime.hours === 24) {
        currentTime.hours = 0;
    }
    secondsHand.style.transform = 'rotate(' + calculateSecondsPosition(currentTime.seconds) + 'deg)';
    minutesHand.style.transform = 'rotate(' + calculateMinutesPosition(currentTime.minutes * 60 + currentTime.seconds) + 'deg)';
    hoursHand.style.transform = 'rotate(' + calculateHoursPosition((currentTime.hours % 12) * 60 + currentTime.minutes) + 'deg)';
}

function tickTock() {
    add(),
        setTimeout(
            tickTock,
            1000
        );
}

tickTock()