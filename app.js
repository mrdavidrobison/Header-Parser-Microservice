// required imports
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

// instantiate express for the app and bodyParser and Cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors);

// url
var api = '/api/whoami';

app.get(api, function(req, res, next){
  var language;
  var software;
  var ipaddress = req.ip;
  res.json({'ipaddress': ipaddress});
});

app.listen(3000, function(){
  console.log('working');
});