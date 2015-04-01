'use strict';
console.log('Load common webpack config');

var config = {
  entry: {
    app: []
  },
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['jsx-loader?insertPragma=React.DOM&harmony'] },
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
