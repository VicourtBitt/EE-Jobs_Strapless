const { DataTypes } = require('sequelize')
const sequelize = require("../config/database.js")

const JobExperience = sequelize.define("JobExperience", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    role_at_time: {
        type: DataTypes.STRING,
        allowNull: false
    },
    average_payment: {
        type: DataTypes.REAL,
        allowNull: true
    },
    userRegisterId: {
        type: DataTypes.INTEGER,
        references: {
            model: "UserRegisters",
            key: "id"
        }
    },
    companyRegisterId: {
        type: DataTypes.INTEGER,
        references: {
            model: "CompanyRegisters",
            key: "id"
        }
    }
})

module.exports = JobExperience