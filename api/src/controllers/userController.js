const User = require('../models/User');
const bcrypt = require('bcrypt');    // npm install bcrypt

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
  
  // Controlador para crear un nuevo usuario
  const createUser = async (req, res) => {
    try {
      const { nombre, email, contraseña, ubicacion } = req.body;

      // Genera un hash seguro de la contraseña
      const hashedPassword = await bcrypt.hash(contraseña, 10); // 10 es el costo (número de rondas de hashing)

      const newUser = await User.create({
        nombre,
        email,
        contraseña: hashedPassword, // Almacena el hash en lugar de la contraseña en texto claro
        ubicacion
      });

      res.status(201).json(newUser);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({ error: 'El email ya está registrado.' });
      } else {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el usuario.' });
      }
    }
  };

  const updateUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const updatedData = req.body;
  
      const user = await User.findByPk(userId); // Busca el usuario por su ID
  
      if (user) {
        // Actualiza los datos del usuario con los nuevos datos proporcionados
        if (updatedData.nombre) {
          user.nombre = updatedData.nombre;
        }
        if (updatedData.ubicacion) {
          user.ubicacion = updatedData.ubicacion;
        }
        if (updatedData.contraseña) {
          // Si se proporciona una nueva contraseña, hashearla antes de almacenarla
          const hashedPassword = await bcrypt.hash(updatedData.contraseña, 10);
          user.contraseña = hashedPassword;
        }
  
        await user.save(); // Guarda los cambios en la base de datos
  
        res.json(user); // Devuelve el usuario actualizado como respuesta
      } else {
        res.status(404).json({ error: 'Usuario no encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el usuario.' });
    }
  };

  
  // ... otros métodos para crear, actualizar y eliminar usuarios


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser
};