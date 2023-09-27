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

    // Controlador para obtener productos con filtros combinados
  const getFilteredProducts = async (req, res) => {
    try {
      const { categoria, pais, provincia, ciudad, valoracion, tipoDePago } = req.query;

      // Construye un objeto de condiciones de filtro basado en los parámetros proporcionados
      const filterConditions = {};

      if (categoria) {
        filterConditions.categoria = categoria; // Filtra por categoría exacta en la tabla 'products'
      }

      // Condiciones de filtro para la tabla 'sellers'
      const sellerFilterConditions = {};

      if (pais && provincia && ciudad) {
        sellerFilterConditions.direccion = {
          [Op.iLike]: `%${pais},${provincia},${ciudad}%`
        };
      }

      if (valoracion) {
        sellerFilterConditions.ValoracionPromedio = {
          [Op.gte]: valoracion
        };
      }

      if (tipoDePago) {
        sellerFilterConditions.TipoDePago = tipoDePago;
      }

      // Consulta de Sequelize que aplica las condiciones de filtro
      const filteredProducts = await Product.findAll({
        include: [
          {
            model: Seller,
            where: sellerFilterConditions
          }
        ],
        where: filterConditions
      });

      res.json(filteredProducts);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener productos filtrados.' });
    }
  };

  // ... otros metodos para crear, actualizar y eliminar productos

module.exports = {
  getAllProducts,
  getProductById,
  getFilteredProducts
};