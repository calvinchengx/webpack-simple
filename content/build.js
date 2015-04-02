'use strict';

var R = require('ramda');
var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');

require('node-jsx').install({ extension: '.jsx' });
var staticRender = require('../static');
var paths = require('./paths');

var blogPath = path.resolve(__dirname, '..', 'public', 'blog');
mkdirp.sync(blogPath);

var posts = paths.allPosts();
var writePost = function(value, key, post) {
  var file = blogPath + '/' + key + '.html';
  var url = '/blog/' + key;
  var dataFromUrl = staticRender(url);
  fs.writeFileSync(file, dataFromUrl);
};

R.mapObjIndexed(writePost, posts);
