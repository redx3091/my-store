const express = require('express');
const passport = require('passport');
const OrderService = require('../services/order.service');

const router = express.Router();
const service = new OrderService();

router.get(
  '/my-orders',
  passport.authenticate('jwt', { session: false }),
  async (req, res, next) => {
    await service
      .findByUser(req.user.sub)
      .then((result) => res.status(200).json(result))
      .catch((error) => next(error));
  }
);

module.exports = router;
