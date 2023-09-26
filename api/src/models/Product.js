const { DataTypes } = require('sequelize');
const { v4: UUIDV4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('Product', {
        Product_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            autoIncrement: true,
          },
          Fecha: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
          },
          Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          Descripcion: {
            type: DataTypes.TEXT,
          },
          Precio: {
            type: DataTypes.FLOAT,
            allowNull: false,
          },
          Categoria: {
            type: DataTypes.ENUM, //Agregar categorias
          },
          Imagen: {
            type: DataTypes.STRING,
          },
          Cantidad: {
            type: DataTypes.INTEGER,
          },
    }, {
        timestamps: false,
    });
}