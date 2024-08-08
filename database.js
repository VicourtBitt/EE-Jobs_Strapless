const appDB = require("./src/api/appDB.js")

const PORT = 3001

appDB.listen(PORT, () => {
    console.log("Banco de dados ativo e monitorando requisições HTTP")
})