const mongoose = require('mongoose')
const routes = require('./routes')

const express = require('express')
const app = express()

require('dotenv').config()

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)

app.use('/api',routes)

app.listen(3000)
