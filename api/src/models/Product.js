const { DataTypes } = require('sequelize');
const { v4: UUIDV4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('Product', {
        product_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
          fecha: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
          },
          nombre: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          descripcion: {
            type: DataTypes.TEXT,
          },
          precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          categoria: {
            type: DataTypes.ENUM("Harinas", "posho", "carne", "papa"), //Agregar categorias
          },
          imagen: {
            type: DataTypes.STRING,
          },
          cantidad: {
            type: DataTypes.INTEGER,
          },
    }, {
        timestamps: false,
    });
}