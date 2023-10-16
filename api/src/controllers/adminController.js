const { Seller, User, Product, Post } = require("../db.js");

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
//borrado logico de user
const deleteUser = async (req, res) => {
  const { user_ID } = req.params;
  if (!user_ID) return res.status(401).json("Seleccione un usuario")
  try {

      const info = await User.findByPk(user_ID, {
        include: [
          {
            model: Post,
          }
        ]
      });
      info.deleted = true;
      await info.save();

      for (const post of info.Posts) {
        post.deleted = true;
        await post.save();
      }

      return res
        .status(200)
        .send(`usuario ${info.name} eliminado correctamente`);
  } catch (error) {
    res.status(400).json("Algo salio mal con la eliminacion del usuario");
  }
};

//borrado logico de seller
const deleteSeller = async (req, res) => {
  const { seller_ID } = req.params
  if (!seller_ID) return res.status(401).json("Seleccione un vendedor")
  try {


    const info = await Seller.findByPk(seller_ID,
       {
      include: [
        {
          model: Product,
        },
      ],
    }
    );
    console.log("info del seller",info);
    if (!info) return res.status(404).json("vendedor no encontrado");
    info.deleted = true;
    await info.save();

    for (const product of info.Products) {
      product.deleted = true;
      await product.save();
    }
    
    return res
      .status(200)
      .send(`vendedor ${info.name} eliminado correctamente`);
  } catch (error) {
    res.status(400).json("Algo salio mal con lla eliminacion del vendedor");
  }
};


module.exports = {
  getAllSellers,
  getAllUsers,
  deleteUser,
  deleteSeller };
