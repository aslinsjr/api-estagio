const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bem Vindo a API Exemplo!')
})

app.get('/about', (req, res) => {
    res.send('Está API é para o programa de estágio da Alliance3')
})

app.listen(port, () =>{
    console.log(`Servidor rodando no localhost:${port}`)
})