const express = require("express")
var bodyParser = require('body-parser')
var cors = require('cors')
require("dotenv/config")
const routes = require("./src/routers/Router")

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
require("./src/config/db")
app.use("/api", routes) 
app.listen(PORT, () => {
	console.log("Server has started!")
})