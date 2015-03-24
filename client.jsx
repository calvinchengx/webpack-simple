'use strict';

var React = require('react');
var Hello = require('./components/Hello');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  React.render(<Handler />, document.getElementById('wrap'));
});

//React.render(<Hello />, document.getElementById('wrap'));
