const { sequelize } = require('../index.js');
const { getSequelizeCreateMethod } = require('./serverModels.js');

const sequelizeCreate = function () {
  return 'created New Review';
}

exports.sequelizeCreate = sequelizeCreate;
