const Seller = require('../models/Seller');
const bcrypt = require('bcrypt');    // npm install bcrypt

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

    // Crear un nuevo comercio
  const createSeller = async (req, res) => {
  try {
    const { nombre, email, contraseña, direccion, horario, contacto, opcionPago } = req.body;

    const hashedPassword = await bcrypt.hash(contraseña, 10);

    const newSeller = await Seller.create({
      nombre,
      email,
      contraseña: hashedPassword,
      direccion,
      horario,
      contacto,
      opcionPago
    });

    res.status(201).json(newSeller);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ error: 'El email ya está registrado.' });
    } else {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el vendedor.' });
    }
  }
};

 // Controlador para actualizar los datos de un vendedor
const updateSeller = async (req, res) => {
  try {
    const { Seller_ID } = req.params;
    const updatedData = req.body;
    const seller = await Seller.findByPk(Seller_ID);

    if (seller) {
      // Actualizar los datos del vendedor con los nuevos datos proporcionados
      if (updatedData.nombre) {
        seller.nombre = updatedData.nombre;
      }
      if (updatedData.email) {
        seller.email = updatedData.email;
      }
      if (updatedData.contraseña) {
        // Si se proporciona una nueva contraseña, hashearla antes de almacenarla
        const hashedPassword = await bcrypt.hash(updatedData.contraseña, 10);
        seller.contraseña = hashedPassword;
      }
      if (updatedData.direccion) {
        seller.direccion = updatedData.direccion;
      }
      if (updatedData.horario) {
        seller.horario = updatedData.horario;
      }
      if (updatedData.contacto) {
        seller.contacto = updatedData.contacto;
      }
      if (updatedData.opcionPago) {
        seller.opcionPago = updatedData.opcionPago;
      }

      await seller.save();
      res.json(seller);
    } else {
      res.status(404).json({ error: 'Vendedor no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el vendedor.' });
  }
};


  // ... otros métodos para crear, actualizar y eliminar vendedores

module.exports = {
  getAllSellers,
  getSellerById,
  createSeller,
  updateSeller
};