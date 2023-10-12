const { User, Seller, Product, Post } = require("../db.js");
const { Op } = require("sequelize");

// Obtener todos los productos paginados y filtrados por nombre segun se requieran x query
const getAllProducts = async (req, res) => {

  let { categories, address, average_rating, payment, order, orderBy, page, pageSize, name } = req.query;
  address ? address = address.replace(/,/g, ', ') : address
  try {
    // Filtra por categoría exacta en la tabla 'products'
    console.log(address)
    let filterConditions = { deleted: false };
    if (categories != null && categories != "") {
      const categoriesArray = categories.split(",");
      filterConditions.categories = {
        [Op.overlap]: categoriesArray,
      };
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
        [Op.iLike]: `%${address}%`
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
      const filteredProducts = await Product.findAndCountAll(
        {
          where: filterConditions,
          order: ordenamiento,
          include: [
            {
              model: Seller,
              where: sellerFilterConditions,
            },
          ],
          offset: (page - 1) * pageSize,
          limit: pageSize
        },
      )
        ;
      return res.status(200).json(filteredProducts);
    } else {
      const filteredProducts = await Product.findAndCountAll({
        order: ordenamiento,
        include: [
          {
            model: Seller,
            where: sellerFilterConditions
          },
        ],
        where: filterConditions,
      });
      return res.status(200).json(filteredProducts);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {

  const { id } = req.params;

  try {
    const product = await Product.findByPk(id, {
      include: [
        {
          model: Seller,
        },
      ],
    });
    if (product) {
      return res.status(200).json(product);
    } else {
      throw new Error("Producto no encontrado.");
    }
  } catch (error) {
    res.status(400).json("Error al obtener el producto.")
  }
};

// Post de productos
const createProduct = async (req, res) => {
  const { name, description, price, old_price, categories, image, amount } = req.body;
  const { seller_id } = req.params; // sacamos el ID del vendedor con params
  try {
    const newProduct = await Product.create({
      // creamos el nuevo producto en la base de datos
      name,
      description,
      price,
      old_price,
      categories,
      image,
      amount,
    });

    const seller = await Seller.findByPk(seller_id); // agregamos la relación entre el producto y el vendedor
    await seller.addProduct(newProduct)

    return res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json("Error al crear el producto.");
  }
};

const updateProduct = async (req, res) => {
  const { name, description, price, old_price, categories, image, amount } = req.body;
  const { productId } = req.params; // id del producto por params

  try {

    const product = await Product.findByPk(productId); // producto por su ID en la base de datos

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // actualizamos los campos del producto con los nuevos valores
    product.name = name;
    // product.date = date;
    product.description = description;
    product.price = price;
    product.old_price = old_price;
    product.categories = categories;
    product.image = image;
    product.amount = amount;

    // guardamos los cambios en la base de datos
    await product.save();

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(400).json("Error al editar el producto.");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { product_ID } = req.params;
    const info = await Product.findByPk(product_ID);
    info.deleted = true;
    info.save();
    return res.status(200).send(`producto ${product_ID} eliminado correctamente`);
  } catch (error) {
    res.status(400).json('Algo salio mal con la eliminacion del producto');
  }
};

const getAllCategories = async (req, res) => {
  try {

    const categorias = ["Acompañamientos", "Americana", "Aperitivos", "Argentina", "Bebidas", "Cafeterias", "Carnes", "Chocolates", "Congelados", "Desayunos/Meriendas",
      "Empanadas", "Ensaladas", "Española", "Fiambres y Embutidos", "Frutas y Verduras", "Hamburguesas", "Helados", "Italiana", "Japonesa", "Lacteos/Quesos",
      "Mexicana", "Milanesas", "Panaderia", "Papas Fritas", "Parrilla", "Pastas", "Pescados", "Peruana", "Picadas", "Pizzas", "Pollo", "Postres",
      "Sushi", "Saludable", "Sandwiches", "Sopas", "Tartas", "Tortillas", "Vegetariano/Vegano"];

    res.json(categorias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

const getTotalProducts = async (req, res) => {
  try {
    const tota = await Product.count()
    console.log(tota);
    res.json(tota)
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

const getSimilarProducts = async (req, res) => {
  const { product_ID } = req.params;
  let { categories } = req.query;

  console.log('product_ID:', product_ID);
  console.log('categories:', categories);

  try {
    if (typeof categories !== 'string') {
      // Si categories no es una cadena, conviértela en una cadena o maneja el error adecuadamente.
      return res.status(400).json({ error: 'Categories debe ser una cadena.' });
    }

    const similarProducts = await Product.findAll({
      where: {
        product_ID: {
          [Op.not]: product_ID, // Excluye el producto actual
        },
        categories: {
          [Op.overlap]: categories.split(','),
        },
      },
      limit: 5, // Limita el resultado a 5 productos similares
    });

    console.log('similarProducts:', similarProducts);

    if (similarProducts) {
      return res.status(200).json(similarProducts);
    } else {
      return res.status(404).json({ error: 'No se encontraron productos similares.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  getAllCategories,
  updateProduct,
  getTotalProducts,
  getSimilarProducts,
};
