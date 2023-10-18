const admin = require("firebase-admin");
const jwt = require("jsonwebtoken"); // npm install jsonwebtoken
const { JWT_SECRET } = process.env;
const {SERVER_URL} = process.env
const { User, Post } = require("../db.js");


const cert = {
  type:process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENTE_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
  client_x509_cert_url: process.env.CLIENT_CERT,
  universe_domain: process.env.UNIVERCE_DOMAIN,
}
   

admin.initializeApp({
  credential: admin.credential.cert(cert),
  databaseURL: SERVER_URL,
});

const firebaseAuth = admin.auth();

module.exports = async (req, res, next) => {
  const { token } = req.headers;
   if(token) {
    try {
      const decode = jwt.verify(token, JWT_SECRET);
      req.user = decode;
      console.log(decode);
      next();
    } catch (error) {
      if (error.message === "invalid algorithm") {
        const decToken = await firebaseAuth.verifyIdToken(token);
        decToken.rol = "user"
        const user = await User.findOne({where: {email: decToken.email}})
        if (user) {
          decToken.id = user.user_ID
        } else {
          const singUp = {
            name: decToken.name,
            email: decToken.email,
            password: decToken.user_id
          }
          await User.create(singUp)
        }
        req.user = decToken;
        console.log(decToken);
        next();
      }else{
      console.error("Error al verificar el token:", error);
      res.status(401).json({ message: "Autenticación fallida" });}
    }
  }
  else{
    return res.status(401).json("Debe tener una cuenta para acceder")
  }
};