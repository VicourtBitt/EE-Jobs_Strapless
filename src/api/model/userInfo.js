const { DataTypes } = require('sequelize')
const sequelize = require("../config/database.js")

const UserInfo = sequelize.define("UserInfo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM(["Masculino", "Feminino", "Não-Binário"]),
        allowNull: false
    },
    age: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        validate: {
            min: 20,
            max: 85
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    general_role: {
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

module.exports = UserInfo