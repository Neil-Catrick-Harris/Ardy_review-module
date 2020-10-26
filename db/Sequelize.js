const sequelize = require('../server/pgConnection.js');

const sequelizeRead = function () {
  sequelize.query(`SELECT * FROM reviews WHERE product_id = 1`, {raw: true})
    .then((results) => {
      return results;
    })
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

