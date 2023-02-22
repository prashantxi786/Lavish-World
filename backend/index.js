const express = require('express')
require('dotenv').config()
const {connection}=require('./configs/db')
const app = express()
app.get('/',(req, res) =>{
    res.send("Hello")
})
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`listening at ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})