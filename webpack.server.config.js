'use strict';
console.log('Add in server-side rendering configs to common webpack config');

var config = require('./webpack.common.config.js');

config.name = 'webpack nodejs server-side rendering';
// webpack's target attribute is 'web' by default.
// We specify target to use node so we can require our webpack-generated js in our nodejs server.
config.target = 'node';
config.entry.app.push('./server.jsx');
config.output.filename = 'server.generated.js';
config.output.libraryTarget = 'commonjs2';

module.exports = config;
