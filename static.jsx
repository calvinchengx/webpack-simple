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
    )
  }
})

// given a url, our router will decide which Handler to use in the callback 
// the corresponding markup is then created and pass on to the html component 
// and rendered as static html data to be returned.
// This StaticRender function will be used by our static page builder to provide the 
// html data that will be written to disk.
var StaticRender = function(url) {
  var html;
  var title = DocumentTitle.rewind();
  Router.run (routes, url, function (Handler, state) {
    var markup = React.renderToString(<Handler />);
    html = React.renderToStaticMarkup(<Html title={title} markup={markup} />);
  });
  console.log(html);
  return html;
}

module.exports = StaticRender;
