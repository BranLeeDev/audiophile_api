const { DataTypes, Model } = require("sequelize");

const PRODUCTS_TABLE = "products";

const ProductSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(40),
  },
  slug: {
    allowNull: false,
    type: DataTypes.STRING(15),
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING(255),
  },
  features: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  isNew: {
    field: "is_new",
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
};

class Product extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: "Product",
      timestamps: true,
    };
  }
}

module.exports = {
  PRODUCTS_TABLE,
  ProductSchema,
  Product,
};
