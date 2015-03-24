'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

require('node-jsx').install({ extension: '.jsx' });
var serverRender = require('./components/ServerRender');

app.use(morgan('dev'));  // logger middleware to stdout

app.get('*', serverRender);

app.listen(5000, function() {
  var host = this.address().address;
  var port = this.address().port;
  console.log('nodejs listening at http://%s:%s', host, port);
});
