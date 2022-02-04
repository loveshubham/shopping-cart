const router = require('express').Router()
const Product = require('../models/Product')
const User = require('../models/User')
const Cart = require('../models/Cart')
const cartcontroller = require('../controller/cartController')

const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require('../utils/verifyToken')

router.get('/',verifyTokenAndAdmin,cartcontroller.cartListAdmin)

router.post('/',verifyTokenAndAuthorization, cartcontroller.createCart)  

router.put('/:id',verifyTokenAndAuthorization, cartcontroller.myCart)

router.delete('/:id',verifyTokenAndAdmin,cartcontroller.deleteCart)

router.get('/:userid',verifyTokenAndAdmin,cartcontroller.searchCartById)

module.exports = router
