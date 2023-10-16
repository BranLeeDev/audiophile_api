const Joi = require("joi");
const { url, id } = require("./index");

const alt = Joi.string().min(6).max(50);

const createImageSchema = Joi.object({
  mobileImage: url.required(),
  tabletImage: url.required(),
  desktopImage: url.required(),
  alt: alt.required(),
  productId: id.required(),
});

const updateImageSchema = Joi.object({
  mobileImage: url,
  tabletImage: url,
  desktopImage: url,
  alt,
  productId: id,
});

module.exports = {
  createImageSchema,
  updateImageSchema,
};
