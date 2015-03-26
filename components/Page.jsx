'use strict';

var React = require('react');

var Page = React.createClass({
  getContent: function() {
    return 'some content';
  },
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    var urlParam= this.context.router.getCurrentParams().urlParam;
    // write a function that grabs content based on title and then set content below.
    var content = this.getContent();
    return (
      <div>
        <h1>{urlParam}</h1>
        {content}
      </div>
    );
  }

});

module.exports = Page;
