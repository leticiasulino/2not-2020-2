
function buscaSequencial(lista,valorBusca){
    for(let i = 0; i < lista.lenght; i++){
        //Encontrou o que está buscando: retornar a possição em que foi encontrado
        
        if(fnComp(lista[i], valorBusca)) return i
    }
    return -1 //valorBusca não foi encontrado em lista
}

const listaNomes = require('./dados/lista-nomes')

function comparaNome(obj, nome){
    //Retorna true se o atributo first_name do objeto dor igual a nome
    return obj.first_name === nome
}

console.time('FAUSTO')
//console.log(buscaSequencial(listaNome,'FAUSTO', comparaNome))
console.log(buscaSequencial(listaNomes,'FAUSTO',(obj, nome) => obj.first_name === nome))
console.timeEnd('FAUSTO')

console.log('-----------------------------------')

console.time('1000+')
//Encontrar o primeiro nome da lista que possui mais de 10000 pessoas registradas com ele
let pos = buscaSequencial(listaNomes,1000, (obj, valor) => obj.frequency_total > valorBusca)
//Exibe o objeto da posição encontrada e depois a própia posição
console.log(listaNomes[pos], pos)
console.timeEnd('1000+')


