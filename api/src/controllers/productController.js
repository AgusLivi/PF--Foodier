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
        return findByName;
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
        return pageByName;
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
      return findAll;
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
      return findAll;
    }
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

// Obtener un producto por ID
const getProductById = async (product_ID) => {
  try {
    const product = await Product.findByPk(product_ID, {include: [
      {
        model: Seller,
      },
    ],});
    if (product) {
      return product;
    } else {
      throw new Error("Producto no encontrado.");
    }
  } catch (error) {
   throw new Error("Error al obtener el producto.");
  }
};

// Controlador para obtener productos con filtros combinados
const getFilteredProducts = async (categories, adress, average_rating, payment) => {
  try {

    // Construye un objeto de condiciones de filtro basado en los parámetros proporcionados
    const filterConditions = {};

    if (categories) {
      filterConditions.categories = categories; // Filtra por categoría exacta en la tabla 'products'
    }

    // Condiciones de filtro para la tabla 'sellers'
    const sellerFilterConditions = {};

    if (adress) {
      sellerFilterConditions.adress = {
        [Op.iLike]: adress,
      };
    }

    if (average_rating) {
      sellerFilterConditions.average_rating = {
        [Op.gte]: average_rating,
      };
    }

    if (payment) {
      sellerFilterConditions.payment = payment;
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

   return filteredProducts;
  } catch (error) {
    throw new Error("Error al obtener productos filtrados.");
  }
};

// Post de productos
const createProduct = async (seller_ID, name, date, description, price, categories, image, amount) => {
  try {

    const newProduct = await Product.create({
      // creamos el nuevo producto en la base de datos
      name,
      date,
      description,
      price,
      categories,
      image,
      amount,
    });

    await newProduct.setSeller(seller_ID); // agregamos la relación entre el producto y el vendedor

    return newProduct;
  } catch (error) {
    console.error(error);
    throw new Error("Error al crear el producto.");
  }
};

const deleteProduct = async (id)=>{
  await Product.destroy({where: {id}})
}
// ... otros metodos para crear, actualizar y eliminar productos

module.exports = {
  getAllProducts,
  getProductById,
  getFilteredProducts,
  createProduct,
  deleteProduct
};
