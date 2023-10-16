const { Category, CategorySchema } = require("./categories.model");
const { Image, ImageSchema } = require("./images.model");
const { Product, ProductSchema } = require("./products.model");

function setupModels(sequelize) {
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Image.init(ImageSchema, Image.config(sequelize));

  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Image.associate(sequelize.models);
}

module.exports = setupModels;
