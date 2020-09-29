const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const Review = sequelize.define('review', {
  id: { type: Sequelize.INTEGER, autoIncrement: true, unique: true, allowNull: false, primaryKey: true },
  product_id: { type: Sequelize.INTEGER, allowNull: false },
  user: { type: Sequelize.STRING, allowNull: false, unique: true },
  score: { type: Sequelize.INTEGER, allowNull: false },
  title: { type: Sequelize.STRING, allowNull: false },
  body: { type: Sequelize.STRING, allowNull: false },
  recommend: { type: Sequelize.BOOLEAN, allowNull: false },
  date: { type: Sequelize.DATE, allowNull: false },
  response_id: { type: Sequelize.INTEGER },
  ease: { type: Sequelize.INTEGER, allowNull: false },
  value: { type: Sequelize.INTEGER, allowNull: false },
  quality: { type: Sequelize.INTEGER, allowNull: false },
  appearance: { type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Review;
