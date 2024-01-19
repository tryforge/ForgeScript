import express from "express"
const app = express()
app.use(express.static("./docs"))
app.listen(3000)
