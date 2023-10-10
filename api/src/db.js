require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_HOST_URL } = process.env;

const sequelize = new Sequelize(
  DB_HOST_URL || `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/foodier`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Seller, Product, Post } = sequelize.models;

Seller.hasMany(Product);
Seller.hasMany(Post);
Seller.belongsToMany(User, { through: "Fav", onDelete: "CASCADE" });
User.belongsToMany(Seller, { through: "Fav", onDelete: "CASCADE" });
Product.belongsTo(Seller);
Product.belongsToMany(User, { through: "Order", onDelete: "CASCADE" });
User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
  ...sequelize.models, 
  conn: sequelize,
};
