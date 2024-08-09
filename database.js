const appDB = require("./src/api/appDB.js")

const PORT = 3001

appDB.listen(PORT, '0.0.0.0',() => {
    console.log(`Banco de dados ativo e monitorando requisições HTTP na porta http://localhost:${PORT}`)
})