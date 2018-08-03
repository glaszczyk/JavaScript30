// Drumkit code
const codes = {
    '65': 'A', 
    '83': 'S', 
    '68': 'D', 
    '70': 'F', 
    '71': 'G', 
    '72': 'H', 
    '74': 'J', 
    '75': 'K', 
    '76': 'L' 
}

const findAudio = (id) => document.querySelector(`audio[data-key="${id}"]`)
const findScreenKey = (id) => document.querySelector(`div[data-key="${id}"]`)

getClassName = (node) => node.getAttribute('class');

addClassName = (node, currentClassName, className) => node.setAttribute('class', `${currentClassName} ${className}`);

const checkKey = (event) => {
    key = event.keyCode || null;
    if (key !== null) return key;
}

const addHighlightOnInstrument = (key) => {
    const button = findScreenKey(key);
    const buttonClass = getClassName(button);
    addClassName(button, buttonClass,'playing');
};

const removeHighlightOnInstrument = (key) => {
    const button = findScreenKey(key);
    const buttonClass = getClassName(button);
    addClassName(button, '', 'key');
};

const playSound = (sound) => {
    sound.currentTime = 0;
    sound.play();
}

document.addEventListener('keydown', (event) => {
    addHighlightOnInstrument(key);
});
document.addEventListener('keyup', (event) => { 
    const key = checkKey(event);
    const sound = findAudio(key);
    playSound(sound);
    removeHighlightOnInstrument(key);
});