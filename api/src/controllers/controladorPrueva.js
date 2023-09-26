const {
  usuario1,
  usuario2,
  vendedor1,
  PanPepes,
  pebetesPepes,
  vendedor2,
  bigpeps,
  papasGrandes,
} = require("../../../prueba.js");

const { User, Seller, Product, Post } = require("../db.js");



const cargarPruevas = async () =>{
    // crear usuarios en la DB

    const user1 = await User.create(usuario1)
    const user2 = await User.create(usuario2)

    // crear vendedores en la DB

    const seller1 = await Seller.create(vendedor1)
    console.log(seller1.Seller_ID);
    const seller2 = await Seller.create(vendedor2)

    //crear productos en la DB 

    const produto1a = await Product.create(PanPepes, )

    const produto1b = await Product.create(pebetesPepes)







}

module.exports = {cargarPruevas}