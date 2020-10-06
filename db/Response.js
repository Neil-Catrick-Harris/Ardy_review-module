const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
const sequelize = new Sequelize('user_reviews', `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, { dialect: 'mysql', dialectOptions: { multipleStatements: true } });

const Response = sequelize.define('response', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    unique: true,
    allowNull: false,
    primaryKey: true,
  },
  // review_id: { type: Sequelize.INTEGER, allowNull: false },
  responder: { type: Sequelize.STRING },
  response_date: { type: Sequelize.DATE },
  response_body: { type: Sequelize.STRING },
});

module.exports = Response;
