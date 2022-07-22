const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.listen(port, () => {
  console.log(`aplicacion corriendo en el puerto http://localhost${port}`);
});
