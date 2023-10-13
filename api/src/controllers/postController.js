const { Post, Seller, User } = require("../db.js");

// Obtener todos los posteos
const getAllPost = async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {
        deleted: false
      }
    });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los posteos." });
  }
};

// Obtener un posteo por ID
const getPostById = async (req, res) => {
  const { post_ID } = req.params;
  try {
    const post = await Post.findByPk(post_ID);
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
  const { seller_ID, comments, rating } = req.body;
  const {id} = req.user
  console.log(id, seller_ID, comments, rating);
  try {
    if (!id || !seller_ID || !rating) res.status(400).json("faltan datos")

    const findUser = await User.findByPk(id);
    const findSeller = await Seller.findByPk(seller_ID)
    findSeller.rating = [...findSeller.rating, rating]
    await findSeller.save()

    const newPost = await Post.create({ comments: comments });

    await findUser.addPost(newPost)
    await findSeller.addPost(newPost)


    res.json("posteado")

  } catch (error) {
    res.json(error.message)
  }
};

const deletePost = async (req, res) => {
  try {
    const { posts_ID } = req.params;
    const info = await Post.findByPk(posts_ID);
    info.deleted = true;
    info.save();
    return res.status(200).send(`post/comentario ${posts_ID} eliminado correctamente`);
  } catch (error) {
    res.status(400).json('Algo salio mal con la eliminacion del post/comentario');
  }
};

module.exports = {
  getAllPost,
  getPostById,
  createPost,
  deletePost
};
