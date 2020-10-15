const { sequelize } = require('../index.js');


const sequelizeCreate = function () {
  return 'created New Review';
}

const sequelizeDelete = function () {
  return 'Deleted Review';
}

const sequelizeUpdate = function () {
  return 'Updated Review';
}

exports.sequelizeCreate = sequelizeCreate;
exports.sequelizeUpdate = sequelizeUpdate;
exports.sequelizeDelete = sequelizeDelete;

