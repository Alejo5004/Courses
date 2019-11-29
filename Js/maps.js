// Estructura de datos atraves de una clave y un valor

var car = new Map();

car.set('brand', 'Toyota')
car.set('name', 'Golf')
car.set('color', 'white')

console.log(car)

// Metodos del map
// Toma el valor de la clave 
console.log(car.get('name'))

// Pregunta si lla existe la propiedad brand
console.log(car.has('brand')) // true

// Eliminar la propiedad
car.delete('brand')

// Ahora si se vuelve a preguntar lo mismo que lo pasado 
console.log(car.has('brand')) // false

console.log(car)