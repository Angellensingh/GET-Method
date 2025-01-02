const mongoose = require('mongoose')
const routes = require('./routes/routes')
const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const app = express()
const connectDB = require('./config/database')

dotenv.config({path:path.join(__dirname,'config','.env')})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB()

app.use('/api',routes)

app.listen(process.env.PORT)
