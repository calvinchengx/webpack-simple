'use strict';

var React = require('react');
var paths = require('../content/paths');

var Post = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  getPost: function() {
    var path = this.context.router.getCurrentParams().post;
    return paths.postForPath(path);
  },
  render: function() {
    var content = this.getPost();
    return (
      <div id="wrap" dangerouslySetInnerHTML={{__html: content}}></div>
    );
  }
});

module.exports = Post;
