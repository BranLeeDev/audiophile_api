"use strict";

const {
  CATEGORIES_TABLE,
  CategorySchema,
} = require("../models/categories.model");
const { PRODUCTS_TABLE, ProductSchema } = require("../models/products.model");
const { IMAGES_TABLE, ImageSchema } = require("../models/images.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORIES_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCTS_TABLE, ProductSchema);
    await queryInterface.createTable(IMAGES_TABLE, ImageSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(IMAGES_TABLE);
    await queryInterface.dropTable(PRODUCTS_TABLE);
    await queryInterface.dropTable(CATEGORIES_TABLE);
  },
};
