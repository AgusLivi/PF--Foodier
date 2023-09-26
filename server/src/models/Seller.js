const { DataTypes } = require('sequelize');
const { v4: UUIDV4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('Seller', {
        Seller_ID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            isEmail: true,
            },
        },
        Direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Horario: {
            type: DataTypes.STRING,
        },
        Valoracion: {
            type: DataTypes.FLOAT,
            defaultValue: 0.0,
        },
        Contacto: {
            type: DataTypes.STRING,
        },
        TipoDePago: {
            type: DataTypes.ENUM, //agregar array
        },
        Imagen: {
            type: DataTypes.STRING,
        },
    }, {
        timestamps: false,
    });
}