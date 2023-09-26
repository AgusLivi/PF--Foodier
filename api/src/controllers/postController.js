const Post = require('../models/Post');

  // Obtener todos los posteos
  const getAllPost = async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los posteos.' });
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
        res.status(404).json({ error: 'Posteo no encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el posteo.' });
    }
  };
  // ... otros métodos para crear, actualizar y eliminar posteos

module.exports = {
    getAllPost,
    getPostById
};
