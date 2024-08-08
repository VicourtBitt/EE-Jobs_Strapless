const { DataTypes } = require('sequelize')
const sequelize = require("../config/database.js")

const CompanyRegister = sequelize.define("CompanyRegister", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    company_cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            min: 14,
            max: 14
        },
        unique: true
    },
    company_sector: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company_size: {
        type: DataTypes.ENUM(["Pequena", "Média", "Grande", "Nacional", "Multinacional", "Internacional"]),
        allowNull: false
    },
    company_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company_number: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = CompanyRegister