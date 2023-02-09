const express = require("express");
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/conta/cadastrar', (req, res) => {
    const impressData = `name: ${req.body.name}, surname: ${req.body.surname}, email: ${req.body.email}, password: ${req.body.password}`
    console.log(impressData)
    res.status(201).send("Conta Cadastrada")
})

app.listen(8081, () => {
    console.log("rodando servidor")
});