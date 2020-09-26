const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('../db/index.js');

const app = express();
const port = 3000; // need to change for later

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  sequelize.query('SELECT * FROM reviews LIMIT 5').then((result) => {

    res.send(result);
  })

})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
