const mongoose = require('mongoose')
const itemSchema=mongoose.Schema({
    "product_title":String,
    "product_title_href" :String,
    "price" :Number,
    "compare_at_price" :Number,
    "w_full":String,
    "category":String
},{
    versionKey :false
})
const ItemModel = mongoose.model("item",itemSchema)
module.exports={ItemModel}