// Contenedor donde se pueden almacenar multiples elementos

// Va a tener 5 espacios de almacenamiento
var arreglo = new Array(5)

var languages = new Array('Ruby', 'Php', 'Go')

// El metodo Push añade un nuevo dato al array
languages.push('Java')

// El metodo Pop elimina el ultimo dato del array
// languages.pop();

console.log(languages)

// Permite interactuar con cada uno de los elementos de manera individual
console.log(languages[2])

// ordena los elementos en orden alfabetico
console.log(languages.sort())

// Cuenta el total de los elementos
console.log(languages.length)