const Pool = require("pg").Pool;
const pool = new Pool({
  user: "bitsamericas",
  host: "localhost",
  database: "api",
  password: "B1ts2021.",
  port: 5432,
});

module.exports = {
  pool,
}
