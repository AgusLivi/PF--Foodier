const {  User, Seller, Product, Post  } = require("../db.js");
const { Op } = require("sequelize");

const paginate = ({ page, pageSize }) => {
  const offset = ( page - 1) * pageSize;
  const limit = pageSize;


  return { offset, limit };
};

// Obtener todos los productos paginados y filtrados por nombre segun se requieran x query
const getAllProducts = async ( page, pageSize, name) => {
  try {
    if (name) {
      if (!page || !pageSize) {
        console.log(1);
        const findByName = await Product.findAll({
          where: {
            name: { [Op.iLike]: `%${name}%` },
          },
          include: [
            {
              model: Seller,
            },
          ],
        });
        res.json(findByName);
      } else {
        console.log(2);
        const pageByName = await Product.findAll(
            {
              where: {
                name: { [Op.iLike]: `%${name}%` },
              },
              include: [
                {
                  model: Seller,
                },
              ],
            },
            ...paginate({ page, pageSize })
        );
        res.json(pageByName);
      }
    } else if (!name && (!page || !pageSize)) {
      console.log(3);
      const findAll = await Product.findAll({
        include: [
          {
            model: Seller,

          },
        ],
      });
      res.json(findAll);
    }else {
      console.log(4);
      const findAll = await Product.findAll(
          {
            ...paginate({ page, pageSize }),
            include: [
              {
                model: Seller,
               
              },
            ],
          },
        
      );
      res.json(findAll);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
  const { product_ID } = req.params;
  try {
    const product = await Product.findByPk(product_ID, {include: [
      {
        model: Seller,
      },
    ],});
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Producto no encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el producto." });
  }
};

// Controlador para obtener productos con filtros combinados
const getFilteredProducts = async (req, res) => {
  try {
    const { categoria, pais, provincia, ciudad, valoracion, tipoDePago } =
      req.query;

    // Construye un objeto de condiciones de filtro basado en los parámetros proporcionados
    const filterConditions = {};

    if (categoria) {
      filterConditions.categoria = categoria; // Filtra por categoría exacta en la tabla 'products'
    }

    // Condiciones de filtro para la tabla 'sellers'
    const sellerFilterConditions = {};

    if (pais && provincia && ciudad) {
      sellerFilterConditions.direccion = {
        [Op.iLike]: `%${pais},${provincia},${ciudad}%`,
      };
    }

    if (valoracion) {
      sellerFilterConditions.ValoracionPromedio = {
        [Op.gte]: valoracion,
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
          where: sellerFilterConditions,
        },
      ],
      where: filterConditions,
    });

    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos filtrados." });
  }
};

// Post de productos
const createProduct = async (req, res) => {
  try {
    const { nombre, fecha, descripcion, precio, categoria, imagen, cantidad } =
      req.body;

    const sellerId = req.params.sellerId; // sacamos el ID del vendedor con params

    const newProduct = await Product.create({
      // creamos el nuevo producto en la base de datos
      nombre,
      fecha,
      descripcion,
      precio,
      categoria,
      imagen,
      cantidad,
    });

    await newProduct.setSeller(sellerId); // agregamos la relación entre el producto y el vendedor

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el producto." });
  }
};

// ... otros metodos para crear, actualizar y eliminar productos

module.exports = {
  getAllProducts,
  getProductById,
  getFilteredProducts,
  createProduct,
};
