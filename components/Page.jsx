'use strict';

var React = require('react');

var Page = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    var pageTitle = this.context.router.getCurrentParams().pageTitle;
    // write a function that grabs content based on title and then set content below.
    return (
      <div>
        <h1>{pageTitle}</h1>
      </div>
    );
  }

});

module.exports = Page;
