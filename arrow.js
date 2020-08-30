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

//Situação alternativa 2: Função com 1 + argumentos

//Função tradicional com 1 + argumentos
let imc = function(peso,altura){
    return peso / (altura ** 2)
}

console.log(imc(87, 1.78))

console.log('__________________________________')

//Arrow function com 1 + argumento
//Os parenteses dos argumentos são obrigatórios quando nº argumentos > 1
let imc2 = (peso, altura) => peso / (altura ** 2)

console.log(imc(87, 1.78))
console.log(imc(87, 1.78))

//CONCLUSÃO: os parênteses só podem ser omitidos da lista de argumentos de uma arrow quando há UM e APENAS UM argumento

//Situação alternativa 3: Função com mais de uma linha no corpo

//Função tradicional
// 5! = 5 * 4 * 3 * 2 * 1 (120)
let fatorial = function(n){
    for(let i = n; i >= 2; i --){
        res *= i
    }
    return res
    }

//Arrow function com corpo maior de uma linha
let fatorial2 = n => {
    let res = 1
    for(let i = n; i >1; i--){
        res *= i
    }
    return res
}

console.log(fatorial(5))
console.log(fatorial2(5))









