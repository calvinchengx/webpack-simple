'use strict';
console.log('Load base webpack.config.js');

var webpack = require('webpack');
var config = {
  entry: {
    app: [
      'webpack-dev-server/client?/',
      'webpack/hot/dev-server',
      './client.jsx'
    ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
