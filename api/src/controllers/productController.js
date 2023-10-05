const { User, Seller, Product, Post } = require("../db.js");
const { Op } = require("sequelize");

const paginate = (query, { page, pageSize }) => {
  const offset = (page - 1) * pageSize;
  const limit = pageSize;

  return { query, offset, limit };
};

// Obtener todos los productos paginados y filtrados por nombre segun se requieran x query
const getAllProducts = async (req,res) => {
  
  const {categories, address, average_rating, payment, order, orderBy, page, pageSize, name} = req.query;
  try {
    // Filtra por categoría exacta en la tabla 'products'
    let filterConditions = {};
    if (categories != null && categories != "") {
      const categoriesArray = categories.split(",");
      filterConditions.categories ={
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
      return res.status(200).json(filteredProducts);
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
      return res.status(200).json(filteredProducts);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un producto por ID
const getProductById = async (req,res) => {

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
    res.status(400).json( "Error al obtener el producto." )
  }
};

// Post de productos
const createProduct = async (req,res) => {
  const { name, description, price, old_price, categories, image, amount } = req.body;
  const {seller_id} = req.params; // sacamos el ID del vendedor con params
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

const deleteProduct = async (req,res) => {
  const { product_ID } = req.params;
  try {
    await Product.destroy({ where: { product_ID } });
    return res.status(200).send(`producto ${product_ID} eliminado correctamente`);
  } catch (error) {
    res.status(400).json('Algo salio mal con la eliminacion del producto');
  }
  
};

const getAllCategories = async (req, res)=>{
  try {
    
    const categorias = ["Acompañamientos", "Americana", "Aperitivos", "Argentina", "Bebidas", "Cafeterias", "Carnes", "Chocolates", "Congelados", "Desayunos/Meriendas", 
    "Empanadas", "Ensaladas", "Española", "Fiambres y Embutidos", "Frutas y Verduras", "Hamburguesas", "Helados", "Italiana", "Japonesa", "Lacteos/Quesos", 
    "Mexicana", "Milanesas", "Panaderia", "Papas Fritas", "Parrilla", "Pastas", "Pescados", "Peruana", "Picadas", "Pizzas", "Pollo", "Postres",
    "Sushi", "Saludable", "Sandwiches", "Sopas", "Tartas", "Tortillas", "Vegetariano/Vegano"];

    res.json( categorias );
  } catch (error) {
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}


// ... otros metodos para crear, actualizar y eliminar productos

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  getAllCategories,
  updateProduct
};
