'use strict';
console.log('Add in development configs to common webpack config');

var config = require('./webpack.common.config.js');

config.entry.app.push('webpack-dev-server/client?/');
config.entry.app.push('webpack/hot/dev-server');

var webpack = require('webpack');
var hmrPlugin = new webpack.HotModuleReplacementPlugin();
config.plugins.push(hmrPlugin);

module.exports = config;
