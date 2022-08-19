const express = require('express');
const passport = require('passport');

const {
  getOrderSchema,
  //createOrderSchema,
  addItemSchema,
} = require('../schemas/order.schema');
const ValidatorHandler = require('./../middlewares/validator.handler');
const OrderService = require('../services/order.service');
const validatorHandler = require('./../middlewares/validator.handler');
const router = express.Router();
const service = new OrderService();

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    await service
      .findOne(req.params.id)
      .then((result) => res.status(200).json(result))
      .catch((error) => next(error));
  }
);

router.post(
  '/',
  //ValidatorHandler(createOrderSchema, 'body'),
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    await service
      .create(req.user.sub)
      .then((result) => res.status(201).json(result))
      .catch((error) => next(error));
  }
);

router.post(
  '/add-item',
  ValidatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    await service
      .addItem(req.body)
      .then((result) => res.status(201).json(result), 'item agregado')
      .catch((error) => next(error));
  }
);

module.exports = router;
