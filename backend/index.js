const express = require('express')
require('dotenv').config()
const {connection}=require('./configs/db')
const { itemRouter } = require('./routes/item.routes')
const app = express()
app.use("/",itemRouter)
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`listening at ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})