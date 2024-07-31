const mongoose = require("mongoose");

const product = new mongoose.Schema({
    product_id:{
        type:int,
        required:[true,'The product ID is Required']
    },
    name:{
        type:String,
        required:[true,'The Name of the Product is required'],
    },
    description:{
        type:String,
        default:"THIS IS A HANDICRAFT PRODUCT",
    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
});
module.exports =mongoose.model("Products",product);