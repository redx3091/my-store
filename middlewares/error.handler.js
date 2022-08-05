const { ValidationError } = require('sequelize');
const boom = require('@hapi/boom');

function logErrors(err, req, res, next) {
  console.log('logerrors');
  console.error(err);
  next(err);
}

function errorHendler(err, req, res) {
  console.log('loghandler');
  res.statusCode(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomHendler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function ormHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors,
    });
  }
  next(err);
}

module.exports = {
  logErrors,
  errorHendler,
  boomHendler,
  ormHandler,
};
