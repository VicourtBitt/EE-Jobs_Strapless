import express from "express"

const app = express()

const PORT = 3000

app.use(
    express.static("public"),
    express.static("public/validation")
    )

app.get("/", (req, res) => {
    res.sendFile( "public", "index.html")
})

app.listen(PORT, () => {
    console.log("Servidor rodando na porta http://localhost:3000.")
})