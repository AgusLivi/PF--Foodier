const nodemailer = require('nodemailer');

function createTransporter() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.resend.com',
    port: 465,
    secure: true,
    auth: {
      user: 'resend', // Aquí debe ser el nombre de usuario de tu cuenta de correo
      pass: 're_TN8GtRF2_7Aa2Bh3WmU9pPDTjL9sytQwY' // Utiliza la variable de entorno para la contraseña
    },
  });

  return transporter;
}

module.exports = createTransporter;
