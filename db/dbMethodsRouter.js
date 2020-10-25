const { sequelizeRead } = require('./Sequelize.js');
const { sequelizeCreate } = require('./Sequelize.js');
const { sequelizeDelete } = require('./Sequelize.js');
const { sequelizeUpdate } = require('./Sequelize.js');

const getSequelizeReadMethod = new Promise((res, rej) => {
  res(sequelizeRead());
})

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

