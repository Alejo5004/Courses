// document.addEventListener('keyup', drewWithArrow)
document.addEventListener('keydown', drewWithArrow);

btn = document.getElementById('clear')
btn.addEventListener('click', clearCanvas);

var keys = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    }
var cuadro  = document.getElementById('square');
var papel   = cuadro.getContext('2d');
var inicio  = 0;
var colorcito = "red";


puntoInicio();

function puntoInicio(){
    x = 149;
    y = 149;
    createLine(colorcito, x, y, 151, 151, papel)
}

function createLine(color, x_inicio, y_inicio, x_fin, y_fin, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicio, y_inicio);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath();
}

function drewWithArrow(event){
    movimiento  = 5;

    switch(event.keyCode){
        case keys.LEFT:
            createLine(colorcito, x, y, x - movimiento, y, papel)
            x -= movimiento;

            break;

        case keys.UP:
            createLine(colorcito, x, y, x, y - movimiento, papel)
            y -= movimiento;
            break;

        case keys.RIGHT:
            createLine(colorcito, x, y, x + movimiento, y, papel)
            x += movimiento;
            break;

        case keys.DOWN:
            createLine(colorcito, x, y, x, y + movimiento, papel)
            y += movimiento;
            break;

        default:
            console.log('Otro tecla')
            break;
    }

    // Para que cumpla los limites del canvas
    if(x >= cuadro.width){
        x = cuadro.width - 1;
    }
    if(x <= inicio){
        x = inicio + 1;
    }
    if(y >= cuadro.height){
        y = cuadro.height - 1;
    }
    if(y <= inicio){
        y = inicio + 1;
    }
}

function clearCanvas(){
    papel.clearRect(0, 0, cuadro.width, cuadro.height);

    puntoInicio();
}

function cambioColor(color){
    colorcito = color;
}