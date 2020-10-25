const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const Review = require('./db/Review.js');
const Response = require('./db/Response.js');
const NewRelic = require('newrelic');
const { getSequelizeCreateMethod } = require('./db/dbMethodsRouter.js');
const { getSequelizeDeleteMethod } = require('./db/dbMethodsRouter.js');
const { getSequelizeUpdateMethod } = require('./db/dbMethodsRouter.js');
const { getSequelizeReadMethod } = require('./db/dbMethodsRouter.js');
debugger;
dotenv.config();
const sequelize = new Sequelize('user_reviews', `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, { dialect: 'mysql', dialectOptions: { multipleStatements: true } });

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'client', 'dist')));
app.use('/products', express.static(path.join(__dirname, 'client', 'dist')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/products/*', (req, res) => { res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html')); });

app.get('/api/reviews/products/:productId',
  (req, res) => sequelize.query(`SELECT * FROM reviews WHERE product_id = ${req.param('productId')} ORDER BY date DESC`, { type: Sequelize.QueryTypes.SELECT })
    .then((result) => res.send(result))
    .catch((error) => res.send(error)));

app.get('/api/reviews/routerTest', (req, res) => {
  getSequelizeReadMethod
    .then((result) => res.send(result))
    .catch((error) => res.send(error));
});

app.post('/api/reviews/products/:productId', (req, res) => {
  res.send(req.body);

})

app.delete('/api/reviews', (req, res) => {
  res.send(getSequelizeDeleteMethod());
})

app.put('/api/reviews', (req, res) => {
  res.send(getSequelizeUpdateMethod());
});

app.listen(port, () => { console.log(`listening on port ${port}`); });

module.exports.server = app;
module.exports.sequelize = sequelize;