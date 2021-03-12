const pgp = require("pg-promisse")();
const db = pgp({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "blog",
});

module.exports = db;
