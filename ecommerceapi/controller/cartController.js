const Product = require('../models/Product')
const User = require('../models/User')
const Cart = require('../models/Cart')
const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require('../utils/verifyToken')

module.exports.cartListAdmin = async(req,res)=>{
    try{
      const Carts = await Cart.find()
      if(Carts)
      {
        res.status(200).send({message:"Carts List",Cart_List:Carts})
      }else{
        res.status(404).send({message:"No Cart Found"})
      }
    }catch(err){
        res.status(401).send({Error:err.message})
    }
}

module.exports.createCart = async(req,res)=>{
    const  newCart = new  Cart(req.body)
    try{
        const saveCart= await newCart.save()
        res.status(200).send({message:"Cart Created",Cart_Detail:saveCart})
    }catch(err){
        res.status(401).send({Error:err.message})
    }
}

module.exports.myCart = async(req,res)=>{
    try{
        const updateCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },{new:true})
        res.status(200).send({message:"Cart Updated successfully ",updatedCart:updateCart})
    }catch(err){
        res.status(401).send({Error:err.message})
    }
}

module.exports.deleteCart = async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).send({message:"Cart Deleted"})
    }catch(err){
        res.status(401).send({Error:err.message})
    }
}

module.exports.searchCartById = async(req,res)=>{
    try{
        const userCart = await Cart.find({userId:req.params.userId})
        if(userCart){
        res.status(200).send({message:"Search Result",userCart:userCart})
        }else{
            res.status(404).send({ Error:"Cart Not Found",message:"Cart maybe Empty"})
        }
    }catch(err){
        res.status(401).send({Error:err.message})
    }
}