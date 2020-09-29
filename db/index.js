const Sequelize = require('sequelize');
const mysql = require('mysql2/promise');

mysql.createConnection({
  user: 'root',
  password: 'pineapple',
}).then((db) => {
  db.query('CREATE DATABASE IF NOT EXISTS user_reviews').then(() => {
    db.end();
  });
});

const sequelize = new Sequelize('user_reviews', 'root', 'pineapple', { dialect: 'mysql', dialectOptions: { multipleStatements: true } }); // need to change for production to use env vars

module.exports = sequelize;

// TEST METHODS I TRIED OUT
// sequelize.query('CREATE DATABASE IF NOT EXISTS user_reviews; USE user_reviews;')

// var initialize = function() {
//   mysql.createConnection({
//     user: "root",
//     password: "pineapple"
//   }).then(db => {
//     db.query("CREATE DATABASE IF NOT EXISTS user_reviews")
//     .then(() => {
//       db.end();
//     })
//   })
// }

// sequelize.authenticate()
// .then(() => {
//   sequelize.query("CREATE DATABASE IF NOT EXISTS user_reviews");
// }).then(() => {
//   sequelize.query("USE user_reviews");
// }).catch(() => {
//   console.log("unable to connect");
// })

// .then(function() {
//   sequelize.query("USE user_reviews")
// })
