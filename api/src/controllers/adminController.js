const { Seller, User } = require("../db.js");

// Obtener todos los vendedores
const getAllSellers = async (req, res) => {
  try {
    const admin = req.user
    if (!admin)
      return res.status(401).json("Debe tener una cuenta para acceder");
    if (admin.rol !== "admin")
      return res.status(401).json("Usted no esta autorizado");
    const sellers = await Seller.findAll();
    res.json(sellers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los vendedores." });
  }
};

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const { token } = req.headers;
    if (!token)
      return res.status(401).json("Debe tener una cuenta para acceder");
    const admin = jwt.verify(token, JWT_SECRET);
    if (admin.rol !== "admin")
      return res.status(401).json("Usted no esta autorizado");
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los usuarios." });
  }
};

module.exports = { getAllSellers, getAllUsers };
