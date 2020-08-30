let vetor1 = [] //forma 'moderna'
let vetor2 = Array() // forma Tradicional

//criação de vetores com valores iniciais
let vetor3 = [2,3,4,5]
let vetor4 = Array('vaca', 'cachorro', 'gato')

//inserção de novos elementos em um vetor

//forma 1: push() -> adiciona novos elementos AO FINAL do vetor
vetor1.push('laranja') //
vetor1.push('limão')

//como exibir
console.log(vetor1)


//forma 2: unshift() -> adiciona novos elementos no começo do vetor

vetor1.unshift('maça')
console.log(vetor1)

vetor1.unshift('abacaxi')
console.log(vetor1)

//forma 3: splice()
// 1º parametro a posição de inserção
//2ºquantos elementos serão eliminados (para inserção == 0)

vetor1.splice(2,0,'morango')
console.log(vetor1)

//REMOÇÃO DE ELEMENTOS DO VETOR

//Forma 1: pop() -> retira o ultimo elemento do vetor
let x1 = vetor1.pop()
console.log(vetor1, x1)

//Forma 2 : shift() -> retira o primeiro elemento do vetor
let x2 = vetor1.shift()
console.log(vetor1,x2)


//Forma 3: splice()
//1ºparametro: a quantidade de elementos removidos
//2º parametro: a quantidade de elementos a serem removidos
// OBS.: o retorno de splice() na remoção será um vetor contendo o (s)
let x3 = vetor1.splice(2,1)
console.log(vetor1,x3)

//O splice() também serve para fazer substituições
vetor1.splice(1,1,'pera')
console.log(vetor1)


//colocar mais elementos nos vetores
vetor1.push('amora')
vetor1.push('pessego')
vetor1.push('uva','jaboticaba')
vetor1.push('abacate')
console.log(vetor1)

//modelos de percurso dos vetores

//Forma 1: usando o FOR tradicional
//O inicio da variavel na posição ZERO e seu incremento devem ir até uma posição antes do
//seu nº de elementos (length)

//i++ significa i = i + 1
for(let i = 0; i < vetor1.length; i++)
    console.log(vetor1[i])


console.log('-----------------------------')

//Forma 2: For...of 
//percorrer o vetor do primeiro ao ultimo elemento de forma mais simples
for(let fruta of vetor1) {
    console.log(fruta)
}