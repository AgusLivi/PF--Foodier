const { DataTypes } = require('sequelize');
const { v4: UUIDV4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('User', {
        user_ID: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        contraseña: {
          type:DataTypes.STRING,
          allowNull: false
        },
        ubicacion: {
          type: DataTypes.STRING,
        },
    }, {
        timestamps: false,
    });
}