const express = require('express');
const CategorieService = require('../services/categories.service');
const validatorHandler = require('../middlewares/validator.handler');
const { checkRoles } = require('./../middlewares/auth.handler');
const passport = require('passport');
const {
  createCategorieSchema,
  getCategorieSchema,
  updateCategorieSchema,
} = require('../schemas/categoire.schema');
const router = express.Router();
const service = new CategorieService();

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'customer'),
  async (req, res) => {
    const categories = await service.find();
    res.json(categories);
  }
);

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin', 'customer'),
  validatorHandler(getCategorieSchema, 'params'),
  (req, res, next) =>
    service
      .findOne(req.params.id)
      .then((result) => res.status(200).json(result))
      .catch((error) => next(error))
);

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRoles('admin'),
  validatorHandler(createCategorieSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategorie = await service.create(body);
      res.status(201).json({ newCategorie });
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getCategorieSchema, 'params'),
  validatorHandler(updateCategorieSchema, 'body'),
  (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const product = service.update(id, body);
    res.json(product);
  }
);

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const response = service.delete(id);
  res.json(response);
});

module.exports = router;
