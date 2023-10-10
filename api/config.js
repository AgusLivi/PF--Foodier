const crypto = require('crypto');

// Genera una clave secreta aleatoria de 256 bits (32 bytes)
const secretKey = crypto.randomBytes(32).toString('hex');

console.log('Clave secreta generada:', secretKey);

module.exports = {
    secretKey: secretKey, 
  };