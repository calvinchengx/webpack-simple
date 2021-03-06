'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var DocumentTitle = require('react-document-title');

var Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <link rel="stylesheet" type="text/css" href="/css/styles.css" />
          <title>{this.props.title}</title>
        </head>
        <body>
          <div id="wrap" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
        </body>
        <script src="/js/bundle.js"></script>
      </html>
    );
  }
});

var ServerRender = function(req, res, next) {
  Router.run(routes, req.url, function(Handler, state) {
    var title = DocumentTitle.rewind();
    var markup = React.renderToString(<Handler />);
    var html = React.renderToStaticMarkup(<Html title={title} markup={markup} />);
    res.send('<!DOCTYPE html>' + html);
  });
};

module.exports = ServerRender;
