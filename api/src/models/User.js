const { DataTypes } = require('sequelize');
const { v4: UUIDV4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('User', {
        User_ID: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          autoIncrement: true,
        },
        Nombre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        HistorialDeCompra: {
          type: DataTypes.JSONB, // dato ajustable
        },
        Ubicacion: {
          type: DataTypes.STRING,
        },
    }, {
        timestamps: false,
    });
}