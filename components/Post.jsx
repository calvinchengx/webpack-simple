'use strict';

var React = require('react');

var Post = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getPost: function() {
    var content = this.context.router.getCurrentParams().post;
    return content;
  },
  render: function() {
    var content = this.getPost();
    return (
      <div id="wrap" dangerouslySetInnerHTML={{__html: content}}></div>
    );
  }
});

module.exports = Post;
