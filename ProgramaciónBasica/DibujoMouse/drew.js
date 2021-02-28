var clear   = document.getElementById('clear');
var eraser  = document.getElementById('eraser');
var lienzo  = document.getElementById('canvas');
var ctx     = lienzo.getContext('2d');
var drew    = false;
var removed     = false;
var strokeSize  = 3;
var colorStroke = "red";

eraser.addEventListener('click', eraserCanvas);

lienzo.addEventListener('mousedown', startStroke);
lienzo.addEventListener('mousemove', stroke);
document.addEventListener('mouseup', e => {
    drew    = false;
});

clear.addEventListener('click', clearCanvas);

function createLine(color, x_inicio, y_inicio, x_fin, y_fin, lienzo, strokeSize){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = strokeSize;
    lienzo.moveTo(x_inicio, y_inicio);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath();
}

function startStroke(event){
    drew = true;
    x   = event.offsetX;
    y   = event.offsetY;
}

function stroke(event){
    if(drew){
        createLine(colorStroke, x, y, event.offsetX, event.offsetY, ctx, strokeSize)
        x   = event.offsetX
        y   = event.offsetY
    }
}

function clearCanvas(){
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
}

function cambioColor(color){
    colorStroke = color
}

function sizeStroke(size){
    strokeSize = size
}

function eraserCanvas(event){
    removed = !removed
    lienzo.addEventListener('mousemove', deleted);
}

function deleted(event){
    if(removed){
        x   = event.offsetX
        y   = event.offsetY
        ctx.clearRect(x - 10,y - 10, 30,30);
    }
}