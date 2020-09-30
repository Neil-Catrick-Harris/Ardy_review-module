const Sequelize = require('sequelize');
const sequelize = require('./index.js');

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
