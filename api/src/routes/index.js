const { Router } = require("express");

// import de los controler
const { getAllPost, getPostById, createPost} = require('../controllers/postController')


// define las rutas

const router = Router();


router.post('/post', createPost)





module.exports = router