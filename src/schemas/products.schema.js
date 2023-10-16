const Joi = require("joi");

const { id } = require("./index");

const name = Joi.string().min(6).max(40);
const slug = Joi.string().min(3).max(15);
const description = Joi.string().min(10).max(255);
const features = Joi.string().min(20).max(1000);
const price = Joi.number().integer().positive().min(10).max(100000);
const isNew = Joi.boolean();

const createProductSchema = Joi.object({
  name: name.required(),
  slug: slug.required(),
  description: description.required(),
  features: features.required(),
  price: price.required(),
  isNew: isNew.required(),
  categoryId: id.required(),
});

const updateProductSchema = Joi.object({
  name,
  slug,
  description,
  features,
  price,
  isNew,
  categoryId: id,
});

module.exports = {
  createProductSchema,
  updateProductSchema,
};
