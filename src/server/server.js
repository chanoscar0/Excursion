const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const tripController = require('./controllers/tripController.js');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../../dist'));

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser : true}, (err) => {
  if(err) console.log(err);
  else console.log('Connected to database...')
});

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on port 3000...');
})
