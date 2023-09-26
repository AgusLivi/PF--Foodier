const User = require('../models/User');

  // Obtener todos los usuarios
  const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los usuarios.' });
    }
  };

  // Obtener un usuario por ID
  const getUserById = async (req, res) => {
    const { User_ID } = req.params;
    try {
      const user = await User.findByPk(User_ID);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'Usuario no encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el usuario.' });
    }
  };
  // ... otros métodos para crear, actualizar y eliminar usuarios

  const postUser = async (req, res) => {
    
  }

module.exports = {
  getAllUsers,
  getUserById
};