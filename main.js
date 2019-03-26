const express = require('express');

const app = express();
const mapperRoute = require('./lib/route/mapper');

const port = process.env.PORT || 3011;

app.use('/mapper', mapperRoute);

app.listen(port);