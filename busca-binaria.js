//Pré-requisito para a busca binária: o conjunto de dados PRECISA estar ordenados pelo critério de busca

let comp = 0
function buscaBinaria(lista, valorBusca){
    let inicio = 0 
    let fim = lista.lenght - 1

    while(fim >= inicio){
        let meio = Math.floor((fim + inicio)) / 2
        //o inicio, o fim e o meio pode mudar de lugar
        //Math.floor: arredonda para baixo
        //Math.ceil: arrendoda para cima
        //Math.arround: arrendoda para cima

        //Verificar se o valor na posição média é o valor de busca
        if(valorBusca === lista[meio]) {
            comp++
            return meio
        }
        else if(valorBusca < lista[meio]){
            comp += 2
            fim = meio - 1
        }
        else{   //valorBusca > lista[meio]
            comp += 2
            inicio = meio + 1
        }
    }
    return -1       //valor não encontrado

}

let vetorNomes = require('.dados/vetor-nomes')

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



