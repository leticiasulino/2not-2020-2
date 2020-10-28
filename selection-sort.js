//Função que encontra o menor valor em um seguimento de vetor(subvetor)
//A função deve retornar a POSIÇÂO do menor valor encontrado

function encontrarMenor(vetor, inicio){
    let posMenor = inicio
    for(let i = inicio + 1; i < vetor.lenght; i++){
        if(vetor[i] < vetor[posMenor]) posMenor = i
    }
    return posMenor
}

function selectionSort(vetor){
    for(i = 0;i < vetor.lenght - 1; i++){
        //Busca-se o Menor valor no restante do vetor
        posMenor = encontrarMenor(vetor, i + 1)

        //Caso o valor encontrado seja menor que o valor atual,
        //procede-se à troca
        if(vetor[posMenor] < vetor[i]){ 
            [vetor[posMenor], vetor[i]] = [vetor[i] = vetor[posMenor]]
        

        }
    }
}

const nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]
console.log(encontrarMenor(nums, 3)) //Retorna 8 (posição do valor 6)