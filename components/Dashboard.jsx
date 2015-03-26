'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;  

// RouteHandler will decide whether to render DashboardItem or DasboardStats (default)
// So we don't have to declare <DashboardItem /> and <DashboardStats /> below.
//var DashboardItem = require('./DashboardItem');
//var DashboardStats = require('./DashboardStats');

var Dashboard = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Here, we have the dashboard!</h1>
        <RouteHandler />
      </div>
    )
  }
});

module.exports = Dashboard;
