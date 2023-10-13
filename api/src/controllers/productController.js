const { User, Seller, Product, Post } = require("../db.js");
const { Op } = require("sequelize");

// Obtener todos los productos paginados y filtrados por nombre segun se requieran x query
const getAllProducts = async (req, res) => {
  let {
    categories,
    address,
    average_rating,
    payment,
    order,
    orderBy,
    page,
    pageSize,
    name,
  } = req.query;
  address ? (address = address.replace(/,/g, ", ")) : address;
  try {
    // Filtra por categoría exacta en la tabla 'products'
    console.log(address);
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
        [Op.iLike]: `%${address}%`,
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
      const filteredProducts = await Product.findAndCountAll({
        where: filterConditions,
        order: ordenamiento,
        include: [
          {
            model: Seller,
            where: sellerFilterConditions,
          },
        ],
        offset: (page - 1) * pageSize,
        limit: pageSize,
      });
      return res.status(200).json(filteredProducts);
    } else {
      const filteredProducts = await Product.findAndCountAll({
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
    res.status(400).json("Error al obtener el producto.");
  }
};

// Post de productos
const createProduct = async (req, res) => {
  const login = req.user;
  if (!login) return res.status(401).json("Debe tener una cuenta para acceder");
  if (login.rol !== "seller")
    return res.status(401).json("Debe acceder como vendedor");

  const { name, description, price, old_price, categories, image, amount } =
    req.body;
  try {
    const [newProduct, created] = await Product.findOrCreate({
      where: {
        SellerSellerID: login.id,
        name,
        description,
        price,
        old_price,
        categories,
        image,
        amount,
      },
      default: {
        name,
      },
    });
    
    if (!created) return res.status(300).json("ya existe este producto")

    const seller = await Seller.findByPk(login.id); // agregamos la relación entre el producto y el vendedor
    await seller.addProduct(newProduct);

    return res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json("Error al crear el producto.");
  }
};

const updateProduct = async (req, res) => {
  try {
    const seller = req.user;

    const { name, description, price, old_price, categories, image, amount } =
      req.body;
    const { productId } = req.params; // id del producto por params
    const product = await Product.findByPk(productId, {
      include: [
        {
          model: Seller,
        },
      ],
    }); // producto por su ID en la base de datos

    if (product.Sellerseller_ID !== seller.id)
      return res.status(401).json("Usted no esta autorizado para modificar");

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    if (seller.rol === "user") {
      product.amount = product.amount - amount;
      if (product.amount <= 0) {
        product.deleted = true;
      }
    }
    if (seller.rol !== "seller")
      return res.status(401).json("Usted no esta autorizado para modificar");
    // actualizamos los campos del producto con los nuevos valores
    product.name = name;
    // product.date = date;
    product.description = description;
    product.price = price;
    product.old_price = old_price;
    product.categories = categories;
    product.image = image;

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
    const seller = req.user;
    if (seller.rol !== "seller")
      res.status(401).json("Usted no esta autorizado para modificar");
    const { product_ID } = req.body;
    const info = await Product.findByPk(product_ID);
    if (info.Sellerseller_ID !== seller.id)
      return res.status(401).json("Usted no esta autorizado para modificar");
    info.deleted = true;
    info.save();
    return res
      .status(200)
      .send(`producto ${info.name} eliminado correctamente`);
  } catch (error) {
    res.status(400).json("Algo salio mal con la eliminacion del producto");
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categorias = [
      "Acompañamientos",
      "Americana",
      "Aperitivos",
      "Argentina",
      "Bebidas",
      "Cafeterias",
      "Carnes",
      "Chocolates",
      "Congelados",
      "Desayunos/Meriendas",
      "Empanadas",
      "Ensaladas",
      "Española",
      "Fiambres y Embutidos",
      "Frutas y Verduras",
      "Hamburguesas",
      "Helados",
      "Italiana",
      "Japonesa",
      "Lacteos/Quesos",
      "Mexicana",
      "Milanesas",
      "Panaderia",
      "Papas Fritas",
      "Parrilla",
      "Pastas",
      "Pescados",
      "Peruana",
      "Picadas",
      "Pizzas",
      "Pollo",
      "Postres",
      "Sushi",
      "Saludable",
      "Sandwiches",
      "Sopas",
      "Tartas",
      "Tortillas",
      "Vegetariano/Vegano",
    ];

    res.json(categorias);
  } catch (error) {
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

// ... otros metodos para crear, actualizar y eliminar productos

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  getAllCategories,
  updateProduct,
};
