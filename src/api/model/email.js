const { DataTypes } = require('sequelize')
const sequelize = require("../config/database.js")

const Email = sequelize.define("Email", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userRegisterId: {
        type: DataTypes.INTEGER,
        references: {
            model: "UserRegisters",
            key: "id"
        }
    }
})

module.exports = Email