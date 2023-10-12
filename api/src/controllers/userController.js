  const { User }= require('../db.js');
  const bcrypt = require('bcrypt');    // npm install bcrypt
  const transporter = require('../mailing/nodemailer.js'); // Importa el archivo de configuración de Nodemailer
  const jwt = require('jsonwebtoken');
  const config = require('../../config.js');

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
      const { user_ID } = req.params;
      try {
        const user = await User.findByPk(user_ID);
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
      const { name, email, password, location } = req.body;

      // Genera un hash seguro de la contraseña
      const hashedPassword = await bcrypt.hash(password, 10); // 10 es el costo (número de rondas de hashing)

      const newUser = await User.create({
        name,
        email,
        password: hashedPassword, // Almacena el hash en lugar de la contraseña en texto claro
        location
      });

      // Configura el correo electrónico de confirmación
      const mailOptions = {
        from: 'helpfoodier@outlook.com', // Tu dirección de correo de Outlook
        to: email, // Utiliza la dirección de correo electrónico del usuario registrado
        subject: 'Registro exitoso',
        html: `<p>Bienvenido a nuestro sitio web, ${name}.</p><p>Gracias por registrarte.</p>`,
      };

      // Envía el correo electrónico de confirmación
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error al enviar el correo electrónico de confirmación:', error);
        } else {
          console.log('Correo electrónico de confirmación enviado:', info.response);
        }
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
        const { user_ID } = req.params;
        const updatedData = req.body;
    
        const user = await User.findByPk(user_ID); // Busca el usuario por su ID
    
        if (user) {
          // Actualiza los datos del usuario con los nuevos datos proporcionados
          if (updatedData.name) {
            user.name = updatedData.name;
          }
          if (updatedData.location) {
            user.location = updatedData.location;
          }
          if (updatedData.password) {
            // Si se proporciona una nueva contraseña, hashearla antes de almacenarla
            const hashedPassword = await bcrypt.hash(updatedData.password, 10);
            user.password = hashedPassword;
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

    const deleteUser = async (user_ID)=>{
      await User.destroy({where: {user_ID}})
    }
    // Controlador para verificar y decodificar un token
    const verifyToken = (req, res) => {
      const token = req.headers.authorization;

      if (!token) {
      return res.status(401).json({ error: 'Token no proporcionado.' });
    }
    console.log("pruebadasdasdjashbdaskdcyvao");
    console.log("ACA SERIA NLA CLABE PAPA", config.secretKey);
    console.log("TOKEN DESDE EL SERVIDOR QUE HAY ACA ",  token);
    jwt.decode(token, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: err.message });
      }
          // Los datos del usuario decodificado estarán en `decoded`
          const userData = decoded;
          console.log(userData);
      res.json({ userData });
  });
};

  


    // ... otros métodos para crear, actualizar y eliminar usuarios

  module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    verifyToken
    
  };