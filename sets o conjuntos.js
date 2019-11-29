// Almacenar valores e iteralse y los valores deben de ser unicos

var dogs = new Set()

dogs.add('Pincher')
dogs.add('Bull-Terrier')
dogs.add('Chandoso')

// Si se repite el set lo lo volvera a ingresar
// dogs.add('Chandoso')

console.log(dogs)

// Consulta si existe ese dato
console.log(dogs.has('Chandoso'))

// Tamaño del set
console.log(dogs.size)

// Elimina un dato del set
console.log(dogs.delete('Chandoso'))

console.log(dogs)