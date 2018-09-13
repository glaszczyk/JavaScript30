document.addEventListener('DOMContentLoaded', main);

function main() {
    const canvas = document.getElementById('draw');
    let mouseDown = false;
    let cursor;
    let previousCursor;
    let color = {
        red: 255,
        green: 0,
        blue: 0
    };
    let speed = 1;
    let strokeWidth = {
        width: 30,
        mode: 'decrease'
    }
    let context;

    rad = (deg) => (Math.PI / 180) * deg;

    changeStroke = (stroke) => {
        switch (stroke.mode) {
            case 'decrease': {
                stroke.width = stroke.width - 0.2;
                if (stroke.width<1) {
                    stroke.mode = 'increase';
                }
                break;
            }
            case 'increase': {
                stroke.width = stroke.width + 0.2;
                if (stroke.width>30) {
                    stroke.mode = 'decrease';
                }
            }
        }
        return stroke;
    }

    circle = (ct, {x, y}, radius) => {
        ct.beginPath();
        const cradius = changeStroke(radius);
        ct.arc(x, y, cradius.width, rad(0), rad(360));
        ct.fill();
    }
    increaseChannel = (value, speed) => (value + speed >= 255) ? 255 : value + speed;

    decreaseChannel = (value, speed) => (value - speed <= 0) ? 0 : value - speed;
    
    colorRGB = ({red, green, blue}, speed) => {
        if (red === 255 && green < 255 && blue === 0) { green = increaseChannel(green, speed)}
        else if (red > 0 && green === 255 && blue === 0) { red = decreaseChannel(red, speed) }
        else if (red === 0 && green === 255 && blue < 255) {blue = increaseChannel(blue, speed)}
        else if (red === 0 && green > 0 && blue === 255) {green = decreaseChannel(green, speed)}
        else if (red < 255 && green === 0 && blue === 255 ) {red = increaseChannel(red, speed)}
        else if (red === 255 && green === 0 && blue > 0 ) {blue = decreaseChannel(blue, speed)};
        color = { red, green, blue};
        return `rgb(${red}, ${green}, ${blue})`;
    }
    
    calculateSpeed = (point1, point2) => {
        const s = Math.floor(Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2));
        return (s>10) ? 10 : s;
    }

    drawLine = (ct, rgbColor, width, point1, point2) => {
        ct.beginPath();
        const line = changeStroke(width);
        ct.lineCap = 'round';
        speed = calculateSpeed(point1, point2);
        ct.strokeStyle = colorRGB(rgbColor, speed);
        ct.lineWidth = line.width;
        ct.moveTo(point1.x, point1.y);
        ct.lineTo(point2.x, point2.y);
        ct.stroke();
    }

    position = (x, y) => ({x, y});
    
    onMouseDown = (e) => {
        mouseDown = true;
        cursor = position(e.x, e.y);
    }
    
    onMouseMove = (e) => {
        if (mouseDown) {
            previousCursor = {...cursor} ;
            cursor = position(e.x, e.y);
            drawLine(context, color, strokeWidth, previousCursor, cursor);
        }
        
    }
    
    onMouseUp = () => {
        mouseDown = false;
    }

    if (canvas.getContext) {
        context = canvas.getContext('2d');
    }

    canvas.addEventListener('mousedown', (event) => onMouseDown(event));
    canvas.addEventListener('mousemove', (event) => onMouseMove(event));
    canvas.addEventListener('mouseup', (event) => onMouseUp(event));
}