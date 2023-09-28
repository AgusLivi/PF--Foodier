const { conn } = require('../db'); // Importo la instancia de conn para ejecutar consultas SQL

// Controlador para agregar un vendedor a la lista de favoritos de un usuario
const addFavorites = async (req, res) => {
  try {
    const { user_ID, seller_ID } = req.body; // Obtengo el ID del usuario y del vendedor

    // Ejecuto una consulta SQL para insertar un registro en la tabla Fav
    await conn.query(`
      INSERT INTO Fav (user_ID, seller_ID) VALUES (:user_ID, :seller_ID);
    `, {
      replacements: { user_ID, seller_ID },
      type: conn.QueryTypes.INSERT,
    });

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

    // Ejecuto una consulta SQL para obtener la lista de vendedores favoritos del usuario
    const favorites = await conn.query(`
      SELECT Sellers.*
      FROM Sellers
      INNER JOIN Fav ON Sellers.seller_ID = Fav.seller_ID
      WHERE Fav.user_ID = :user_ID;
    `, {
      replacements: { user_ID },
      type: conn.QueryTypes.SELECT,
    });

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
