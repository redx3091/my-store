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
  res.json({
    name: 'producto 1',
    price: 1000
  });
});

app.listen(port, () => {
  console.log(`aplicacion corriendo en el puerto http://localhost${port}`);
});
