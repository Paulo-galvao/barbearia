const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

const cliente_router = require('./routes/cliente.js');

/* CLIENTE */
app.use('/cliente', cliente_router);

app.get('/', (req, res) => {
    res.send("Olá seja bem vindo á barbearia");
})

app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`);
});
