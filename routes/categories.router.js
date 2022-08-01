const express = require('express');
const CategorieService = require('../services/categories.service')
const validatorHandler = require('../middlewares/validator.handler');
const { createCategorieSchema, getCategorieSchema, updateCategorieSchema } = require('../schemas/categoire.schema');
const router = express.Router();
const service = new CategorieService();

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/:id', validatorHandler(getCategorieSchema, 'params'), (req, res) => {
  const { id } = req.params;
  const categorie = service.findOne(id);
  res.json(categorie);
});

router.post('/',validatorHandler(createCategorieSchema, 'body'), (req, res) => {
  const body = req.body;
  const newCategorie = service.create(body);
  res.status(201).json({newCategorie});
});

router.patch('/:id', validatorHandler(getCategorieSchema, 'params'), validatorHandler(updateCategorieSchema, 'body'), (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const product = service.update(id , body);
  res.json(product);
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  const response = service.delete(id)
  res.json(response)
});

module.exports = router;
