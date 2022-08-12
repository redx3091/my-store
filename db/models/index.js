const { User, UserSchema } = require('./user.model');
const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./categorie.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Order, OrderSchema } = require('./oder.model');
const { OrderProduct, OrderProductSchema } = require('./order-products.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
