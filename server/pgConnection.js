const Sequelize = require('sequelize');
const sequelize = new Sequelize('reviews_module', 'ncg8', '', {
  dialect: 'postgres',
  host: 'localhost',
  logging: false
})

module.exports = sequelize;