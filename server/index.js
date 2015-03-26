'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

require('node-jsx').install({ extension: '.jsx' });
var serverRender = require('../components/ServerRender');

app.use(morgan('dev'));  // logger middleware to stdout

var path = require('path');
var cssPath = path.resolve(__dirname, '..', 'public/css');
var jsPath = path.resolve(__dirname, '..', 'public/js');
app.use('/css', express.static(cssPath));
app.use('/js', express.static(jsPath));
app.get('/*', serverRender);

app.listen(5000, function() {
  var host = this.address().address;
  var port = this.address().port;
  console.log('nodejs listening at http://%s:%s', host, port);
});