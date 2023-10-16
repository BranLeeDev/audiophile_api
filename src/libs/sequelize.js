const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const setupModels = require("../db/models");

let URI;
if (config.isProd) {
  URI = config.dbUrl;
} else {
  URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
}

const sequelize = new Sequelize(URI, { dialect: "postgres", logging: false });

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;