/* entry.js */
var React = require('react');

var Hello = React.createClass({
  render: function() {
    return <div>Hello React</div>
  }
});

React.render(<Hello />, document.body);
