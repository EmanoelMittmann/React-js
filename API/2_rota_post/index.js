const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(
    express.json()
)

app.post('/createproduct',(req,res) => {

    const name = req.body.name
    const sobrenome = req.body.sobrenome

    console.log(name)
    console.log(sobrenome)
     
    res.json({message: `${name} ${sobrenome}`})
})

app.get('/',(req,res) => {
    res.json({message: "Primeira rota criada com sucesso"})});
app.listen(3000)