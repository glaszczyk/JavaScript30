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

calculateSecondsPosition = (value) => value.seconds * 6 + 90;

calculateMinutesPosition = (value) => (value.minutes * 60 + value.seconds) / 10 + 90;

calculateHoursPosition = (value) => ((value.hours % 12) * 60 + value.minutes) / 2 + 90;

const hoursHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.second-hand');

function add() {
    const currentTime = newDate();
    secondsHand.style.transform = `rotate(${calculateSecondsPosition(currentTime)}deg)`;
    minutesHand.style.transform = `rotate(${calculateMinutesPosition(currentTime)}deg)`;
    hoursHand.style.transform = `rotate(${calculateHoursPosition(currentTime)}deg)`;
}

function tickTock() {
    add(),
        setTimeout(
            tickTock,
            1000
        );
}

tickTock()