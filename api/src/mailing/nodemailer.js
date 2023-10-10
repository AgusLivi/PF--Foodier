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

// Función para enviar el correo electrónico
const sendEmail = async (toEmail) => {
  const mailOptions = {
    from: 'helpfoodier@outlook.com', // Remitente
    to: toEmail, // Destinatario
    subject: 'Foodier ayuda',
    text: 'Gracias por contactarte con Foodier, en que podemos ayudarte?', // Cuerpo del correo electrónico
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};

// Exporta las funciones
module.exports = {
  transporter,
  sendEmail,
};

