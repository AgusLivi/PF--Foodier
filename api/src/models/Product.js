const { DataTypes } = require('sequelize');
const { v4: UUIDV4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('Product', {
        product_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
          date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.TEXT,
          },
          price: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          old_price: {
            type: DataTypes.FLOAT, // Precio anterior
          },
          categories: {
            type: DataTypes.ENUM("Americana", "Argentina", "Bebidas", "Cafetería", "Carnes", "Chocolates", "Congelados", "Desayunos/Meriendas", 
            "Empanadas", "Ensaladas", "Fiambres y Embutidos", "Frutas y Verduras", "Hamburguesas", "Helados", "Lacteos/Quesos", 
            "Milanesas", "Panaderia", "Papas Fritas", "Parrilla", "Pastas", "Pescados", "Picadas", "Pizzas", "Pollo", "Postres",
            "Sushi", "Sandwiches", "Tartas", "Vegetariano/Vegano"),
          },
          image: {
            type: DataTypes.STRING,
          },
          amount: {
            type: DataTypes.INTEGER,
          },
    }, {
        timestamps: false,
    });
}