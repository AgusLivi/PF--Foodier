const bulkProducts = require("../../../prueba.js");
const bulkSellers = require("../../../pruebaSeller.js")
const bulkUsers = require("../../../usuariosHC.js")

const { User, Seller, Product, Post } = require("../db.js");

const borradoLogico = async (req, res) => {
  try {
    const { product_ID } = req.query;
    const info = await Product.findByPk(product_ID);
    info.deleted = true;
    info.save();
  } catch (error) {
    console.log(error.message);
  }
};

const cargarPruevas = async () => {
  // crear usuarios en la DB

  const allUsers = await User.bulkCreate(bulkUsers)


  //crea vendedores y productos en la DV

  const allProducts = await Product.bulkCreate(bulkProducts)
  const allSellers = await Seller.bulkCreate(bulkSellers)

  const productsID = allProducts.map(p => {
    return p.product_ID
  })

  await allSellers.forEach(async (seller) => {
    for (let i = 0; i < 7; i++) {
      await seller.addProduct(productsID[0])
      productsID.shift()
    }
  });


}

module.exports = { cargarPruevas, borradoLogico }
