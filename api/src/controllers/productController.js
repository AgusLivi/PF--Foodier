const { User, Seller, Product, Post } = require("../db.js");
const { Op } = require("sequelize");

const paginate = (query, { page, pageSize }) => {
  const offset = (page - 1) * pageSize;
  const limit = pageSize;

  return { query, offset, limit };
};

// Obtener todos los productos paginados y filtrados por nombre segun se requieran x query
const getAllProducts = async (
  categories,
  address,
  average_rating,
  payment,
  order,
  orderBy,
  page,
  pageSize,
  name
) => {
  try {
    // Filtra por categoría exacta en la tabla 'products'
    let filterConditions = {};
    if (categories != null && categories != "") {
      filterConditions.categories = { [Op.contains]: [categories] };
    }
    //Filtra por nombre
    if (name != null && name != "") {
      filterConditions.name = { [Op.iLike]: `%${name}%` };
    }

    //Ordenamiento
    const ordenamiento = [];
    if (orderBy != null && orderBy != "") {
      ordenamiento.push([orderBy, order]);
    }

    // Condiciones de filtro para la tabla 'sellers'
    const sellerFilterConditions = {};

    if (address != null && address != "") {
      sellerFilterConditions.address = {
        [Op.iLike]: address,
      };
    }

    if (average_rating != null && average_rating != "") {
      let limit = Number(average_rating) + 0.9;
      sellerFilterConditions.average_rating = {
        [Op.between]: [average_rating, String(limit)],
      };
    }

    if (payment != null && payment != "") {
      sellerFilterConditions.payment = payment;
    }

    // hace la peticion teniendo en cuenta los query q se envian
    if (page || pageSize) {
      const filteredProducts = await Product.findAll(
        paginate(
          {
            order: ordenamiento,
            include: [
              {
                model: Seller,
                where: sellerFilterConditions,
              },
            ],
            where: filterConditions,
          },
          { page, pageSize }
        )
      );
      return filteredProducts;
    } else {
      const filteredProducts = await Product.findAll({
        order: ordenamiento,
        include: [
          {
            model: Seller,
            where: sellerFilterConditions,
          },
        ],
        where: filterConditions,
      });
      return filteredProducts;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// Obtener un producto por ID
const getProductById = async (product_ID) => {
  try {
    const product = await Product.findByPk(product_ID, {
      include: [
        {
          model: Seller,
        },
      ],
    });
    if (product) {
      return product;
    } else {
      throw new Error("Producto no encontrado.");
    }
  } catch (error) {
    throw new Error("Error al obtener el producto.");
  }
};

// Post de productos
const createProduct = async (
  seller_id,
  name,
  date,
  description,
  price,
  categories,
  image,
  amount
) => {
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

    const seller = await Seller.findByPk(seller_id); // agregamos la relación entre el producto y el vendedor
    await seller.addProduct(newProduct)
    return newProduct;
  } catch (error) {
    console.error(error);
    throw new Error("Error al crear el producto.");
  }
};

const deleteProduct = async (product_ID) => {
  await Product.destroy({ where: { product_ID } });
};
// ... otros metodos para crear, actualizar y eliminar productos

module.exports = {
  getAllProducts,
  getProductById,
  // getFilteredProducts,
  createProduct,
  deleteProduct,
};
