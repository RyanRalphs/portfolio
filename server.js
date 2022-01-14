require("dotenv").config
const express = require('express')
const cors = require('cors')
const path = require('path')

const contact = require('./routers/contact')
const app = express()

app.use(express.json())
app.use(cors())

app.use("/", contact)

const port = process.env.PORT || 4000

app.listen(port, console.log(`Server is running on ${port}`)) 