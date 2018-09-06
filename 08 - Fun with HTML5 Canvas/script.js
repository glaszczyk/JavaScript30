document.addEventListener('DOMContentLoaded', main);

function main() {
    console.log('foo');

    rad = (deg) => (Math.PI / 180) * deg;

    const canvas = document.getElementById('draw');
    if (canvas.getContext) {
        let context = canvas.getContext('2d');

        context.fillStyle = 'rgb(200, 0, 0)';
        context.fillRect(100, 100, 300, 300);

        context.fillStyle = 'rgba(0, 200, 0, .5)';
        context.fillRect(200, 200, 300, 300);

        context.strokeRect(300, 300, 300, 300);
        
        context.clearRect(301, 301, 99, 99);

        context.strokeStyle = 'rgb(80, 140, 200)';
        context.beginPath();
        context.moveTo(500, 50);
        context.lineTo(600, 100);
        context.lineTo(600, 200);
        context.lineTo(500, 200);
        context.closePath();
        context.fill();

        context.beginPath();
        context.moveTo(400, 400);
        context.lineTo(700, 100);
        context.lineTo(700, 700);
        context.lineTo(400, 400);
        context.stroke();

        context.beginPath();
        context.moveTo(400, 400);
        context.arc(400, 400, 100, rad(0), rad(180));
        context.stroke();
    }
}