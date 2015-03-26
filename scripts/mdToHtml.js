'use strict';

var fs = require('fs');
var path = require('path');
var marked = require('marked');
var R = require('ramda');
var mdDir = path.resolve(__dirname, '..', 'markdown');
var htmlDir = path.resolve(__dirname, '..', 'html');

var setFilePath = function(filename) {
 return path.resolve(mdDir, filename);
};

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
      writeHtml(path.resolve(htmlDir, filename), marked(data));
    } else {
      console.log(pathToFile + ' is not a markdown file. Not processed.');
    }
  });
};

// read markdown files in markdown directory
// and apply readMarkdown method on each file
// writing out as html into html directory
fs.readdir(mdDir, function(err, files) {
  var filesArray = R.values(files);  
  var filesArrayWithPath = R.map(setFilePath, filesArray);
  R.map(readMarkdown, filesArrayWithPath);
});
