// Asignacion de destructuración
// Estructura completa en una sola sentencia

var animals = new Array('Perro', 'Gato', 'Caballo')

// Sin destructuring
// var perro = animals[0]
// var gato = animals[1]
// var caballo = animals[2]

// Con destructuring
var [perro, gato, caballo] = animals

console.log(perro, gato, caballo)