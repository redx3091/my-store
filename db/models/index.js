const { User, UserSchema } = require('./user.model');
const { Product, ProductSchema } = require('./product.model');
const { Categorie, CategorieSchema } = require('./categorie.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Categorie.init(CategorieSchema, Categorie.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  Customer.associate(sequelize.models);
}

module.exports = setupModels;
