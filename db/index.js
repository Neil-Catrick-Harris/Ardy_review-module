const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

mysql.createConnection({
  user: `${process.env.DB_USERNAME}`,
  password: `${process.env.DB_PASSWORD}`,
}).then((db) => {
  db.query('CREATE DATABASE IF NOT EXISTS user_reviews').then(() => {
    db.end();
  });
});

const sequelize = new Sequelize('user_reviews', `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, { dialect: 'mysql', dialectOptions: { multipleStatements: true } });

module.exports = sequelize;
