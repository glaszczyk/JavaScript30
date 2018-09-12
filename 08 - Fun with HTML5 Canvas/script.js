document.addEventListener('DOMContentLoaded', main);

function main() {
    const canvas = document.getElementById('draw');
    let mouseDown = false;
    let cursor;
    let previousCursor;
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

    drawLine = (ct, width, point1, point2) => {
        ct.beginPath();
        const line = changeStroke(width);
        ct.lineCap = 'round';
        ct.strokeStyle = 'rgb(80, 140, 200)';
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
            drawLine(context, strokeWidth, previousCursor, cursor);
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