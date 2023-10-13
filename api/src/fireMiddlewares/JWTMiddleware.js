const jwt = require("jsonwebtoken"); // npm install jsonwebtoken
const { JWT_SECRET } = process.env;

module.exports = async (req, res) => {
        // desestructuro el token de los headers pero se puede mandar por query o params. lo q veamos mas combeniente
        const { token } = req.headers;
        // valido q efectivamente llege un token
        if (!token)
        return res.status(401).json("Debe tener una cuenta para acceder");
        // decodifico la info q llega en el token
        const decode = jwt.verify(token, JWT_SECRET);
        //envio la info del token al controlador
        req.user = decode
        console.log(decode);
        next()
}