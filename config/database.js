const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv')
const express = require('express')
const app = express()
dotenv.config({path:path.join(__dirname,'config','.env')})

const connectDB = async()=>{
    await mongoose.connect(process.env.DATABASE_URL)
    console.log('db is connected')
}

module.exports = connectDB
