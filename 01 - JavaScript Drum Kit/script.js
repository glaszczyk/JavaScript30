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

const keys = Array.from(document.getElementsByTagName('kbd'));

getParent = (node) => node.parentElement;

getClassName = (node) => node.getAttribute('class');

addClassName = (node, currentClassName, className) => node.setAttribute('class', `${currentClassName} ${className}`);

const checkKey = (event) => {
    key = codes[event.keyCode] || null;
    return key;
}

const getNode = (keys, key) => keys.filter(element => element.innerText === key)[0]

const addHighlightOnInstrument = (key) => {
    const node =  getNode(keys, key);
    const parentNode = getParent(node);
    const parentClass = getClassName(parentNode);
    addClassName(parentNode, parentClass,'playing');
};

const removeHighlightOnInstrument = (key) => {
    const node = getNode(keys, key);
    const parentNode = getParent(node);
    addClassName(parentNode, '','key');
};

document.addEventListener('keydown', (event) => {
    checkKey(event);
    addHighlightOnInstrument(key)
});
document.addEventListener('keyup', (event) => { 
    checkKey(event);
    removeHighlightOnInstrument(key)
});

console.log(keys);