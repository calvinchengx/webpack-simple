'use strict';

var path = require('path');
var R = require('ramda');
var content = require('./index');
var isThere = require('is-there');

// where keys = ['md'] for instance
var pickFileValues = function(keys, obj) {
  return R.values(R.pick(keys, obj));
};

var curriedPickFileValues = R.curry(pickFileValues);

// example usage: getValues('pages', ['md'])
var getValues = function(fileType, keys) {
  if (keys.constructor !== Array) {
    console.log('Parameter keys for getValues must be an Array');
    return [];
  }
  return R.map(curriedPickFileValues(keys), content[fileType]);
};

// example usage: getPaths('pages', 'md')
var getPaths = function(fileType, key) {
  var filenames = R.flatten(getValues(fileType, [key]));
  var resolvePath = function(filename) {
    var fileTypeDirectory = 'markdown';
    switch(fileType) {
      case 'html':
        fileTypeDirectory = 'html';
        break;
      default:
        fileTypeDirectory = 'markdown';
    }
    return path.resolve(__dirname, fileTypeDirectory, fileType, filename);
  };
  return R.map(resolvePath, filenames);
};

var fileExist = function(filePath) {
  var exists = isThere.sync(filePath);
  return exists ? true : false;
};

var fileTypes = R.keys(content); // ['pages', 'posts']
var curriedGetPaths = R.curry(getPaths); 
var curriedF = R.map(curriedGetPaths, fileTypes);
var derive = function(f) {
  return f('md');
};
var contentPaths = R.flatten(R.map(derive, curriedF));
var contentPathsValid = R.filter(fileExist, contentPaths);
var contentPathsInvalid = R.difference(contentPaths, contentPathsValid);

// now, we are ready write to html for all contentPathsValid
module.exports = {
  contentPathsValid: contentPathsValid,
  contentPathsInvalid: contentPathsInvalid 
};
