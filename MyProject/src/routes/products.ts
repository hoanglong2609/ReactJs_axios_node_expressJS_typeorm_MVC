const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController')


// productsController.index
router.get('/:id', productsController.show);
router.get('/', productsController.index);

module.exports = router;