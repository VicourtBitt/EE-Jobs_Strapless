const express = require("express")
const routes = require("./routes")

const appDB = express()
routes(appDB)

module.exports = appDB