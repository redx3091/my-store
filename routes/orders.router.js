const express = require('express');

const OrderService = require('../services/order.service');
const router = express.Router();
const service = new OrderService();

router.get('/', async (req, res) => {
  const orders = await service.find();
  res.json(orders);
});

module.exports = router;