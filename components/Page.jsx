'use strict';

var React = require('react');

var Page = React.createClass({
  getContent: function(title) {
    return 'some content';
  },
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function() {
    var title= this.context.router.getCurrentParams().title;
    // write a function that grabs content based on title and then set content below.
    var content = this.getContent(title);
    return (
      <div>
        <h1>{urlParam}</h1>
        {content}
      </div>
    );
  }

});

module.exports = Page;
