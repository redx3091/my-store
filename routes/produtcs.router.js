const express = require('express');
const ProductService = require('../services/product.service');

const router = express.Router();
const service = new ProductService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('yo sou un filter');
});

router.get('/:id', (req, res) => {
  let { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({newProduct});
});

router.patch('/:id', (req, res) => {
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
