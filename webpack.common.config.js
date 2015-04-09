'use strict';
console.log('Load common webpack config');

var config = {
  entry: {
    app: []
  },
  output: {
    path: require('path').resolve(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['jsx-loader?insertPragma=React.DOM&harmony'] },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.md$/, loader: 'html!markdown' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
  ]
};

module.exports = config;
