const Product = require("./productModel");
const CustomError  = require("../../utils/customError");
const asyncErrorController=require("../../utils/asyncErrorHandler");

//This function retrieves all the Products that are present in the Database
exports.productList = asyncErrorController(async(req,res,next)=>{
    const productList = await Product.find({})
    res.status(200).json({
        status:"Success",

    })
})

//This function is used to save the Product int the Database
exports.addProduct = asyncErrorController(async(req,res,next)=>{
    const addProduct = await Product.create(req.body);
    res.status(201).json({
        status:"Success",
        data:addProduct
    })
})

//Deletig the Product from the Database
exports.delProduct =asyncErrorController(async(req,res,next)=>{
    let deleteProduct = await Product.findOneAndDelete(req.params.id);
    if(!deleteProduct){
        const err = new CustomError('Patient with id ${req.params.id} is not Found',404);

    }
    
})