const express = require('express');

const {
  getOrderSchema,
  createOrderSchema,
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
  ValidatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    await service
      .create(req.body)
      .then((result) => res.status(201).json(result), 'orden creaada')
      .catch((error) => next(error));
  }
);

module.exports = router;
