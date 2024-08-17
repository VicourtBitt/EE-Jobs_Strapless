const { DataTypes } = require('sequelize')
const sequelize = require("../config/database.js")

// BASICAMENTE, ESTÁ É UMA DEFINIÇÃO DE API UTILIZANDO CLASSES E FUNÇÕES
// ONDE USAMOS O SEQUELIZE DEFINE PARA CRIAR O MODELO EM VEZ DE UTILIZAR
// O MODO GUIADO DO PROPRIO SEQUELIZE COM NPX SEQUELIZE INIT
const UserRegister = sequelize.define("UserRegister", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    cpf_cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
})

module.exports = UserRegister;