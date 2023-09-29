const express = require("express");
const router = express.Router();

// Importo los controladores
const paymentController = require('../controllers/paymentController');
const favController = require('../controllers/favController');
const productRouters = require('./productRoutes');
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController')
const postController = require('../controllers/postController');
const sellerController = require('../controllers/sellerController');

// Rutas relacionadas con los productos
router.use('/products', productRouters);

// Rutas para gestionar publicaciones
router.post('/posts', postController.createPost);
router.get('/posts', postController.getAllPost);
router.get('/posts/:post_ID', postController.getPostById);

// Rutas de autenticacion y usuarios
router.post('/login', loginController.login);

// Rutas relacionadas a los usuarios
router.post("/users", userController.createUser);
router.put("/users/:user_ID", userController.updateUser);
router.delete("/users/:user_ID", userController.deleteUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:user_ID", userController.getUserById);

// Rutas relacionadas a los vendedores
router.post('/sellers', sellerController.createSeller);
router.put('/sellers/:seller_ID', sellerController.updateSeller);
router.delete('/sellers/:seller_ID', sellerController.deleteSeller);
router.get('/sellers', sellerController.getAllSellers);
router.get('/sellers/:seller_ID', sellerController.getSellerById);

// Rutas de favoritos
router.post('/favorites', favController.addFavorites);
router.get('/favorites/:user_ID', favController.getFavorites);

// Rutas de pagos
router.post('/payments', paymentController.createPayment);


module.exports = router; 