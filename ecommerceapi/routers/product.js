const router = require('express').Router()
const Product = require('../models/Product')
const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require('./verifyToken')


router.get('/',verifyTokenAndAdmin, async(req,res)=>{
    try{
        const qnew = req.query.new
        const qcategory = req.query.category
        let products
        if(qnew){
            products = await Product.find({}).sort({ "createdAt": -1 })
        }else if(qcategory){
            products = await Product.find({
                categories :{$in :[qcategory]}
            })
        }else{
            products = await Product.find()
        }
        if(products.length>0){
        res.status(200).send({message:"Product List",products:products})
        }else{
            res.status(404).send({ Error:"Product Not Found",message:"Product doesnt exist"})
        }
    }catch(err){
        res.status(401).send({Error:err.message})
    }
})

router.post('/',verifyTokenAndAdmin, async(req,res)=>{
    const  newProduct = new  Product(req.body)
    try{
        const savedProduct = await newProduct.save()
        res.status(200).send({message:"Product Added",productDetail:savedProduct})
    }catch(err){
        res.status(401).send({Error:err.message})
    }
})

router.put('/:id',verifyTokenAndAdmin, async(req,res)=>{
    try{
        const updateProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set : req.body
        },{new:true})
        res.status(200).send({message:"updatedProduct ",updatedProduct:updateProduct})
    }catch(err){
        res.status(401).send({Error:err.message})
    }
})

router.delete('/:id',verifyTokenAndAdmin, async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).send({message:"Product Deleted"})
    }catch(err){
        res.status(401).send({Error:err.message})
    }
})

router.get('/:id',verifyTokenAndAdmin, async(req,res)=>{
    try{
        const searchedproduct = await Product.findById(req.params.id)
        if(searchedproduct){
        res.status(200).send({message:"Search Result",Searchedproduct:searchedproduct})
        }else{
            res.status(404).send({ Error:"Product Not Found",message:"Produc with id " + req.params.id+"doesnt exist"})
        }
    }catch(err){
        res.status(401).send({Error:err.message})
    }
})

module.exports = router