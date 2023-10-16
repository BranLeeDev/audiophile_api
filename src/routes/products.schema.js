const express = require("express");

// Controllers
const {
  getAllProducts,
  createProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller");

// Schemas
const {
  createProductSchema,
  updateProductSchema,
} = require("../schemas/products.schema");
const { getOneSchema } = require("../schemas");

// Validate Schemas
const validateSchema = require("../middlewares/validator.middleware");

const productsRouter = express.Router();

productsRouter
  .route("/")
  .get(getAllProducts)
  .post(validateSchema(createProductSchema, "body"), createProduct);

productsRouter
  .route("/:id")
  .all(validateSchema(getOneSchema, "params"))
  .get(getOneProduct)
  .patch(validateSchema(updateProductSchema, "body"), updateProduct)
  .delete(deleteProduct);

module.exports = productsRouter;
