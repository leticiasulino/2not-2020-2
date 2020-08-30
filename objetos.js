//Declaração de objetos vazio
let pessoa = {}             //Metodo "Moderno"
let pessoas2 = new Object() //Metodo "Tradicional"

//Declarando e iniciando um objeto já com propriedades
//- Propriedade -> atributo + valor 
let pessoa3 = {
    nome: 'João das Couves',
    naturalidade: 'Franc-SP',
    'data de nascimento': '1997-11-03',
    estudante_fatec: true
}

//Acessando uma propriedade de um objeto
//Atributo é uma única palavra -> sintaxe do ponto
console.log(pessoa3.nome)
console.log(pessoa3.estudante_fatec)

//Acessando uma propriedade composta por várias palavras -> 
//sintaxe dos colchetes
console.log(pessoa3['data de nascimento'])

//Sintaxe dos colchetes sempre funciona
console.log(pessoa3['naturalidade'])

let atrib = 'nome'
console.log(pessoa3[atrib])

//Criando novas propriedades em um objeto
//-> basta atriuir o valor a um nome de atributo, segundo
//a sintaxe apropriada a cada caso
pessoa3.nacionalidade = 'portuguesa'            //Única palavra
pessoa3['registro de estrangeiro'] = 123456789  //Varias palavras

//Eliminando uma propriedade
delete pessoa.estutante_fatec

console.log('-----------------------------')

console.log(pessoa3)

console.log('-----------------------------')

//Como percorrer todas as propriedades de um objeto: for...in
for(let prop in pessoa3){
    console.log(prop)
}
console.log('-----------------------------')

//Listando atributo e valor de um objeto usando for..in
for(let atrib in pessoa3){
    //console.log('Atributo: '+ atrib + '; valor: ' + pessoa3[atrib])

    //Usando string template
    console.log(`Atributo: ${atrib}; valor: ${pessoa3[atrib]}`) // é utilizado acento no lugar de aspas
}





