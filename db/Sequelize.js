const sequelize = require('../server/pgConnection.js');

const sequelizeRead = function () {
  return 'read New Review';
}

const sequelizeCreate = function () {
  return
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
exports.sequelizeRead = sequelizeRead;

