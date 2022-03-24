// Importa o pacote Express
const express = require('express')

// Instancia o pacote Express
const app = express();

// Chama o arquivo de model
const usuario = require('./models/Usuario')

// Servidor auto-contido do Express
// Recebe as requisições e devolve as respostas
// Paramentro de Listen
// 1- PORTA LÓGICA
// 2- CALLBACK
const port = 3000;

app.listen(port, () => console.log(`Estamos online na porta: ${port}!`));