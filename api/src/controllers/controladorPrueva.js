const bulkProducts = require("../../../prueba.js");
const bulkSellers = require("../../../pruebaSeller.js")

const { User, Seller, Product, Post } = require("../db.js");



const cargarPruevas = async () =>{
    // crear usuarios en la DB
  
    const allProducts = await Product.bulkCreate(bulkProducts)
    const allSellers = await Seller.bulkCreate(bulkSellers)  

    const productsID = allProducts.map(p => {
      return p.product_ID
    })

    await allSellers.forEach( async (seller) => {
      for  (let i = 0; i < 7; i++) {
        await seller.addProduct(productsID[0])
        productsID.shift()
      }
    });
}

module.exports = {cargarPruevas}
