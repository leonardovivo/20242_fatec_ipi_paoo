const express = require('express')
const axios = require('axios')
const { v4: uuidv4 } = require('uuid')
const app = express()
//middleware
app.use(express.json())

const baseObservacoes = {}

//POST /lembretes/1/observacoes
app.post('/lembretes/:id/observacoes', async (req, res) => {
  const idObs = uuidv4()
  const { texto } = req.body
  const observacoesDoLembrete = baseObservacoes[req.params.id] || []
  const observacao = {
    id: idObs,
    texto: texto,
    lembreteId: req.params.id,
    status: 'aguardando'
  }
  observacoesDoLembrete.push(observacao)
  baseObservacoes[req.params.id] = observacoesDoLembrete
await axios.post('http://localhost:10000/eventos', {
  type: 'ObservacaoCriada',
  payload: observacao  
})
  res.status(201).json(observacoesDoLembrete)
})

//GET /lembretes/1/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
  res.json(baseObservacoes[req.params.id] || [])
})

//sua vez, faça
app.post('/eventos', (req, res) => {
  const evento = req.body
  console.log(evento)
  res.end()
})


const port = 5000
app.listen(port, () => {
    console.log(`Observações. Porta ${port}.`)
})