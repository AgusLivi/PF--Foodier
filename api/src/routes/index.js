const express = require("express");
const router = express.Router();

// Importo los controladores
const paymentController = require('../controllers/paymentController');
const favController = require('../controllers/favController');
const userController = require('../controllers/userController');
const loginController = require('../controllers/loginController')
const postController = require('../controllers/postController');
const sellerController = require('../controllers/sellerController');
const productController = require('../controllers/productController')

const { sendEmail } = require('../mailing/nodemailer');
const { borradoLogico } = require("../controllers/controladorPrueva");


// Rutas relacionadas con los productos
router.get('/products/categories', productController.getAllCategories) // sacar las categorias para renderizar
router.get("/products/:id", productController.getProductById); //busqueda por id
router.post("/products/:seller_id", productController.createProduct); // crear productos
router.put("/products/:productId", productController.updateProduct) // editar productos
router.delete("/products/:product_ID", productController.deleteProduct);  // borrar productos
router.get('/products/similar/:product_ID', productController.getSimilarProducts); // obtener productos similares
router.get("/products/", /*fireAuth,*/productController.getAllProducts); // busqueda general, filtrado y ordenamiento
//router.delete('/products', borradoLogico); RUTA PRUEBA DELETED

// Rutas para gestionar publicaciones
router.post('/posts', postController.createPost);
router.get('/posts', postController.getAllPost);
router.get('/posts/:post_ID', postController.getPostById);
router.delete('/posts/:post_ID', )

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