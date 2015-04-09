'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');

//require('node-jsx').install({ extension: '.jsx' });
//var serverRender = require('../server');
var server = require('../public/js/server.generated.js');

app.use(morgan('dev'));  // logger middleware to stdout


var path = require('path');

var cssPath = path.resolve(__dirname, '..', 'public/css');
var jsPath = path.resolve(__dirname, '..', 'public/js');
app.use('/css', express.static(cssPath));
app.use('/js', express.static(jsPath));

// This is where our pre-generated static pages will go to
// TODO: update our mdToHtml script to generate standalone html content
var blogPath = path.resolve(__dirname, '..', 'content/html');
app.use('/', express.static(blogPath, {'extensions': ['html']}));

//app.get('/*', serverRender);
app.get('/*', server);

app.listen(5000, function() {
  var host = this.address().address;
  var port = this.address().port;
  console.log('nodejs listening at http://%s:%s', host, port);
});
