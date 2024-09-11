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



//CLOSURES


//FUNÇÃO DE ALTA ORDEM (CHAMANDO UMA FUNÇÃO DENTRO DE OUTRA FUNÇÃO)
// function f (funcao){
//     console.log('f')
//     funcao()()()
//     return () => console.log('i')
// }

// function g(){
//     console.log('g')
//     return function(){
//         console.log('Fui criada por g')
//         return () => {console.log('h'); return () => 'k'}
//     }
// }

// f(g())()

/*------------------------------------------ */

//FUNÇÃO PODE SER ATRIBUIDA EM UMA VARIAVEL
// let umaFuncao = function(){
//     console.log('sou uma função')
// }
// umaFuncao()


/*-------------------------------------- */

//TIPOS DE FUNÇÕES
//Funções regulares e arrow functions

//ARROW FUNCTIONS
//Exemplo 4 
    // const ehPar = n => n % 2 === 0

//Exemplo 3
    // const f = () => {
    //     (return) //ERRO DE SINTAXE
    //     (2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 )
    // }
    // console.log(f())

//Exemplo 2 (sem usar return (quando n usa chaves (TEM APENA 1 INSTRUÇÃO PRA OMITIR A {} )))
    // const dobro = n => n * 2
    // console.log(dobro(5))

//Exemplo 1
        // const hello = () => console.log('Hello')
        // hello()
        // const helloNome = (nome, idade) => console.log('Oi, ' + nome)


//FUNÇÃO REGULAR
//Exemplo 4 de função (parâmetros com valore padrão)
    // const triplo = function (n = 5){
    //     return 3 * n
    // }
    // console.log(triplo(6))
    // console.log(triplo(undefined))

//Exemplo 3 de função anôima (sem nome)
    // cont dobro function(n){
    //      return 2 *n
    // }
    // console.log(dobro(3))

//Exemplo 2
    // function somar(a,b){
    //     return a + b
    // }
    // console.log(soma(1, 2))

//Exemplo 1
    // function hello(){
    //     console.log('oi')
    // }
    // hello()
    // function hello(nome){
    //     console.log('Oi, ' + nome)
    // }
    // hello('Ana')

//-----------------------------------------------//

//FUNÇÃO "REDUCE"//
// const numeros = [1, 2, 3, 4]
// const soma =numeros.reduce((ac, v) => ac + v)
// console.log(soma)

//------------------------------------------------//

//FUNÇÃO "SOME"
// const nome = ['Ana', 'João', 'Rodrigo', 'Angelica']
// Verifica se pelo meno um começa com a
// const resultado = nomes.some(n => n[0] === 'A' || n[0] === 'a')
// console.log(resultado)

//--------------------------------------------------//

//FUNÇÃO "EVERY" nesse caso verifica se TODOS começa com A ou a
// const resultado = nomes.every(n => n[0] === 'A' || n[0] === 'a')
//console.log(resultado)

//------------------------------------------------------//

//let m = 1
//const numeros = [1, 2, 3,]
//console.log(numeros.map((valor, indice, numeros) => valor * (indice +2)))

/*Dado esse vetor, produzir outro. Ele deve conter a letra
inicial de cada nome, na sua posição original.*/
// const nome = ['Ana', 'João', 'Rodrigo', 'Angelica']
//const listaResultante = nomes.map(x => x[0])


// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()


// function ola(){
//     let nome = 'João'
//     return function(){
//         console.log(`Olá, ${nome}`)
//     }
// }

// const res = ola()
// res()


// function eAgora(){
//     let cont = 1
//     function f1(){
//         console.log(cont)
//     }
//     cont ++
//     function f2(){
//         console.log(cont)
//         cont++
//     }
    
//     cont++

//     return [f1, f2]
// }
// let funcoes = eAgora()
// funcoes[0]()
// funcoes[1]()


// Objetos JS literais (JSON: Javascript Object Notation)
// Uma pessoa que se chama João e tem 17 anos
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }

// console.log(pessoa.nome)
// console.log(pessoa['idade'])


// Uma pessoa que se chama Maria, tem 21 anos e mora na rua B, número 64
// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logadouro: 'Rua B',
//         numero: 64
//     }
// }
// console.log(pessoa.endereco.logadouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa.endereco[logadouro])
// console.log(pessoa['endereco'].numero)


// Seu nome
// Seu RA
// Seu e-mail

// let pessoa = {
//     'Seu nome': 'Alicia'
// }
// console.log['Seu nome']


// Uma concessionaria que tem CNPJ e endereço, com rua, numero e bairro. Ela tem alguns carros em estoque. Cada carro tem marca, modelo e ano de fabricação
// let concessionaria = {
//     nome: 'Bossini Automóveis',
//     CNPJ: '12.345.678/0001-23',
//     endereco: {
//         rua: 'Avenida Bossini',
//         numero: 123,
//         bairro: 'Vila Machion'
//     },
//     estoque: [
//         {
//             marca: 'Toyota',
//             modelo: 'Corolla',
//             fabricacao: 2020
//         },
//         {
//             marca: 'Honda',
//             modelo: 'Civic',
//             fabricacao: 2019
//         },
//     ]
// }
// Exibir Corolla
// console.log(concessionaria.estoque[0].modelo)

// Faça um For of, mostrando o modelo de cada veículo
// for (let carro of concessionaria.estoque) {
//     console.log(carro.modelo)
// }


// Operação somar, que soma dois valores, implementada com uma arrow function que não usa return
// Operação subtrair, que subtrai dois valores, implementada com uma function regular

// let calculadora = {
//     somar: (a, b) => a + b,
//     subtrair: function(a, b) {
//         return a - b
//     }
// }

// console.log(calculadora.somar(5, 5))
// console.log(calculadora.subtrair(6, 5))


// sincrona e assincrona


// console.log('Eu primeiro')
// console.log('Depois eu')
// console.log('Serei sempre o ultimo...:(')

// const a = 2 + 7
// const b = 6 + 7
// console.log(a + b)

// function demorada (){
//     const dataAtualMais25Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= dataAtualMais25Segundos); // NO OP
//     const d = 2 + 5
//     return d
// }
// const a = 2 + 3
// const b = 8 + 9
// setTimeout(() => {
//     const d = demorada()
//     console.log(`Demorada: ${d}`)
// }, 0)
// const e = a + b + 5
// const atualMais10 = new Date().getTime() + 10000
// while (new Date().getTime() <= atualMais10);
// console.log(e)


const fs = require('fs')
const abrirArquivo = function(nomeArquivo){
    const exibirConteudo = function(erro, conteudo){
        if (erro) {
            console.log(`Erro: ${erro}`)
        } else {
            console.log(`Conteudo: ${conteudo.toString()}`)
            const dobro = Number(conteudo.toString()) * 2
            const finalizar = (erro) => {
                if (erro) {
                    console.log(`Erro na escrita: ${erro}`)
                } else {
                    console.log('Escreveu com sucesso')
                }
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
    console.log('Fazendo outras coisas...')
}
abrirArquivo('arquivo.txt')