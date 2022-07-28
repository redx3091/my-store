const express = require('express');
const router = express.Router();

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'kitchen',
    },
    {
      id: 3,
      name: 'bathroom',
    },{
      id: 4,
      name: 'restroom',
    }
  ]);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id: id,
    name: 'Home'
  });
});

module.exports = router;
