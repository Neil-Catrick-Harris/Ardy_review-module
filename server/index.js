const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelize = require('../db/index.js');

const app = express();
const port = 3000; // need to change for later

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  return sequelize.query('SELECT * FROM reviews LIMIT 5', { type: Sequelize.QueryTypes.SELECT }).then((result) => {
    console.log(result);
    res.send(result);
  })
})

app.get('/:productId', (req, res) => {

  return sequelize.query(`SELECT * FROM reviews WHERE product_id = ${req.param('productId')}`, { type: Sequelize.QueryTypes.SELECT }).then((result) => {
    console.log(result);
    res.send(result);
  })

})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
