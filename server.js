var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DemoApi');

var router = require('./route');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.port || 3000;

app.get('/', function(req, res){
  res.json({message: 'Welcome to demo api'});
});

app.use('/api', router);

app.listen(port);

console.log('Server running on port:' + port);
