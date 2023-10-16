const { Seller, Product } = require("../db.js");
const bcrypt = require("bcrypt"); // npm install bcrypt
const nodemailer = require("../mailing/nodemailer.js").default; // Importa la configuración de nodemailer

// Obtener un vendedor por ID
const getSellerById = async (req, res) => {
  try {
   const {seller_ID} = req.params
    const seller = await Seller.findByPk(seller_ID, {
      include: [
        {
          model: Product,
        },
      ],
    });
    if (seller) {
      return res.json(seller);
    } else {
      return res.status(404).json({ error: "Vendedor no encontrado." });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al obtener el vendedor." });
  }
};

const createSeller = async (req, res) => {
  try {
    const { name, email, address, time, contact, payment, image, password } =
      req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const [newSeller, created] = await Seller.findOrCreate({
      where: {
        name,
        email,
        password: hashedPassword,
        address,
        time,
        contact,
        payment,
        image,
      },
      default: {
        email,
      },
    });
    if (!created)
      return res.status(400).json("ya existe un vendedor con ese email");
    // Configura el correo electrónico de bienvenida
    const mailOptions = {
      from: process.env.AUTH_EMAIL, // Cambia esto a tu dirección de correo
      to: email, // Utiliza la dirección de correo electrónico del vendedor registrado
      subject: "Bienvenido a Foodier",
      html: `<p>Bienvenido ${name} a Foodier.</p><p>Gracias por registrarte como vendedor.</p>`,
    };

    // Envía el correo electrónico de bienvenida
    nodemailer.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(
          "Error al enviar el correo electrónico de bienvenida:",
          error
        );
      } else {
        console.log("Correo electrónico de bienvenida enviado:", info.response);
      }
    });

    res.status(201).json(newSeller);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(400).json({ error: "El email ya está registrado." });
    } else {
      console.error(error);
      res.status(500).json({
        error: "Error al crear el vendedor.",
        errorMessage: error.message,
      });
    }
  }
};
// Controlador para actualizar los datos de un vendedor
const updateSeller = async (req, res) => {
  try {
    const login = req.user;
    if (!login)
      return res.status(401).json("Debe tener una cuenta para acceder");
    if (login.rol !== "seller")
      return res.status(401).json("Debe acceder como vendedor");
    const seller = await Seller.findByPk(login.id);

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
      res.status(404).json({ error: "Vendedor no encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el vendedor." });
  }
};

const deleteSeller = async (req, res) => {
  try {
    const login = req.user;
    if (!login)
      return res.status(401).json("Debe tener una cuenta para acceder");
    if (login.rol !== "seller")
      return res.status(401).json("Debe acceder como vendedor");
    const info = await Seller.findByPk(login.id, {
      include: [
        {
          model: Product,
        },
      ],
    });
    if (!info) return res.status(404).json("vendedor no encontrado");
    info.Products.map(async (prod) => {
      prod.deleted = true;
      await Product.save()
    });
    info.deleted = true;
    info.save();
    return res
      .status(200)
      .send(`vendedor ${info.name} eliminado correctamente`);
  } catch (error) {
    res.status(400).json("Algo salio mal con la eliminacion del vendedor");
  }
};

// ... otros métodos para crear, actualizar y eliminar vendedores

module.exports = {
  getSellerById,
  createSeller,
  updateSeller,
  deleteSeller,
};
