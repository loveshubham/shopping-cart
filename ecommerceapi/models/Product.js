const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title : {
        type: String,
        unique: true,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    image : {
        type: String,
        required: true,
    },
    categories:{
        type: Array,
    },
    size : {
        type: String
    },
    color : {
        type: String,
    },
    price:{
        type: Number,
        required: true
    },
},{timestamps: true })

const Product =  mongoose.model('Product',productSchema)
module.exports = Product;