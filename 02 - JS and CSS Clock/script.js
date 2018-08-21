function init() {
    const hands = Array.from(document.querySelectorAll('.hand'));
    hands.forEach(h => {
        h.style.transformOrigin = 'center right';
        // h.style.transform='rotate(90deg)';
    });
};

init();

function newDate() {
    const date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
}

calculateSecondsPosition = (value) => value * 6 + 90;

calculateMinutesPosition = (value) => value / 10 + 90;

calculateHoursPosition = (value) => value / 2 + 90;

const hoursHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.second-hand');

function add() {
    const currentTime = newDate();
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