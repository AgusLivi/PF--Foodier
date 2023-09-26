const Seller = require('../models/Seller');

 // Obtener todos los vendedores
  const getAllSellers = async (req, res) => {
    try {
      const sellers = await Seller.findAll();
      res.json(sellers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los vendedores.' });
    }
  };

  // Obtener un vendedor por ID
  const getSellerById = async (req, res) => {
    const { Seller_ID } = req.params;
    try {
      const seller = await Seller.findByPk(Seller_ID);
      if (seller) {
        res.json(seller);
      } else {
        res.status(404).json({ error: 'Vendedor no encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el vendedor.' });
    }
  };
  // ... otros métodos para crear, actualizar y eliminar vendedores

module.exports = {
  getAllSellers,
  getSellerById
};