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

const foo = (event) => console.log(codes[event.keyCode]);

keys.map(key => key.addEventListener('keydown', foo));

document.addEventListener('keydown', foo);

console.log(keys);