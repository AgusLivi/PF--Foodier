const express = require("express");
const router = express.Router();
//Importo y mas abajo agrego la ruta para el payment
const paymentController = require('../controllers/paymentController');

// import de los controler
const { getAllPost, getPostById, createPost} = require('../controllers/postController')
const { getAllProducts, getProductById } = require('../controllers/productController.js')


// define las rutas
router.post('/post', createPost)

router.get('/products', getAllProducts)
router.get('/products/:product_ID', getProductById)

router.post('/create-payment', paymentController.createPayment);


module.exports = router; 