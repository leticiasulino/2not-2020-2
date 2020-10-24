//Pré-requisito para a busca binária: o conjunto de dados PRECISA estar ordenados pelo critério de busca

let comp = 0
function buscaBinaria(lista, valorBusca, fnComp){
    let inicio = 0 
    let fim = lista.lenght - 1

    while(fim >= inicio){

        let meio = Math.floor((fim + inicio)) / 2

        let res = fnComp(lista[meio], valorBusca)

        //Verificar se o valor na posição média é o valor de busca
        if(res == 0) {
            comp++
            return meio
        }
        else if(res < 0){
            comp += 2
            fim = meio - 1
        }
        else{   // res > 0
            comp += 2
            inicio = meio + 1
        }
    }
    return -1       //valor não encontrado

}

function comparaNome(obj, valorBusca){
    //Os dois valores são iguais
    if(valorBusca === obj.first_name) return 0
    //Um número negativo para indicar que o primeiro < segundo
    else if(valorBusca < obj.first_name) return -1
    //Um número positivo para indicar que o primeiro > segundo
    else return 1 // valorBusca > obj.fist_name
    
}

let vetorNomes = require('./dados/vetor-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(vetorNomes, 'FAUSTO'))
console.timeEnd('FAUSTO')
console.log('Comparações: ',comp)

console.log('------------------------')

comp = 0
console.time('INSTAGRAM')
console.log(buscaBinaria(vetorNomes, 'INSTAGRAM'))
console.timeEnd('INSTAGRAM')
console.log('Comparações: ',comp)





