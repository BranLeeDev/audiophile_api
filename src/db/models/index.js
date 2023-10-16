const { Category, CategorySchema } = require("./categories.model");
const { Product, ProductSchema } = require("./products.model");

function setupModels(sequelize) {
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = setupModels;
