const { Router } = require("express");
const { getProductsHandlerById, getProductsHandler } = require("../handlers/productsHandlers");
const { createProductsHandler, deleteProductHandler } = require("../handlers/productsHandlers");
const productRouters = Router();

productRouters.get("/:id", getProductsHandlerById);
productRouters.post("/:id", createProductsHandler);
productRouters.delete("/:id", deleteProductHandler);
productRouters.get("/", getProductsHandler);

module.exports = productRouters;
