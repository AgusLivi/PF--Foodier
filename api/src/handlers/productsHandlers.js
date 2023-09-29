const {
  getAllProducts,
  getProductById,
//   getFilteredProducts,
  createProduct,
  deleteProduct,
} = require("../controllers/productController");

const getProductsHandler = async (req, res) => {
  const {
    categories, address, average_rating, payment, order, orderBy, page, pageSize, name
  } = req.query;
  try {
    const response = await getAllProducts(
      categories,
      address,
      average_rating,
      payment,
      order,
      orderBy,
      page,
      pageSize,
      name
    );
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductsHandlerById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getProductById(id);
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const getProductsFilteredHandler = async (req,res) => {
//     const { categories, adress, average_rating, payment } = req.query;

//     try {
//         const response = await getFilteredProducts(categories, adress, average_rating, payment);
//         return res.status(201).json(response)
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// }

const createProductsHandler = async (req, res) => {
  const { name, date, description, price, categories, image, amount } =
    req.body;
  const seller_ID = req.params.seller_ID; // sacamos el ID del vendedor con params

  try {
    const response = await createProduct(
      seller_ID,
      name,
      date,
      description,
      price,
      categories,
      image,
      amount
    );
    return res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProductHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProduct(id); // importar
    res.status(200).send(`producto ${id} eliminado correctamente`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProductsHandler,
  getProductsHandlerById,
//   getProductsFilteredHandler,
  createProductsHandler,
  deleteProductHandler,
};
