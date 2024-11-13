const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())

const palavraChave = 'importante'
const funcoes = {
    ObservacaoCriada: (observacao) => {
        observacao.status = 
            observacao.status.includes(palavraChave) ? 'importante' : 'comum'
            axios.post('http://localhost:10000/eventos', {
                type: 'ObservacaoClassificada',
                payload: observacao
            })
    }
}

app.post('/eventos', (req, res) => {
    try{
    const evento = req.body
    funcoes[evento.type](evento.payload)
    }
    catch(e){}
    res.status(200).end()
})

const port = 7000
app.listen(port, () => console.log(`Classificação. Porta ${port}.`))