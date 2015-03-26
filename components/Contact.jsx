'use strict';

var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');

var Contact = React.createClass({
  render: function() {
    return (
      <DocumentTitle title='Get in touch'>
        <div>Get in touch!</div>
      </DocumentTitle>
    );
  }

});

module.exports = Contact;
