const Product = require('../models/Product');

  // Obtener todos los productos
 const getAllProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los productos.' });
    }
  };

  // Obtener un producto por ID
  const getProductById = async (req, res) => {
    const { Product_ID } = req.params;
    try {
      const product = await Product.findByPk(Product_ID);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Producto no encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el producto.' });
    }
  };
  // ... otros metodos para crear, actualizar y eliminar productos

module.exports = {
  getAllProducts,
  getProductById
};