const router = require('express').Router()
const Product = require('../models/Product')
const User = require('../models/User')
const Order = require('../models/Order')
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require('./verifyToken')
const res = require('express/lib/response')

router.get('/',verifyTokenAndAdmin, async(req,res)=>{
    try{
      const Orders = await Order.find()
      if(Orders)
      {
        res.status(200).send({message:"Orders List",Order_List:Orders})
      }else{
        res.status(404).send({message:"No Order Found"})
      }
    }catch(err){
        res.status(401).send({Error:err.message})
    }
})

router.get('/MyOrder',verifyTokenAndAuthorization, async(req,res)=>{
    try{
      const Orders = await Order.find({userId: req.user.id})
      if(Orders)
      {
        res.status(200).send({message:"Orders List",Order_List:Orders})
      }else{
        res.status(404).send({message:"No Order Found"})
      }
    }catch(err){
        res.status(401).send({Error:err.message})
    }
})

router.post('/',verifyToken, async(req,res)=>{
    const  newOrder = new  Order(req.body)
    try{
        const savedOrder = await newOrder.save()
        res.status(200).send({message:"Order Created",Order_Detail:savedOrder})
    }catch(err){
        res.status(401).send({Error:err.message})
    }
})

router.put('/:id',verifyTokenAndAdmin, async(req,res)=>{
    try{
        const updateOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },{new:true})
        res.status(200).send({message:"updatedProduct ",updatedOrder:updateOrder})
    }catch(err){
        res.status(401).send({Error:err.message})
    }
})

router.delete('/:id',verifyTokenAndAdmin, async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).send({message:"Order Deleted"})
    }catch(err){
        res.status(401).send({Error:err.message})
    }
})

router.get('/find/:userId',verifyTokenAndAdmin, async(req,res)=>{
    try{
        const userOrder = await Order.find({userId:req.params.userId})
        if(userOrder){
        res.status(200).send({message:"Search Result",userOrder:userOrder})
        }else{
            res.status(404).send({ Error:"Order Not Found",message:"Order To search for Orders"})
        }
    }catch(err){
        res.status(401).send({Error:err.message})
    }
})


router.get('/income',verifyTokenAndAdmin, async(req,res)=>{
    console.log("income");
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth()-1))
    const previousMonth = new Date(date.setMonth(date.getMonth()-1))
    try{
        const income = await Order.aggregate([
            {$match:{createdAt:{$gte:previousMonth}}},
            {
                $project:{
                    month : {$month :"createdAt"},
                    sales : "$amount",
                },
                    $group:{
                        _id:"$month", 
                        total : {$sum : "$sales"},
                    },
                },
        ])
        res.status(200).send({message:"Monthly Income",Income : income})
    }catch(err){
        res.status(500).send({err})
    }
})
module.exports = router