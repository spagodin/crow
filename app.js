const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','pug');

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  res.render('index');
  console.dir(req.body);
});

app.listen(3000);
console.log("app is running");