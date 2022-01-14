require("dotenv").config
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000

app.listen(port, `Server is running on ${port}`) 