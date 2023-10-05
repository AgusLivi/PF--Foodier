const admin = require("firebase-admin");
const serviceAccountKey = require('./configFire.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: 'pf-foodier.firebaseapp.com',
});

const firebaseAuth = admin.auth();

module.exports = async (req, res, next) => {
  const  idToken  = req.headers('Authorization');

  try {
    const decToken = await firebaseAuth.verifyIdToken(idToken);
    req.user = decToken;
    next();
  } catch (error) {
    console.error("Error al verificar el token:", error);
    res.status(401).json({ message: "Autenticación fallida" });
  }
};