'use strict';

var React = require('react');

var DashboardItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    var item = this.context.router.getCurrentParams().item;
    return (
      <div>An item in the dashboard - {item}</div>
    )
  }
});

module.exports = DashboardItem;
