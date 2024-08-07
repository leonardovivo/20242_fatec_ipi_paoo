// Variaveis e constantes

// var // Recomendado não usar
// let
// const



// Coerção implicita e explicita

// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)
// const n4 = n1 + Number(n2)
// console.log(n4)



// Comparação por igualdade: == e ===
// Recomendado não usar ==

// console.log(1 == 1)
// console.log(1 === 1)
// console.log( 1 == '1')
// console.log(1 === '1')
// console.log(true === 1)
// console.log(true == 1)
// console.log(1 == [1])
// console.log(1 == [])
// console.log(1 == [0])
// console.log(1 == [0, 1])
// console.log(1 == [1, 0])
// console.log(3 == [3])
// console.log(null == null)
// console.log(null === undefined)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])
// console.log(null == 0)
// console.log(false == 0)



// Vetores

// v1 = []
// console.log(v1.length)
// v1[0] = 'abc'
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)
// console.log(v1)

// for(let i = 0; i < v1.length; i++) {
//     console.log(v1[i])
// }



// Dado esse vetor, construa outro. Ele deve conter apenas os nomes que contenham a letra A.

// const nomes = ['Ana', 'João', 'Rodrigo', 'Angelica']
// const resultado = nomes.filter((n) => (return n[0] === 'A'))
// console.log(resultado)
// const resultado = []

// for (let i = 0; i < nomes.length; i++) {
//     if (nomes[i].includes('A') || nomes[i].includes('a')) {
//         resultado.push(nomes[i])
//     }
// }

// console.log(resultado)



// Dado esse vetor, construa outro. Ele deve conter as letras iniciais de cada nome, na sua posição original
// [A, J, R, A]

const nomes = ['Ana', 'João', 'Rodrigo', 'Angelica'];
const iniciais = [];

for (let i = 0; i < nomes.length; i++) {
    iniciais.push(nomes[i][0]);
}

console.log(iniciais);
