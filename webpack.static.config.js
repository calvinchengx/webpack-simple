'use strict';
console.log('Add in static site configs to common webpack config');

var config = require('./webpack.common.config.js');
config.target = 'node';     // webpack's target attribute is 'web' by default.
                            // we specify 'node' in order to generate our static files

module.exports = config;
