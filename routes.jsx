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
var Pages = require('./components/Pages');
var Page = require('./components/Page');
var Contact = require('./components/Contact');
var NotFound = require('./components/NotFound');

/* routes */
var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="about" path="/about" handler={About} />
    <Route name="pages" path="/pages" handler={Pages} />
    <Route name="page" path="/page/:pageTitle" handler={Page} />
    <Route name="contact" path="/contact" handler={Contact} />
    <NotFoundRoute name="notfound" handler={NotFound} />
  </Route>
);

module.exports = routes;
