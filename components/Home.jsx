'use strict';

var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');

var Home = React.createClass({
  mixins: [Router.State],
  render: function() {
    return (
      <DocumentTitle title='Home'>
        <div>Hello React, ssr and csr with react router!</div>
      </DocumentTitle>
    )
  }
});

module.exports = Home;
