// Importa o modúlo do sequelize
const sequelize = require('sequelize');

/** Cria uma conn com o BD 
 * 1- Nome do BD
 * 2- Usuário do BD
 * 3- Senha do BD
 * 4- Objeto JSON que determina o local(localhost:3306) e o tipo de BD (mysql)
 * **/
const conn = new sequelize(
    'libri', 
    'root', 
    '12345678', 
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

// Isso torna a nossa requisição acessivel por outros arquivos
module.exports = conn;