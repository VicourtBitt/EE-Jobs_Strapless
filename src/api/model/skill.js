const { DataTypes } = require('sequelize')
const sequelize = require("../config/database.js")

const Skill = sequelize.define("Skill", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    skill: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Skill