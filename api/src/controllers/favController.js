const { conn, Seller, User } = require('../db'); // Importo la instancia de conn para ejecutar consultas SQL

// Controlador para agregar un vendedor a la lista de favoritos de un usuario
const addFavorites = async (req, res) => {
  
  try {
    const userToken = req.user;
    if (!userToken) return res.status(401).json("Debe tener una cuenta para acceder");
    if (userToken.rol !== "user")
      return res.status(401).json("Usted no esta autorizado");

    const user_ID = userToken.id; // Obtengo el ID del usuario
    if (!user_ID) return res.status(401).json("Envie un id de usuario");

    const { seller_ID } = req.body; // Obtengo el ID del vendedor
    console.log('seller id en controller:', seller_ID);
    if (!seller_ID) return res.status(401).json("Seleccione un vendedor");

    // Verificar si el usuario y el vendedor existen antes de agregar a favoritos
    const user = await User.findByPk(user_ID);
    const seller = await Seller.findByPk(seller_ID);

    if (!user || !seller) {
      return res.status(400).json({ error: 'El usuario o el vendedor no existen.' });
    }

    // Agregar al usuario como favorito del vendedor utilizando sequelize
    await seller.addUser(user);

    res.status(200).json({ message: 'Vendedor agregado a favoritos con éxito.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar a favoritos.' });
  }
};

// Controlador para obtener la lista de vendedores favoritos de un usuario
const getFavorites = async (req, res) => {
  try {
    const userlog = req.user;

    // Obtener la lista de vendedores favoritos del usuario utilizando Sequelize
    const user = await User.findByPk(userlog.id, {
      include: [{ model: Seller, through: 'Fav' }],
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la lista de favoritos.' });
  }
};

module.exports = {
  addFavorites,
  getFavorites,
};
