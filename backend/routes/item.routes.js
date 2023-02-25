const express = require('express')
const itemRouter = express.Router()
const {ItemModel} = require("../models/item.model")
itemRouter.get('/',async(req, res) =>{
    const {title,min,max,price,category}=req.query
    try {
        if(title){
            if(title=="atoz"){
                const items=await ItemModel.find({category}).sort({product_title:1})
                res.send(items)
            }
            else if(title=="ztoa"){
                const items=await ItemModel.find({category}).sort({product_title:-1})
                res.send(items)
            }
            else{
                const items=await ItemModel.find({title})
                res.send(items)
            }
            
        }
        else if(min&&max){
            const items=await ItemModel.find({$and:[{category},{price:{$gte:min}},{price:{$lte:max}}]})
            res.send(items)
        }
        else if(price){
            if(req.query.price=="htl"){
                const items=await ItemModel.find({category}).sort({price:-1})
                res.send(items)
            }
            else {
                const items=await ItemModel.find({category}).sort({price:1})
                res.send(items)
            }
        
        }
        
        else{
            const items = await ItemModel.find(req.query)
            console.log(req.query)
            res.send(items)
        }
    } catch (error) {
        console.log(error)
    }
})
itemRouter.post("/post",async(req, res) =>{
    try {
        const item=new ItemModel(req.body)
        await item.save()
        res.send("posted")
    } catch (error) {
        console.log(error)
    }
});

itemRouter.patch("/update", async (req, res) => {
    const id = req.params.id
  try {
   
    await itemRouter.findByIdAndUpdate({_id:id}, req.body) ;
    res.send("Product updates successfully");
  } catch (error) {
    console.log(error);
  }
});
itemRouter.delete("/delete", async (req, res) => {
  const id = req.params.id;
  try {
    await itemRouter.findByIdAndDelete({ _id: id });
    res.send("Product deleted successfully");
  } catch (error) {
    console.log(error);
  }
});
itemRouter.put("/put", async (req, res) => {
  const id = req.params.id;
  try {
    await itemRouter.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Product added successfully");
  } catch (error) {
    console.log(error);
  }
});
module.exports={itemRouter}