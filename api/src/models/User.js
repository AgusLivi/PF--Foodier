const { DataTypes } = require('sequelize');
const { v4: UUIDV4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('User', {
        user_ID: {
          type: DataTypes.UUID,
          defaultValue: UUIDV4,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          },
        },
        password: {
          type: DataTypes.STRING, // se puede ajustar el tipo de dato según lo que necesitemos
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        location: {
          type: DataTypes.STRING,
        },
        deleted: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        }
    });
}