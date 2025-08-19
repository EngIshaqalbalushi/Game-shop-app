const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// DB Connection
const db = mysql.createConnection({
  host: "127.0.0.1",   // 👈 force IPv4, fixes ECONNREFUSED ::1:3306
  user: "root",
  password: "root", // use your real MySQL password
  database: "game_shop",
  port: 3307
});

// Test connection
db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Routes
app.get("/games", (req, res) => {   
  db.query("SELECT * FROM games", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
