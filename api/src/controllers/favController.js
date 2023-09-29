const { conn, Seller, User} = require('../db'); // Importo la instancia de conn para ejecutar consultas SQL

// Controlador para agregar un vendedor a la lista de favoritos de un usuario
const addFavorites = async (req, res) => {
  try {
    const { user_ID, seller_ID } = req.body; // Obtengo el ID del usuario y del vendedor

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
    const { user_ID } = req.params; // Obtengo el id del usuario

    // Obtener la lista de vendedores favoritos del usuario utilizando Sequelize
    const user = await User.findByPk(user_ID, {
      include: [{ model: Seller, as: 'Fav' }],
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    res.status(200).json({ favorites });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la lista de favoritos.' });
  }
};

module.exports = {
  addFavorites,
  getFavorites,
};
