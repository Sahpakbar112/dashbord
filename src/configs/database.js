require("dotenv").config();

const { Pool } = require("pg");

module.exports = {
  pool: new Pool({
    username: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,

    // max: 5,
    // idleTimeoutMillis: 30000,
    // connectionTimeoutMillis: 5000,
  }),
};
