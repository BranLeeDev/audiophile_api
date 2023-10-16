const Joi = require("joi");
const { url } = require("./index");

const name = Joi.string().min(3).max(15);
const alt = Joi.string().min(6).max(50);

const createCategorySchema = Joi.object({
  name: name.required(),
  mobileImage: url.required(),
  tabletImage: url.required(),
  desktopImage: url.required(),
  alt: alt.required(),
});

const updateCategorySchema = Joi.object({
  name,
  mobileImage: url,
  tabletImage: url,
  desktopImage: url,
  alt,
});

module.exports = {
  createCategorySchema,
  updateCategorySchema,
};
