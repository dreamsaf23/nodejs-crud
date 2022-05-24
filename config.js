const mysql = require("mysql");

// Database Credential

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mlbb",
});

// Intergrating

connection.connect((error) => {
  if (error) throw error;
  console.log("Database Connected 💕 ...");
});

module.exports = connection;
