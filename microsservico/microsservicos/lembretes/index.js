const axios = require('axios')
const express = require ('express')
const app = express()
app.use(express.json())

let id = 2

const baseLembretes = {
    1: {
        id: 1,
        texto: 'Fazer cafe'
    }
}
/*
    {
        1:{
            id: 1,
            texto: fazer cafe
        },
        2:{
            id: 2,
            texto: nadar
        }
    }
*/

//GET /Lembretes
app.get('/lembretes', (req, res) => {
    res.json(baseLembretes)
})

//POST /Lembretes
app.post('/lembretes', async function(req, res) {
    const texto = req.body.texto
    const lembrete = {id: id, texto: texto }
    baseLembretes[id] = lembrete
    id++
    await axios.post('http://localhost:10000/eventos', {
        type: 'LembreteCriado',
        payload: lembrete
    })
    res.status(201).json(baseLembretes)
})


//escrever o endpoint da caixinha amarela
//ou seja, receber um evento
//o que fazer com ele? apenas log
//nao esqueca de responder a quem te enviou a requisicao
app.post('/eventos', (req, res) => {
    console.log('Evento recebido:', req.body)
    res.status(200).send({ msg: 'Evento recebido' })
})

const port =  4000
app.listen(port, () => {
console.log(`Lembrentes. Porta ${port}.`)
})