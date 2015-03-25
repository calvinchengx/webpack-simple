'use strict';
console.log('Load common webpack config');

var path = require('path');
var pathNodeModules = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
    app: [
      './client.jsx'
    ]
  },
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
  ]
};

module.exports = config;
