const express = require('express');
const cors = require('cors');
const app = express();
const porta = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API do Sistema de Agendamentos funcionando!");
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});

const conn = require('./db');

app.use('/clientes', require('./routes/clientes'));
app.use('/servicos', require('./routes/servicos'));
app.use('/agendamentos', require('./routes/agendamentos'));

