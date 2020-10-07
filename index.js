const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

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

app.get('/api/products/:productId',
  (req, res) => sequelize.query(`SELECT * FROM reviews WHERE product_id = ${req.param('productId')} ORDER BY date DESC`, { type: Sequelize.QueryTypes.SELECT })
    .then((result) => res.send(result))
    .catch((error) => res.send(error)));

app.listen(port, () => { console.log(`listening on port ${port}`); });

module.exports.server = app;
