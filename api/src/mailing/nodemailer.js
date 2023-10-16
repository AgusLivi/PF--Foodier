const nodemailer = require('nodemailer');

function createTransporter() {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT_NM,
    secure: process.env.SECURE,
    auth: {
      user: process.env.AUTH_USER, // Aquí debe ser el nombre de usuario de tu cuenta de correo
      pass: process.env.AUTH_PASS // Utiliza la variable de entorno para la contraseña
    },
  });
  return transporter;
}

module.exports = createTransporter;
