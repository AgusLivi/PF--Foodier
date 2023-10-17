const { Seller, User, Product, Post } = require("../db.js");

// Obtener todos los vendedores
const getAllSellers = async (req, res) => {
  try {
    const admin = req.user;
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
    const admin = req.user;
    if (!admin)
      return res.status(401).json("Debe tener una cuenta para acceder");
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
const banUser = async (req, res) => {
  const admin = req.user;
  if (!admin) return res.status(401).json("Debe tener una cuenta para acceder");
  if (admin.rol !== "admin")
    return res.status(401).json("Usted no esta autorizado");
  const { id } = req.params;
  if (!id) return res.status(401).json("Seleccione un usuario");
  try {
    const info = await User.findByPk(id, {
      include: [
        {
          model: Post,
        },
      ],
    });
    info.deleted = true;
    await info.save();

    for (const post of info.Posts) {
      post.deleted = true;
      await post.save();
    }

    return res.status(200).send(`usuario ${info.name} deshabilitado correctamente`);
  } catch (error) {
    res.status(400).json("Algo salio mal al deshabilitar este usuario");
  }
};

//borrado logico de seller
const banSeller = async (req, res) => {
  const admin = req.user;
  if (!admin) return res.status(401).json("Debe tener una cuenta para acceder");
  if (admin.rol !== "admin")
    return res.status(401).json("Usted no esta autorizado");
  const { id } = req.params;
  if (!id) return res.status(401).json("Seleccione un vendedor");
  try {
    const info = await Seller.findByPk(id, {
      include: [
        {
          model: Product,
        },
      ],
    });
    console.log("info del seller", info);
    if (!info) return res.status(404).json("vendedor no encontrado");
    info.deleted = true;
    await info.save();

    for (const product of info.Products) {
      product.deleted = true;
      await product.save();
    }

    return res
      .status(200)
      .send(`vendedor ${info.name} deshabilitado correctamente`);
  } catch (error) {
    res.status(400).json("Algo salio mal al deshabilitar este vendedor");
  }
};

const enableUser = async (req, res) => {
  const admin = req.user;
  if (!admin) return res.status(401).json("Debe tener una cuenta para acceder");
  if (admin.rol !== "admin")
    return res.status(401).json("Usted no esta autorizado");
  const { id } = req.params;
  if (!id) return res.status(401).json("Seleccione un usuario");
  try {
    const info = await User.findByPk(id, {
      include: [
        {
          model: Post,
        },
      ],
    });
    info.deleted = false;
    await info.save();

    for (const post of info.Posts) {
      post.deleted = false;
      await post.save();
    }

    return res.status(200).send(`usuario ${info.name} habilitado correctamente`);
  } catch (error) {
    res.status(400).json("Algo salio mal al habilitar este usuario");
  }
};

const enableSeller = async (req, res) => {
  const admin = req.user;
  if (!admin) return res.status(401).json("Debe tener una cuenta para acceder");
  if (admin.rol !== "admin")
    return res.status(401).json("Usted no esta autorizado");
  const { id } = req.params;
  if (!id) return res.status(401).json("Seleccione un vendedor");
  try {
    const info = await Seller.findByPk(id, {
      include: [
        {
          model: Product,
        },
      ],
    });
    console.log("info del seller", info);
    if (!info) return res.status(404).json("vendedor no encontrado");
    info.deleted = false;
    await info.save();

    for (const product of info.Products) {
      product.deleted = false;
      await product.save();
    }

    return res
      .status(200)
      .send(`vendedor ${info.name} habilitado correctamente`);
  } catch (error) {
    res.status(400).json("Algo salio mal al habilitar este vendedor");
  }
};

const deleteUser = async (req, res) => {
  const admin = req.user;
  if (!admin) return res.status(401).json("Debe tener una cuenta para acceder");
  if (admin.rol !== "admin")
    return res.status(401).json("Usted no esta autorizado");
  const { id } = req.params;
  if (!id) return res.status(401).json("Seleccione un usuario");
  try {

    const info = await User.findByPk(id);
    await info.destroy();

    return res.status(200).send(`usuario eliminado correctamente`);
  } catch (error) {
    res.status(400).json("Algo salio mal al eliminar este usuario");
  }
};

const deleteSeller = async (req, res) => {
  const admin = req.user;
  if (!admin) return res.status(401).json("Debe tener una cuenta para acceder");
  if (admin.rol !== "admin")
    return res.status(401).json("Usted no esta autorizado");
  const { id } = req.params;
  if (!id) return res.status(401).json("Seleccione un vendedor");
  try {

    const info = await Seller.findByPk(id);
    await info.destroy();

    return res
      .status(200)
      .send(`vendedor eliminado correctamente`);
  } catch (error) {
    res.status(400).json("Algo salio mal al eliminar este vendedor");
  }
};

module.exports = {
  getAllSellers,
  getAllUsers,
  banUser,
  banSeller,
  enableUser,
  enableSeller,
  deleteUser,
  deleteSeller
};
