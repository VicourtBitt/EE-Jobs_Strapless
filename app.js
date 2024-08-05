import express from "express"

const app = express()

const PORT = 3001

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile( "public", "index.html")
})

app.listen(PORT, () => {
    console.log("Servidor rodando.")
})