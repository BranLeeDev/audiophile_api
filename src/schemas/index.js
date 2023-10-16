const Joi = require("joi");

const id = Joi.number().integer().positive();
const url = Joi.string().uri();

const getOneSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  id,
  getOneSchema,
  url,
};
