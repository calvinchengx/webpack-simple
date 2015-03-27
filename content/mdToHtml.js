'use strict';

var fs = require('fs');
var path = require('path');
var marked = require('marked');
var R = require('ramda');
var htmlDir = path.resolve(__dirname, 'html');
var contentUtils = require('./utils');

var writeHtml = function (pathToFile, markedData) {
  fs.writeFile(pathToFile, markedData, function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

var readMarkdown = function (pathToFile) {
  fs.readFile(pathToFile, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    if (path.extname(pathToFile) === '.md') {
      // rename the .md file as .html and write it out 
      // into the html directory
      var filename = path.basename(pathToFile, path.extname(pathToFile)) + '.html';
      var fileType = path.dirname(pathToFile).split(path.sep).pop();
      var pathToWriteFile = path.resolve(htmlDir, fileType, filename);
      writeHtml(pathToWriteFile, marked(data));
    } else {
      console.log(pathToFile + ' is not a markdown file. Not processed.');
    }
  });
};

console.log('Valid content:');
console.log(contentUtils.contentPathsValid);
console.log('Invalid content:');
console.log(contentUtils.contentPathsInvalid);
// read each valid content path and implicitly write into the corresponding html directory
R.map(readMarkdown, contentUtils.contentPathsValid);
