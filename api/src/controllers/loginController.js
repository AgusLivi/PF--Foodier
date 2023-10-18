const { Seller, User } = require("../db.js");
const bcrypt = require("bcrypt"); // npm install bcrypt
const jwt = require("jsonwebtoken"); // npm install jsonwebtoken
const {JWT_SECRET} = process.env

const login = async (req, res) => {
  try {
    const { email, password, rol } = req.body;
    console.log(email, password, rol);
    console.log(JWT_SECRET)
    let user;

    switch (rol) {
      case "user":
        user = await User.findOne({ where: { email } });
        if (user.deleted) return res.status(403).json("Este email se encuetra inhabilitado")
        break;
      case "admin":
        user = await User.findOne({ where: { email } });
        if (!user.admin) return res.status(401).json("Usted no cuenta con permisos de adminitrador")
        break;
      case "seller":
        user = await Seller.findOne({ where: { email } });
        if (user.deleted) return res.status(403).json("Este email se encuetra inhabilitado")
        break;
      default:
        return res.status(400).json({ error: "Tipo de usuario no válido." });
    }

    if (user) {
      // Comparamos la contraseña proporcionada con la almacenada en la base de datos
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        // Generamos un token de autenticación
        const token = jwt.sign(
          { id: user.user_ID || user.seller_ID, rol },
          JWT_SECRET
        );
        res.json({ token }); // Devuelve el token como respuesta
      } else {
        res.status(401).json({ error: "Contraseña incorrecta." });
      }
    } else {
      res.status(404).json({ error: "Usuario o vendedor no encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al iniciar sesión." });
  }
};
module.exports = { login };
