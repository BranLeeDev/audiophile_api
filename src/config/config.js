require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "production",
  port: process.env.PORT || 3000,
  isProd: process.env.NODE_ENV === "production",
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbUrl: process.env.DATABASE_URL,
};

module.exports = { config };
