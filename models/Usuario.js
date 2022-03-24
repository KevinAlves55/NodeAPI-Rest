const sequelize = require('sequelize');
const conn = require("../database/database")

/** 
 * Cria a representação da tabela de user para
 * Seus campos, tipos e regras
 * 1- Nome da tabela
 * 2- Estrutura dos campos 
 * **/
const Usuario = conn.define(

    'tbl_usuario',
    {
        cod_usuario:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        sobrenome:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        email:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        foto:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        login:{
            type: sequelize.STRING(50),
            allowNull: false
        },
        senha:{
            type: sequelize.STRING(50),
            allowNull: false
        }
    }

);

Usuario.sync({force:true})

module.exports = Usuario;