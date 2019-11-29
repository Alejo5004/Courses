// Se puede asignar valores
// Js es debilmente tipado al no seleccionar el tipo de datop que debe tener almacenado

// Se puede Reacicnar la variable cuantas veces se decee
var age = 21
var from = 'Colombia'

// No puede reasignar la constante
const NAME = 'Alejo'

// Reasignación de variables
age = 19
from = 'Bogotá'
// NAME = 'Andrés' // salta error en la consola

// Nota: Las constantes son en mayúscula y las variables en minusculas

/* Nota: Las comillas simples('') y las comillas dobles("") js las detecta como un string
si se quiere usar variables en las cadenas toca utilizar otras comillas(``)*/

console.log(`Hola soy ${NAME} nací en ${from} y tengo ${age}`)