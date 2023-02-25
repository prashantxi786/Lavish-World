const express = require('express')
const itemRouter = express.Router()
const {ItemModel} = require("../models/item.model")
itemRouter.get('/',async(req, res) =>{
    try {
        if(req.query.title){
            if(req.query.title=="atoz"){
                const items=await ItemModel.find().sort({product_title:1})
                res.send(items)
            }
            else if(req.query.title=="ztoa"){
                const items=await ItemModel.find().sort({product_title:-1})
                res.send(items)
            }
            
        }
        else if(req.query.min||req.query.max){
            const items=await ItemModel.find({$and:[{price:{$gte:req.query.min}},{price:{$lt:req.query.max}}]})
            res.send(items)
        }
        else if(req.query.price){
            if(req.query.price=="lth"){
                const items=await ItemModel.find().sort({price:1})
                res.send(items)
            }
            else{
                const items=await ItemModel.find().sort({price:-1})
                res.send(items)
            }
        }
        else{

            const items = await ItemModel.find(req.query)
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

itemRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id
  try {
   
    await itemRouter.findByIdAndUpdate({_id:id}, req.body) ;
    res.send("Product updates successfully");
  } catch (error) {
    console.log(error);
  }
});
itemRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await itemRouter.findByIdAndDelete({ _id: id });
    res.send("Product deleted successfully");
  } catch (error) {
    console.log(error);
  }
});
itemRouter.put("/put/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await itemRouter.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Product added successfully");
  } catch (error) {
    console.log(error);
  }
});
module.exports={itemRouter}