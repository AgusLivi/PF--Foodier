const express = require("express");
const router = express.Router();
//Importo y mas abajo agrego la ruta para el payment
const paymentController = require('../controllers/paymentController');

// import de los controler
const { getAllPost, getPostById, createPost} = require('../controllers/postController')


// define las rutas
router.post('/post', createPost)

router.post('/create-payment', paymentController.createPayment);


module.exports = router;