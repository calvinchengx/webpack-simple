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
console.log(blogPath);

var posts = paths.allPosts();
console.log(posts);
var writePost = function(value, key, post) {
  console.log('This is the post: ' + key);
  var file = blogPath + '/' + key + '.html';
  console.log(file);
  var url = '/blog/' + key;
  console.log(url);
  var dataFromUrl = staticRender(url);
  console.log(dataFromUrl);
  fs.writeFileSync(file, dataFromUrl);
};
R.mapObjIndexed(writePost, posts);

//for (var post in paths.allPosts()) {
  //var file = blogPath + '/' + post + '.html';
  //console.log(file);
  //var url = '/blog/' + post;
  //console.log(url);
  //var dataFromUrl = staticRender(url);
  //console.log(dataFromUrl);
  //fs.writeFileSync(file, dataFromUrl);
//}
