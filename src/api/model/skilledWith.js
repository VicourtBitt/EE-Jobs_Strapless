const { DataTypes } = require('sequelize')
const sequelize = require("../config/database.js")

const SkilledWith = sequelize.define("SkilledWith", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    userInfoId: {
        type: DataTypes.INTEGER,
        references: {
            model: "UserInfos",
            key: "id"
        }
    },
    skillId: {
        type: DataTypes.INTEGER,
        references: {
            model: "Skills",
            key: "id"
        }
    }
})

module.exports = SkilledWith