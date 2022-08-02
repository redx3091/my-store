const express = require('express');

const productsRouter = require('./produtcs.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const orderRouter = require('./orders.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', orderRouter);
}

module.exports = routerApi;
