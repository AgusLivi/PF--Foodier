const nodemailer = require('nodemailer');

// Configura el transporte SMTP para Outlook
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', // Servidor SMTP de Outlook
  port: 587, // Puerto de Outlook para SMTP
  secure: false, // El uso de TLS/STARTTLS no se establece en true
  auth: {
    user: 'helpfoodier@outlook.com', // Tu dirección de correo de Outlook
    pass: 'Foodier2023.', // Tu contraseña de Outlook
  },
});

module.exports = transporter;

