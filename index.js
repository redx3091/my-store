const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/router');
const {
  logErrors,
  errorHendler,
  boomHendler,
  ormHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hola, soy una nueva ruta');
// });

routerApi(app);

app.use(logErrors);
app.use(ormHandler);
app.use(boomHendler);
app.use(errorHendler);

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hola, soy una nueva ruta');
// });

app.listen(port, () => {
  console.log(`aplicacion corriendo en el puerto http://localhost:${port}`);
});
