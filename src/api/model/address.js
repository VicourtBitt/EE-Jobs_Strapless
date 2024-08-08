const { DataTypes } = require('sequelize')
const sequelize = require("../config/database.js")

// THIS ADDRESS MODEL IS SPECIFIC TO THE USERINFO
const Address = sequelize.define("Address", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postal_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userInfoId: {
        type: DataTypes.INTEGER,
        references: {
            model: "UserInfos",
            key: "id"
        }
    }
})

module.exports = Address