const { Post, Seller } = require("../db.js");

// Obtener todos los posteos
const getAllPost = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los posteos." });
  }
};

// Obtener un posteo por ID
const getPostById = async (req, res) => {
  const { Post_ID } = req.params;
  try {
    const post = await Post.findByPk(Post_ID);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Posteo no encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el posteo." });
  }
};
// ... otros métodos para crear, actualizar y eliminar posteos

const createPost = async (req, res) => {
  const { user_ID, seller_ID, comment, valoration } = req.body;
  try {
    if (!user_ID || !seller_ID || !valoration) res.status(400).json("faltan datos")

    const newPost = await Post.create({comment});
    await newPost.addUser(user_ID)
    await newPost.addSeller(seller_ID)

    const findSeller = await Seller.findOne(seller_ID)
    findSeller.valoraciones = [...findSeller.valoraciones, valoration]
    await findSeller.save()

  } catch (error) {
    res.json(error.message)
  }
};

module.exports = {
  getAllPost,
  getPostById,
  createPost
};
