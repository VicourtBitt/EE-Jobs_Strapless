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
    },
    userInfoId: {
        type: DataTypes.INTEGER,
        references: {
            model: "UserInfos",
            key: "id"
        }
    }
})

module.exports = Email