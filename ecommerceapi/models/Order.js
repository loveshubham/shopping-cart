const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    products:[
        {
            productId:{
                type: String,
            },
            quantity:{
                type: Number,
<<<<<<< HEAD
                default:1 
            },
            subtotal:{
                type:Number
=======
                default:1
>>>>>>> 9cef2e692b3e870e0a857aa897ab3f5fd25ecb0e
            }
        }
    ],
    total:{
        type: Number,
        required:true
    },
    address:{type:Object,required:true},
    status:{type:String,default:"pending. "}
},{timestamps: true })

const Order =  mongoose.model('Order',orderSchema)
module.exports = Order;
