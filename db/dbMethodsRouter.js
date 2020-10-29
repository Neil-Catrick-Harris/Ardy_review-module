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

const getSequelizeCreateMethod = (review) => {
  return new Promise((res, rej) => {
    sequelize.query(`INSERT INTO reviews (product_id, _user, score, title, body, recommend, review_date, ease, product_value, quality, appearance, works) VALUES(${review["product_id"]}, ${review["_user"]}, ${review.score}, ${review.title}, ${review.body}, ${review.recommend}, ${review['review_date']}, ${review.ease}, ${review["product_value"]}, ${review.quality}, ${review.appearance}, ${review.works})`, {raw: true})
      .then(results => res(results))
      .catch((error) => console.log(error))
  })
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

