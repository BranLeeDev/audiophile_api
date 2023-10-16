const { DataTypes, Model } = require("sequelize");

const IMAGES_TABLE = "images";

const ImageSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
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

class Image extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: IMAGES_TABLE,
      modelName: "Image",
      timestamps: true,
    };
  }
}

module.exports = {
  IMAGES_TABLE,
  ImageSchema,
  Image,
};
