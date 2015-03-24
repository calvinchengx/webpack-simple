/* entry.js */
document.write('<h1>Hello World!</h1>');
document.write('<div id="wrap"></div>');

var React = require('react');

var Hello = React.createClass({
  render: function() {
    return <div>Hello React</div>
  }
});

React.render(<Hello />, document.getElementById('wrap'));;
