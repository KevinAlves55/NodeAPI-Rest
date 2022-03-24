// Importa a Express
const express = require('express');
const res = require('express/lib/response');

// Importa o models de usuario
const usuario = require('../models/Usuario');

// Cria o gerenciamento de rotas do express para o dominio de usuario
const router = express.Router();

router.post('/user/insert', (req, res) => {

    console.log(req.body);

    const { nome, sobrenome, email, foto, login, senha } = req.body;

    usuario.create({

        nome,
        sobrenome,
        email,
        foto,
        login,
        senha

    }).then(
        res.status(201).json({'message': 'Item criado com sucesso'})
    );

});

module.exports = router;