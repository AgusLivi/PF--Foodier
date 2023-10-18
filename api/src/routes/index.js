const express = require("express");
const router = express.Router();

// Importo los controladores
const paymentController = require('../controllers/paymentController.js');
const favController = require('../controllers/favController.js');
const userController = require('../controllers/userController.js');
const loginController = require('../controllers/loginController.js');
const postController = require('../controllers/postController.js');
const sellerController = require('../controllers/sellerController.js');
const productController = require('../controllers/productController.js');
const adminControler = require('../controllers/adminController.js');

// const { borradoLogico } = require("../controllers/controladorPrueva");
const JWTMiddleware = require("../fireMiddlewares/JWTMiddleware.js"); // token widdleware
const autenticacion = require("../fireMiddlewares/fireMiddlewares.js")

// **Rutas publicas**

// Rutas relacionadas con los productos
router.get('/products/categories', productController.getAllCategories) // sacar las categorias para renderizar
router.get("/products/:id", productController.getProductById); //busqueda por id
router.get("/products/", productController.getAllProducts); // busqueda general, filtrado y ordenamiento

//login
router.post('/login', loginController.login);

//Rutas de sellers
router.get('/sellers/:seller_ID', sellerController.getSellerById);

//Rutas de creacion de usuario y seller
router.post("/users", userController.createUser);
router.post('/sellers', sellerController.createSeller);
router.get('/posts/seller/:seller_ID', postController.getAllPostsBySellerId);
//**Rutas privadas**
router.use(autenticacion)

// Rutas de productos
router.delete("/products/:product_ID", productController.deleteProduct);  // borrar productos/ seller
router.put("/products/:productId", productController.updateProduct) // editar productos /seller y user
router.post("/products", productController.createProduct); // seller


// Rutas para gestionar publicaciones
router.post('/posts', postController.createPost); // user
router.get('/posts/:post_ID', postController.getPostById); // user / admin
router.delete('/posts/',  ) // user / admin


// Rutas relacionadas a los usuarios
router.put("/users/", userController.updateUser); //user
router.delete("/users/", userController.deleteUser); // user
router.get("/users/", userController.getUserById); //user
router.get("/users/:admin_id", adminControler.getAllUsers);// admin

// Rutas relacionadas a los vendedores
router.put('/sellers/:seller_ID', sellerController.updateSeller); // seller
router.get('/sellers/', sellerController.getSellerPorIdToken); // seller
// Rutas de favoritos
router.post('/favorites/', favController.addFavorites); //user
router.get('/favorites/', favController.getFavorites); //user

// Rutas de pagos
router.post('/payments', paymentController.createPayment); // user

// Rutas de admin
router.put('/admin/seller/:id', adminControler.banSeller); // admin
router.put('/admin/user/:id', adminControler.banUser); // admin
router.put('/admin/enableSeller/:id', adminControler.enableSeller); //admin
router.put('/admin/enableUser/:id', adminControler.enableUser); //admin

router.get('/admin/user', adminControler.getAllUsers); // admin
router.get('/admin/sellers', adminControler.getAllSellers); // admin

router.delete('/admin/user/:id', adminControler.deleteUser); //admin
router.delete('/admin/sellers/:id', adminControler.deleteSeller); //admin


module.exports = router; 