const { DataTypes, Model } = require("sequelize");

const CATEGORIES_TABLE = "categories";

const CategorySchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(15),
  },
  mobileImage: {
    field: "mobile_image",
    allowNull: false,
    type: DataTypes.TEXT,
  },
  tabletImage: {
    field: "tablet_image",
    allowNull: false,
    type: DataTypes.TEXT,
  },
  desktopImage: {
    field: "desktop_image",
    allowNull: false,
    type: DataTypes.TEXT,
  },
  alt: {
    allowNull: false,
    type: DataTypes.STRING(50),
  },
};

class Category extends Model {
  static associate(models) {
    this.hasMany(models.Product, { as: "products", foreignKey: "categoryId" });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORIES_TABLE,
      modelName: "Category",
      timestamps: true,
    };
  }
}

module.exports = {
  CATEGORIES_TABLE,
  CategorySchema,
  Category,
};
