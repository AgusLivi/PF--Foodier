const { DataTypes } = require("sequelize");
const { v4: UUIDV4 } = require("uuid");

module.exports = (sequelize) => {
  sequelize.define(
    "Seller",
    {
      Seller_ID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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
      Contraseña: {
        type:DataTypes.STRING,
        allowNull: false
      },
      Direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Horario: {
        type: DataTypes.STRING,
      },
      ValoracionPromedio: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      Valoraciones: {
        type: DataTypes.ARRAY(DataTypes.FLOAT),
        defaultValue: []
      },
      Contacto: {
        type: DataTypes.STRING,
      },
      TipoDePago: {
        type: DataTypes.ENUM("efectivo", "tarjeta"), //agregar array
      },
      Imagen: {
        type: DataTypes.STRING,
      },
    },
    {
        // hoock para q la valoracion promedio se defina cada vez q algien actualiza el modelo
      hooks: {
        afterSave: (seller, option) => {
          let total = 0;
          let promedio = total
          console.log(promedio);
          seller.Valoraciones.forEach((star) => (total = total + star));
          seller.ValoracionPromedio = promedio
        },
      },
    }
  );
};
