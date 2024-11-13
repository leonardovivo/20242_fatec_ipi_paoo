const express = require('express')
const app = express()
app.use(express.json())

//mapa de funções
//um mapa eh um objeto js - coleção de pares 'chave: valor'
//tipo do evento: função a ser executada

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsolidada[lembrete.id] = lembrete
    },
    ObservacaoCriada: (observacao) => {
        //lembrete a quem ela pertence tem uma coleção de observações - associada a ele
        //criar a lista vazia e depois adiciona observações e associa ela a lista e depois a lembretes 
        const observacoes = baseConsolidada[observacao.lembreteId] ['observacoes'] || []
        observacoes.push(observacao) //precisa do vinculo 'apontar para observacoes
        baseConsolidada[observacao.lembreteId] ['observacoes'] = observacoes
    }
}

const baseConsolidada = {}

//get lembretes 
app.get('/lembretes', (req, res) => {
    res.status(200).json(baseConsolidada)
})

//post /eventos
app.post('/eventos', (req, res) => {
    //pegar o tipo de evento, chamar a função e 
    const evento = req.body
    funcoes[evento.type](evento.payload)
    res.status(200).end()
})

const port = 6000
app.listen(port, () => console.log(`Consulta. Porta ${port}`))