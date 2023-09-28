const express = require("express");
const router = express.Router();
//Importo y mas abajo agrego la ruta para el payment
const paymentController = require('../controllers/paymentController');
const favController = require('../controllers/favController');
const productRouters = require('./productRoutes');
const userController = require('../controllers/userController');


// define las rutas
router.post('/post', createPost)
router.post('/create-payment', paymentController.createPayment);

// Ruta para agregar un vendedor a favoritos
router.post('/add-favorites', favController.addFavorites);
router.post('/login', userController.createUser);

router.post

// Ruta para obtener la lista de vendedores favoritos de un usuario
router.get('/get-favorites/:user_ID', favController.getFavorites);

router.use('/products', productRouters)


module.exports = router; 