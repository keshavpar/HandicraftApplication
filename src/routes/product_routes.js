const express = require('express');
const productController = require('../product/controller');

const router = express.Router();

router.route('productList').get(productController.productList);
router.route('delProduct').get(productController.delProduct);
router.route('addProduct').post(productController.addProduct);