var canvas = document.getElementById("draw");
var lienzo = canvas.getContext("2d");
var inicio = 0;

var text    = document.getElementById('lineas');
var button  = document.getElementById('btn')

button.addEventListener('click', lineNumber)

function trazo(color, x_inicio, y_inicio, x_fin, y_fin){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicio, y_inicio);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath();
}

function lineNumber(){
    lienzo.clearRect(0, 0, lienzo.canvas.width, lienzo.canvas.height)
    for(i = 0; i <= lienzo.canvas.width; i = i + parseInt(text.value)){
        trazo('purple', inicio, i, i, lienzo.canvas.height);
        trazo('purple', lienzo.canvas.width, i, i, inicio);
        
        trazo('orange', inicio, lienzo.canvas.height - i, i, inicio);
        trazo('orange', lienzo.canvas.width, i, lienzo.canvas.width - i, lienzo.canvas.height);
    }
}