'use strict';

var React = require('react');
var Router = require('react-router');

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div id="content">
        <div id="nav">
          <ul>
            <Link to="home"><li>Home</li></Link>
            <Link to="about"><li>About</li></Link>
            <Link to="pages"><li>Pages</li></Link>
            <Link to="contact"><li>Contact</li></Link>
          </ul>
        </div>
        <div id="handler">
          <RouteHandler />
        </div>
      </div>
    )
  }
});

module.exports = App;
