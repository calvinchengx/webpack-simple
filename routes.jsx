'use strict';

var React = require('react');
var Router = require('react-router');

var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

/* components */
var App = require('./components/App');
var Home = require('./components/Home');
var About = require('./components/About');
var NotFound = require('./components/NotFound');

/* routes */
var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="about" handler={About} />
    <NotFoundRoute name="notfound" handler={NotFound} />
  </Route>
);

module.exports = routes;
