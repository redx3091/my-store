const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/products', (req, res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for(let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  res.json(products);
});


app.get('/users', (req, res) => {
  const {limit, offset} = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros')
  }
})

app.get('/products/filter', (req, res) => {
  res.send('yo sou un filter');
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
