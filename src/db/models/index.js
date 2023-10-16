const { Category, CategorySchema } = require("./categories.model");
const { Image, ImageSchema } = require("./images.model");
const { Product, ProductSchema } = require("./products.model");

function setupModels(sequelize) {
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Image.init(ImageSchema, Image.config(sequelize));
}

module.exports = setupModels;
