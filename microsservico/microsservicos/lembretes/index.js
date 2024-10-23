const express = require ('express')
const app = express()
app.use(express.json())

let id = 2

const lembretes = {
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
    console.log('passou por aqui')
    res.json(lembretes)
})

//POST /Lembretes
app.post('/lembretes', function(req, res){
    const texto = req.body.texto
    lembretes[id] = {id: id, texto: texto}
    id++
    res.status(201).json(lembretes)
})

const port =  4000
app.listen(port, () => {
console.log(`Lembrentes. Porta ${port}.`)
})