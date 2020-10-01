const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('./db/index.js');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('/:productId', (req, res) => res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html')));

app.get('/api/reviews/:productId',
  (req, res) => sequelize.query(`SELECT * FROM reviews WHERE product_id = ${req.param('productId')}`, { type: Sequelize.QueryTypes.SELECT })
    .then((result) => res.send(result))
    .catch((error) => res.send(error)));

app.listen(port, () => { console.log(`listening on port ${port}`); });

module.exports.server = app;
