const { sequelizeCreate } = require('./Sequelize.js');
const getSequelizeCreateMethod = function () {
  return sequelizeCreate();
}

exports.getSequelizeCreateMethod = getSequelizeCreateMethod;

