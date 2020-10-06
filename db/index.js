const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createConnection({
  user: `${process.env.DB_USERNAME}`,
  password: `${process.env.DB_PASSWORD}`,
}).then((db) => {
  db.query('CREATE DATABASE IF NOT EXISTS user_reviews').then(() => {
    db.end();
  });
});

module.exports = connection;
