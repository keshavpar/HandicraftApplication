const express = require('express');
const morgan = require('morgan');
const CustomError = require("./utils/customError");
const globalErrorHandler = require('./src/controller/errorController');
const productRouter= require('./src/routes/product_routes')

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Default Page
app.get("/",(req,res)=>{
    res.send("Server for the Last Destination");
    res.end()
})

app.use('/LastDestination/product', medicinesRouter);
app.all('*', (req, res, next) => {
    const err = new CustomError(`The url with ${req.originalUrl} doesn't exists on the server`, 404);
    next(err);
});

app.use(globalErrorHandler);

module.exports = app;