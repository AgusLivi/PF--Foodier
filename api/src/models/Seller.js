const { DataTypes } = require("sequelize");
const { v4: UUIDV4 } = require("uuid");

module.exports = (sequelize) => {
  sequelize.define(
    "Seller",
    {
      seller_ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      contraseña: {
        type:DataTypes.STRING,
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      horario: {
        type: DataTypes.STRING,
      },
      valoracionPromedio: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      valoraciones: {
        type: DataTypes.ARRAY(DataTypes.FLOAT),
        defaultValue: []
      },
      contacto: {
        type: DataTypes.STRING,
      },
      tipoDePago: {
        type: DataTypes.ENUM("efectivo", "tarjeta"), //agregar array
      },
      imagen: {
        type: DataTypes.STRING,
      },
    },
    {
        // hoock para q la valoracion promedio se defina cada vez q algien actualiza el modelo
      hooks: {
        afterSave: (seller, option) => {
          let total = 0;
          seller.valoraciones.forEach((star) => (total = total + star));
          let promedio = total / seller.valoraciones.length || 0
          seller.setDataValue("valoracionPromedio", promedio)
        },
      },
    }
  );
};
