// Let solo se usa para la signacion de una variable que este en un bloque de código

function suma(valor1, valor2){
    var resultado = valor1 + valor2
    console.log(`El resultado de la suma de los dos digitos es ${resultado}`)
}

for(let i = 0; i < 11; i++){
    console.log(`El valor de i es ${i}`)
}
/*let no se puede usar por fuera de la función o sino salta error (mejor usar var) */
// console.log(`El ultimo valor de i es ${i}`) // error

suma(5, 4)