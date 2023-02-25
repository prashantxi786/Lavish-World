const express = require('express')
require('dotenv').config()
const cors=require('cors')
const {connection}=require('./configs/db')
const { itemRouter } = require('./routes/item.routes')
const { userRouter } = require('./routes/user.routes')
const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res)=>{
    res.send("Welcome to Lavish World Database.")
})
app.use("/items",itemRouter)
app.use("/users",userRouter)
app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`listening at ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})