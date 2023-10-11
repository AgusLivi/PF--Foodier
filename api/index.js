const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const mercadopago = require('mercadopago');


// Credenciales de prueba de Mercado Pago
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
  // Puedo configurar otras opciones según sea necesario
});

const port = process.env.PORT || 3001


conn.sync({ force: false }).then(() => 
  server.listen(port, () => {
    console.log(`%s listening at ${port} `); 
  }));