const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '@Vandy#2022_bc/19!',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

module.exports = db;