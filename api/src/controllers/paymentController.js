const mercadopago = require('mercadopago');

// Controlador para crear un pago
const createPayment = async (req, res) => {
  try {
    const { monto, descripcion } = req.body; // Los datos del pago que provienen del front, ver para modificar

    // Aca creo un objeto de preferencia de pago
    const preference = {
      items: [
        {
          title: descripcion,
          unit_price: monto,
          quantity: 1,
        },
      ],
      back_urls: {
        success: `${process.env.FRONT_URL}/payments/success`, // URL de éxito
        failure: `${process.env.FRONT_URL}/payments/failure`, // URL de fallo
        pending: `${process.env.FRONT_URL}/payments/pending`, // URL intermedia
      },
    };

    // Esta es la preferencia de pago en Mercado Pago
    const response = await mercadopago.preferences.create(preference);

    // Devuelve la URL de pago al front
    res.json({ url_pago: response.body.init_point });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el pago' });
  }
};

module.exports = {
  createPayment,
};