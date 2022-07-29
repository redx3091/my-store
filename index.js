const express = require('express');
const routerApi = require('./routes/router');
const { logErrors, errorHendler, boomHendler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomHendler);
app.use(errorHendler);

// app.get('/', (req, res) => {
//   res.send('Hola mi server en express');
// });

// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hola, soy una nueva ruta');
// });

app.listen(port, () => {
  console.log(`aplicacion corriendo en el puerto http://localhost:${port}`);
});
