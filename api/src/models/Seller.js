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
      name: {
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
      password: {
        type:DataTypes.STRING,
        allowNull: false
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      time: {
        type: DataTypes.STRING,
      },
      average_rating: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      rating: {
        type: DataTypes.ARRAY(DataTypes.FLOAT),
        defaultValue: []
      },
      contact: {
        type: DataTypes.STRING,
      },
      payment: {
        type: DataTypes.ENUM("Efectivo", "Pago Online/Tarjeta"), //agregar array
      },
      image: {
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
