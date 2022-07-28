const express = require('express');
//const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const {limit, offset} = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros')
  }
});

// router.get('/people', (req, res) => {
//   res.json([
//     {
//       id: 1,
//       name: 'juan',
//     },
//     {
//       id: 2,
//       name: 'andres',
//     },
//     {
//       id: 3,
//       name: 'carlos',
//     },{
//       id: 4,
//       name: 'ana',
//     }
//   ]);
// });

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id: id,
    name: 'Ana'
  });
})

module.exports = router;
