const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

function queryHandler() {
  return async (req, res, next) => {
    const data = req.body;
    const user = await models.User.findOne({
      where: {
        email: data.email,
      },
    });

    if (user) {
      return next(boom.conflict('User already exist ' + data.email));
    }
    next();
  };
}

module.exports = queryHandler;
