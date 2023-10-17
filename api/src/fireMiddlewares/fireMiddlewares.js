const admin = require("firebase-admin");
const jwt = require("jsonwebtoken"); // npm install jsonwebtoken
const { JWT_SECRET } = process.env;
const {SERVER_URL} = process.env

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
  const  idToken  = req.headers['Authorization'];
  const { token } = req.headers;
  if (idToken) {
    try {
      const decToken = await firebaseAuth.verifyIdToken(cert);
      req.user = decToken;
      next();
    } catch (error) {
      console.error("Error al verificar el token:", error);
      res.status(401).json({ message: "Autenticación fallida" });
    }
  } else if(token) {
    try {
      const decode = jwt.verify(token, JWT_SECRET);
      req.user = decode;
      console.log(decode);
      next();
    } catch (error) {
      console.error("Error al verificar el token:", error);
      res.status(401).json({ message: "Autenticación fallida" });
    }
  }
  else{
    return res.status(401).json("Debe tener una cuenta para acceder")
  }
};