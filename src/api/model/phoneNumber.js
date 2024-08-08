const { DataTypes } = require('sequelize')
const sequelize = require("../config/database.js")

// THIS PHONENUMBER MODEL IS SPECIFIC TO THE USERINFO
const PhoneNumber = sequelize.define("PhoneNumber", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    phone_number: {
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

module.exports = PhoneNumber