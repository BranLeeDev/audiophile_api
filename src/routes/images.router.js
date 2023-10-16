const express = require("express");

// Controllers
const {
  getAllImages,
  createImage,
  getOneImage,
  updateImage,
  deleteImage,
} = require("../controllers/images.controller");

// Schemas
const {
  createImageSchema,
  updateImageSchema,
} = require("../schemas/images.schema");
const { getOneSchema } = require("../schemas");

// Validate Schemas
const validateSchema = require("../middlewares/validator.middleware");

const imagesRouter = express.Router();

imagesRouter
  .route("/")
  .get(getAllImages)
  .post(validateSchema(createImageSchema, "body"), createImage);

imagesRouter
  .route("/:id")
  .all(validateSchema(getOneSchema, "params"))
  .get(getOneImage)
  .patch(validateSchema(updateImageSchema, "body"), updateImage)
  .delete(deleteImage);

module.exports = imagesRouter;
