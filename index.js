const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'producto 1',
      price: 1000
    },{
      name: 'producto 2',
      price: 2000
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: 'producto 1',
    price: 1000
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.get('/categories', (req, res) => {
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

app.get('/categories/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id: id,
    name: 'Home'
  });
})

app.get('/people', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'juan',
    },
    {
      id: 2,
      name: 'andres',
    },
    {
      id: 3,
      name: 'carlos',
    },{
      id: 4,
      name: 'ana',
    }
  ]);
});

app.get('/people/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id: id,
    name: 'Ana'
  });
})
app.listen(port, () => {
  console.log(`aplicacion corriendo en el puerto http://localhost${port}`);
});
