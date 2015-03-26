'use strict';

var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');

var Pages = React.createClass({
  render: function() {
    return (
      <DocumentTitle title="Pages">
        <div>A list of pages should go here.</div>
      </DocumentTitle>
    );
  }

});

module.exports = Pages;
