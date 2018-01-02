var express = require('express');
var app = express();
var mapperRoute = require('./lib/route/mapper');

var port = process.env.PORT || 3011;

app.use('/mapper', mapperRoute);

app.listen(port);