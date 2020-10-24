const sequelize = require('../server/pgConnection.js');
debugger;

const sequelizeRead = function () {
  return 'read New Review';
}

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
exports.sequelizeRead = sequelizeRead;

