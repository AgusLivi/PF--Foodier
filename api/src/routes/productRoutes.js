const { Router } = require('express');
const { getProductsFilteredHandler, getProductsHandlerById, getProductsHandler } = require('../handlers/productsHandlers');
const { createProductsHandler, deleteProductHandler } = require('../handlers/productsHandlers');
const productRouters = Router();


productRouters.get('/:id', getProductsHandlerById)
productRouters.post('/:id', createProductsHandler);
productRouters.delete('/:id', deleteProductHandler)
productRouters.get('/filter', getProductsFilteredHandler)
productRouters.get('/', getProductsHandler);

module.exports = productRouters;