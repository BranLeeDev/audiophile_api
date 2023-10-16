const Joi = require("joi");
const { url } = require("./index");

const alt = Joi.string().min(6).max(50);

const createImageSchema = Joi.object({
  mobileImage: url.required(),
  tabletImage: url.required(),
  desktopImage: url.required(),
  alt: alt.required(),
});

const updateImageSchema = Joi.object({
  mobileImage: url,
  tabletImage: url,
  desktopImage: url,
  alt,
});

module.exports = {
  createImageSchema,
  updateImageSchema,
};
