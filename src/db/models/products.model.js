const { DataTypes, Model } = require("sequelize");
const { CATEGORIES_TABLE } = require("./categories.model");

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
  categoryId: {
    field: "category_id",
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORIES_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
};

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Category, { as: "category" });
    this.hasMany(models.Image, { as: "images", foreignKey: "productId" });
  }

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
