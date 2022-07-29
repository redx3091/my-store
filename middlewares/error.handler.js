function logErrors (err, req, res, next) {
  console.log('logerrors');
  console.error(err);
  next(err);
}

function errorHendler(err, req, res, next) {
  console.log('loghandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = {
  logErrors,
  errorHendler,
}
