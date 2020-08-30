//Expressão de Função "tadicional"

//Características desta função
// - um único argumento -> n
// - Seu corpo tem apenas uma linha de código com return
let quadrado = function(n) {
    return n * n
}

// A função tradicional acima pode ser transformada em um ARROW FUNCTION
// - Desaparece a palavra function
// - O argumento não precisa de parenteses
// - Após o argumento há a flecha (arrow) =>
// - As chaves e a palavra return são omitidos
let quadrado2 = n => n * n

console.log(quadrado(6))
console.log(quadrado2(6))

// Situação alternativa 1: Função sem argumento

//Retorna um número aleatório entre 0 e 99
let aleatorio = function(){
    //Math.random() -> gera um número aleatório entre o e 1 (fracionario)
    //Math.floor() -> "corta fora" as casas decimais de um número
    return Math.floor(Math.random() * 100)    
}

console.log('__________________________________')
console.log(aleatorio())

//Arrow function com 0 argumento
// - Os parênteses vazios marcam o lugar do argumento (obrigatório)
let aleatorio2 = () => Math.floor(Math.random() * 1000)



console.log('__________________________________')






