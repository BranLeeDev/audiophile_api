const express = require("express");
const categoriesRouter = require("./categories.router");
const productsRouter = require("./products.schema");
const imagesRouter = require("./images.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/categories", categoriesRouter);
  router.use("/products", productsRouter);
  router.use("/images", imagesRouter);
}

module.exports = routerApi;
