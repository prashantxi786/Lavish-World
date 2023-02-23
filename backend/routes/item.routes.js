const express = require('express')
const itemRouter = express.Router()
itemRouter.get('/',(req, res) =>{
    res.send("Hello From Backend")
})
module.exports={itemRouter}