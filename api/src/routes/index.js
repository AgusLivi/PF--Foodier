const express = require("express");
const router = express.Router();
//Importo y mas abajo agrego la ruta para el payment
const paymentController = require('../controllers/paymentController');
const favController = require('../controllers/favController');
const productRouters = require('./productRoutes')

// import de los controler
const { getAllPost, getPostById, createPost} = require('../controllers/postController')
const { getAllProducts, getProductById } = require('../controllers/productController.js')


// define las rutas
router.post('/post', createPost)

router.get('/products', getAllProducts)
router.get('/products/:product_ID', getProductById)

router.post('/create-payment', paymentController.createPayment);

// Ruta para agregar un vendedor a favoritos
router.post('/add-favorites', favController.addFavorites);

// Ruta para obtener la lista de vendedores favoritos de un usuario
router.get('/get-favorites/:user_ID', favController.getFavorites);

router.use('/products', productRouters)


module.exports = router; 