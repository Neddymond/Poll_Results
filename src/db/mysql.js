const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: process.env.DB
});

db.connect((err) => {
  if (err) throw err;
});


module.exports = db;