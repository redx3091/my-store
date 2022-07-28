const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for(let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('yo sou un filter');
});

router.get('/:id', (req, res) => {
  let { id } = req.params;
  if(id === '999') {
    res.status(404).json({
      message: 'no existe ese producto',
    });
  }  else {
    res.status(200).json({
      id: id,
      name: 'producto 1',
      price: 1000
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    menssage: 'created',
    data: body,
  });

});

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;

  res.json({
    menssage: 'Update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: 'Deleted',
    id,
  })
});

module.exports = router;
