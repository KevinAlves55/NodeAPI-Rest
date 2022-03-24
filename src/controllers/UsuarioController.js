// Importa a Express
const express = require('express');
const res = require('express/lib/response');

// Importa o models de usuario
const usuario = require('../models/Usuario');

// Cria o gerenciamento de rotas do express para o dominio de usuario
const router = express.Router();

router.post('/user/insert', (req, res) => {

    res.status(201).json({'message': 'Funcionou poha'})

});

module.exports = router;