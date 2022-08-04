const { User, UserSchema } = require('./user.model');
const { Product, ProductSchema } = require('./product.model');
const { Categorie, CategorieSchema } = require('./categorie.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Categorie.init(CategorieSchema, Categorie.config(sequelize));
}

module.exports = setupModels;
