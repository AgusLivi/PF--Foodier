const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.OUTLOOK_USER, // Utiliza la variable de entorno para el usuario
    pass: process.env.OUTLOOK_PASS, // Utiliza la variable de entorno para la contraseña
  },
});

module.exports = transporter;
