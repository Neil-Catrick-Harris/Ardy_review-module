const Sequelize = require('sequelize');
const sequelize = new Sequelize('mykea-reviews', 'ncg8', 'password', {
  dialect: 'postgres',
  host: 'localhost',
  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log('connection has been established successfully');
  })
  .catch(err => {
    console.error('unable to connect to the database: ', err);
  });

// const Review = sequelize.