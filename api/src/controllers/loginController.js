const { Seller, User } = require("../db.js");
const bcrypt = require('bcrypt');    // npm install bcrypt
const jwt = require('jsonwebtoken'); // npm install jsonwebtoken

const login = async (req,res)=>{
    try {
        const { email, password, userOrSeller } = req.body;

        let user;

        if (userOrSeller === 'user') {
            user = await User.findOne({ where: { email } });
        } else if (userOrSeller === 'seller') {
        user = await Seller.findOne({ where: { email } });
        } else {
        return res.status(400).json({ error: 'Tipo de usuario no válido.' });
        }

        if (user) {
        // Comparamos la contraseña proporcionada con la almacenada en la base de datos
        const passwordMatch = await bcrypt.compare(password, user.password);
    
        if (passwordMatch) {
            // Generamos un token de autenticación
            const token = jwt.sign({ userId: user.id, userOrSeller }, 'losdelfrontnoselabancan', {expiresIn: '1500h' });
            console.log("los del");
            res.json({ token }); // Devuelve el token como respuesta
        } else {
            res.status(401).json({ error: 'Contraseña incorrecta.' });
        }
        } else {
        res.status(404).json({ error: 'Usuario o vendedor no encontrado.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al iniciar sesión.' });
    }
}
module.exports = {login}