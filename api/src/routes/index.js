const express = require("express");
const router = express.Router();
//Importo y mas abajo agrego la ruta para el payment
const paymentController = require('../controllers/paymentController');
const favController = require('../controllers/favController');

// import de los controler
const { getAllPost, getPostById, createPost} = require('../controllers/postController')


// define las rutas
router.post('/post', createPost)

router.post('/create-payment', paymentController.createPayment);

// Ruta para agregar un vendedor a favoritos
router.post('/add-favorites', favController.addFavorites);

// Ruta para obtener la lista de vendedores favoritos de un usuario
router.get('/get-favorites/:user_ID', favController.getFavorites);

router.use('/products', productRoutes)


module.exports = router;