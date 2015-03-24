'use strict';

var React = require('react');
var Hello = require('./Hello');

var Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>HelloReact</title>
        </head>
        <body>
          <div id="wrap" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
        </body>
        <script src="./bundle.js"></script>
      </html> 
    )
  }
})

var ServerRender = function(req, res, next) { 
  var markup = React.renderToString(<Hello />);
  var html = React.renderToStaticMarkup(<Html markup={markup} />);
  res.send('<!DOCTYPE html>' + html);
}

module.exports = ServerRender;
