const { Router } = require('express');
const { getProductsFilteredHandler, getProductsHandlerById, getProductsHandler } = require('../handlers/productsHandlers');
const { createProductsHandler, deleteProductHandler } = require('../handlers/productsHandlers');
const productRouters = Router();


productRouters.get('/', getProductsHandler);
productRouters.get('/:id', getProductsHandlerById)
productRouters.get('/filter', getProductsFilteredHandler)
productRouters.post('/:id', createProductsHandler);
productRouters.delete('/:id', deleteProductHandler)

module.exports = productRouters;