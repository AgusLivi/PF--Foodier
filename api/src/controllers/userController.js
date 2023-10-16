const { User, Post } = require("../db.js");
const bcrypt = require("bcrypt"); // npm install bcrypt
const createTransporter = require("../mailing/nodemailer"); // Importa la función createTransporter desde tu archivo local
const transporter = createTransporter(); // Llama a la función para crear el transporter

// Obtener un usuario por ID
const getUserById = async (req, res) => {
  try {
    // desestructuro el token de los headers pero se puede mandar por query o params
    const login = req.user;
    if (!login)
      return res.status(401).json("Debe tener una cuenta para acceder");
    if (login.rol !== "user")
      return res.status(401).json("Debe acceder como usuario");
    const user = await User.findByPk(login.id,{
      include: [
        {
          model: Post,
        },
      ],
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el usuario." });
  }
};

// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { name, email, password, location, admin } = req.body;

    // Genera un hash seguro de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10); // 10 es el costo (número de rondas de hashing)

    const [newUser, created] = await User.findOrCreate({
      where: {
        name,
        email,
        password: hashedPassword, // Almacena el hash en lugar de la contraseña en texto claro
        location,
        admin,
      },
      default: {
        email,
      },
    });

    if (!created) {
      return res.status(400).json("ya existe un usuario con ese email");
    }

    // Configura el correo electrónico de confirmación
    const info = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Hello World",
      html: "<strong>Bienvenido a Foodier, muchas gracias por registrarte, combatamos el desperdicio de alimentos juntos!!!</strong>",
    };

    // Envía el correo electrónico de confirmación
    transporter.sendMail(info, (error, info) => {
      if (error) {
        console.error(
          "Error al enviar el correo electrónico de confirmación:",
          error
        );
      } else {
        console.log(
          "Correo electrónico de confirmación enviado:",
          info.response
        );
      }
    });

    res.status(201).json(newUser);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(400).json({ error: "El email ya está registrado." });
    } else {
      console.error(error);
      res.status(500).json({ error: "Error al crear el usuario." });
    }
  }
};

const updateUser = async (req, res) => {
  try {
    const login = req.user;
    if (!login)
      return res.status(401).json("Debe tener una cuenta para acceder");
    if (login.rol !== "user" && login.rol !== "admin")
      return res.status(401).json("Debe acceder como usuario");
    const { name, location, newPassword, password } = req.body;

    const user = await User.findByPk(login.id); // Busca el usuario por su ID
    if (!user) {
      res.status(404).json({ error: "Usuario no encontrado." });
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      // Actualiza los datos del usuario con los nuevos datos proporcionados
      if (!passwordMatch)
        return res.status(404).json({ error: "Contraseña incorrecta" });
      else {
        if (name && name !== "") {
          user.name = name;
        }
        if (location && location !== "") {
          user.location = location;
        }
        if (newPassword && newPassword !== "") {
          // Si se proporciona una nueva contraseña, hashearla antes de almacenarla
          const hashedPassword = await bcrypt.hash(newPassword, 10);
          user.password = hashedPassword;
        }
        await user.save(); // Guarda los cambios en la base de datos
        res.json(user); // Devuelve el usuario actualizado como respuesta
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el usuario." });
  }
};

const deleteUser = async (req, res) => {
  try {
    const login = req.user;
    if (!login)
      return res.status(401).json("Debe tener una cuenta para acceder");
    if (login.rol !== "user")
      return res.status(401).json("Usted no esta autorizado");
    else {
      const info = await User.findByPk(login.id);
      info.deleted = true;
      info.save();
      return res
        .status(200)
        .send(`usuario ${info.name} eliminado correctamente`);
    }
  } catch (error) {
    res.status(400).json("Algo salio mal con la eliminacion del usuario");
  }
};

// ... otros métodos para crear, actualizar y eliminar usuarios

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
