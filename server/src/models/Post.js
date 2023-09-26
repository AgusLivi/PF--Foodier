const { DataTypes } = require('sequelize');
const { v4: UUIDV4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('Post', {
        Post_ID: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          autoIncrement: true,
        },
        Comentarios: {
          type: DataTypes.TEXT,
        },
    }, {
        timestamps: false,
    });
}