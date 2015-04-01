'use strict';
console.log('Add in production configs to common webpack config');

var config = require('./webpack.common.config.js');
config.entry.app.push('./client.jsx');

// uglify js plugin
var webpack = require('webpack');
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({ minimize: true });

// compression plugin
var CompressionPlugin = require('compression-webpack-plugin'); // for production
var compressionPlugin = new CompressionPlugin({ // for production
  asset: '{file}.gz',
  algorithm: 'gzip',
  regExp: /\.(js|html)$/,
  threshold: 10240,
  minRatio: 0.8
});

config.plugins.push(uglifyJsPlugin);
config.plugins.push(compressionPlugin);

module.exports = config;
