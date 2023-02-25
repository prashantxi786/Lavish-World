const express=require('express')
const userRouter = express.Router()
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {UserModel} = require('../models/user.model')
userRouter.post('/register', async(req,res)=>{
   const {name,email,password,gender} = req.body
    try {

        bcrypt.hash(password, 5, async(err, hash)=>{
            if(err){
                console.log(err.message)
            }
            else{
                const user = new UserModel({name,email,password:hash,gender})
                await user.save()
                res.send("successfully registered")
            }
        });
        
    } catch (error) {
        console.log(error)
    }
})
userRouter.post("/login", async(req,res)=>{
    try {
        const {email,password} = req.body
        const user=await UserModel.find({email})
        console.log(user)
        if(user.length>0){
            bcrypt.compare(password, user[0].password,(err, result)=>{
                if(result){
                    const token = jwt.sign({userId:user[0]._id}, "masai")
                     res.send(token)
                }
                else{
                    console.log(err)
                }
            });
            
        }
        else{
            res.send("login failed")
        }
        
    } catch (error) {
        console.log(error)   
    }
})
module.exports={userRouter}