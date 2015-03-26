'use strict';

var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');

var About = React.createClass({
  mixins: [Router.State],
  render: function() {
    return (
      <DocumentTitle title='About'>
        <div>This is all about isomorphic ReactJS and webpack</div>
      </DocumentTitle>
    )
  }
});

module.exports = About;
