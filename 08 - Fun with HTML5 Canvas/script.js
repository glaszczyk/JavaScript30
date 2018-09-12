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

        // context.fillStyle = 'rgb(200, 0, 0)';
        // context.fillRect(100, 100, 300, 300);

        // context.fillStyle = 'rgba(0, 200, 0, .5)';
        // context.fillRect(200, 200, 300, 300);

        // context.strokeRect(300, 300, 300, 300);
        
        // context.clearRect(301, 301, 99, 99);

        // context.strokeStyle = 'rgb(80, 140, 200)';
        // context.beginPath();
        // context.moveTo(500, 50);
        // context.lineTo(600, 100);
        // context.lineTo(500, 200);
        // context.lineTo(600, 200);
        // context.closePath();
        // context.fill();

        // context.lineCap = 'round';
        // context.lineWidth = 10;
        // context.beginPath();
        // context.moveTo(400, 400);
        // context.lineTo(700, 100);
        // context.stroke();
        // context.beginPath();
        // context.lineWidth = 11;
        // context.moveTo(700, 100);
        // context.lineTo(700, 700);
        // context.stroke();
        // context.beginPath();
        // context.moveTo(700, 700);
        // context.lineWidth = 12;
        // context.lineTo(400, 400);
        // context.stroke();

        // context.beginPath();
        // context.moveTo(400, 400);
        // context.arc(400, 400, 100, rad(0), rad(180));
        // context.stroke();
    }

    canvas.addEventListener('mousedown', (event) => onMouseDown(event));
    canvas.addEventListener('mousemove', (event) => onMouseMove(event));
    canvas.addEventListener('mouseup', (event) => onMouseUp(event));
}