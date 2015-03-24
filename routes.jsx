'use strict';

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

/* components */
var App = require('./components/App');
var Hello = require('./components/Hello');

/* routes */
var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="hello" handler={Hello} />
  </Route>
);

module.exports = routes;
