const Joi = require('joi');
const joi = require('joi');

const id = joi.number().integer();
const name = joi.string().min(3).max(15);
const description = joi.string().min(10);
const price = joi.number().integer().min(10);
const image = joi.string().uri();
const categoryId = joi.number().integer();

const price_min = joi.number().integer();
const price_max = joi.number().integer();

const limit = joi.number().integer();
const offset = joi.number().integer();

const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId,
});

const getProductSchema = joi.object({
  id: id.required(),
});

const queryProductSchema = joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: price_max.when('price_min', {
    is: Joi.number().integer(),
    then: Joi.required(),
  }),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema,
};
