const { sequelize } = require("./model")

sequelize.sync({force: true}).then(() => {
    console.log("Tabelas da Database foram criadas")
})