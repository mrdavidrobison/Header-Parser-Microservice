// required imports
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');


// instantiate express for the app and bodyParser and Cors
var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

// api url
var api = '/api/whoami';

app.get(api, function(req, res, next){
  var language = req.acceptsLanguages();
  var software = req.useragent;
  var ipaddress = req.ip;
  res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
});

app.listen(3000, function(){
  console.log('working');
});