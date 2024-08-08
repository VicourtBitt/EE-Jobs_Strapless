const { Sequelize } = require("sequelize")

const USER = "root"
const PASSWORD = "vicourt01"

const sequelize = new Sequelize("ee_jobs", USER, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

sequelize.authenticate()
    .then(() => {
        console.log("Conexão estabelecida com sucesso no banco de dados.")
    })
    .catch(err => {
        console.log("Não foi possível realizar uma conexão com o banco de dados.", err)
    })

module.exports = sequelize