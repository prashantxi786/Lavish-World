const mongoose = require('mongoose')
const itemSchema=mongoose.Schema({
    "product-title":String,
    "product-titles href" :String,
    "price" :String,
    "compare-at-price" :String,
    "w-full" :String

})
const ItemModel = mongoose.model("item",itemSchema)
module.exports={ItemModel}