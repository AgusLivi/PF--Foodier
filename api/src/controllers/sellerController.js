const { Seller } = require('../db.js');
const bcrypt = require('bcrypt');    // npm install bcrypt
const nodemailer = require('../mailing/nodemailer.js'); // Importa la configuración de nodemailer


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
    const { seller_ID } = req.params;
    try {
      const seller = await Seller.findByPk(seller_ID);
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

  const createSeller = async (req, res) => {
    try {
      const { name, email, address, time, contact, payment, image, password } = req.body;
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newSeller = await Seller.create({
        name,
        email,
        password: hashedPassword,
        address,
        time,
        contact,
        payment,
        image
      });
  
      // Configura el correo electrónico de bienvenida
      const mailOptions = {
        from: 'tu_correo@outlook.com', // Cambia esto a tu dirección de correo
        to: email, // Utiliza la dirección de correo electrónico del vendedor registrado
        subject: 'Bienvenido a Foodier',
        html: `<p>Bienvenido ${name} a Foodier.</p><p>Gracias por registrarte como vendedor.</p>`,
      };
  
      // Envía el correo electrónico de bienvenida
      nodemailer.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error al enviar el correo electrónico de bienvenida:', error);
        } else {
          console.log('Correo electrónico de bienvenida enviado:', info.response);
        }
      });
  
      res.status(201).json(newSeller);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({ error: 'El email ya está registrado.' });
      } else {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el vendedor.', errorMessage: error.message });
      }
    }
  };
 // Controlador para actualizar los datos de un vendedor
const updateSeller = async (req, res) => {
  try {
    const { seller_ID } = req.params;
    const updatedData = req.body;
    const seller = await Seller.findByPk(seller_ID);

    if (seller) {
      // Actualizar los datos del vendedor con los nuevos datos proporcionados
      if (updatedData.name) {
        seller.name = updatedData.name;
      }
      if (updatedData.email) {
        seller.email = updatedData.email;
      }
      if (updatedData.password) {
        // Si se proporciona una nueva contraseña, hashearla antes de almacenarla
        const hashedPassword = await bcrypt.hash(updatedData.password, 10);
        seller.password = hashedPassword;
      }
      if (updatedData.direction) {
        seller.address = updatedData.address;
      }
      if (updatedData.time) {
        seller.time = updatedData.time;
      }
      if (updatedData.contact) {
        seller.contact = updatedData.contact;
      }
      if (updatedData.payment) {
        seller.payment = updatedData.payment;
      }
      if (updatedData.image) {
        seller.image = updatedData.image;
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

const deleteSeller = async (seller_ID)=>{
  await Seller.destroy({where: {seller_ID}})
}


  // ... otros métodos para crear, actualizar y eliminar vendedores

module.exports = {
  getAllSellers,
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller
};