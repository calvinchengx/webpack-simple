'use strict';
console.log('Add in development configs to common webpack config');

var config = require('./webpack.common.config.js');
config.entry.app.push('webpack-dev-server/client?/');
config.entry.app.push('webpack/hot/only-dev-server');  // only-dev-server for react-hot, instead of dev-server
config.entry.app.push('./client.jsx');

config.module.loaders[0].loaders.unshift('react-hot'); // prepend react-hot to jsx loaders

var webpack = require('webpack');
var hmrPlugin = new webpack.HotModuleReplacementPlugin();
var noErrorsPlugin = new webpack.NoErrorsPlugin();  // tells reloader not to reload iif there is syntax error
config.plugins.push(hmrPlugin);
config.plugins.push(noErrorsPlugin);  

module.exports = config;
