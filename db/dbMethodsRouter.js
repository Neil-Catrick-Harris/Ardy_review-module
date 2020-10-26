const { sequelizeRead } = require('./Sequelize.js');
const { sequelizeCreate } = require('./Sequelize.js');
const { sequelizeDelete } = require('./Sequelize.js');
const { sequelizeUpdate } = require('./Sequelize.js');
const sequelize = require('../server/pgConnection.js');

const getSequelizeReadMethod = (productId) => {
  return new Promise((res, rej) => {
    sequelize.query(`SELECT * FROM reviews WHERE product_id = ${productId}`, {raw: true})
      .then(results => res(results))
  })
}

const getSequelizeCreateMethod = function () {
  return sequelizeCreate();
}

const getSequelizeDeleteMethod = function () {
  return sequelizeDelete();
}

const getSequelizeUpdateMethod = function () {
  return sequelizeUpdate();
}

exports.getSequelizeCreateMethod = getSequelizeCreateMethod;
exports.getSequelizeDeleteMethod = getSequelizeDeleteMethod;
exports.getSequelizeUpdateMethod = getSequelizeUpdateMethod;
exports.getSequelizeReadMethod = getSequelizeReadMethod;

