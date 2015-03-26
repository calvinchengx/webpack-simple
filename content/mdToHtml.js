'use strict';

var fs = require('fs');
var path = require('path');
var marked = require('marked');
var R = require('ramda');
var mdDir = path.resolve(__dirname, 'markdown');
var htmlDir = path.resolve(__dirname, 'html');
var content = require('./index');

var getFilePaths = function(content) {
  var fileTypes = R.keys(content);  // ['pages', 'posts']
  var filePaths = [];
  for (var i=0; i < fileTypes.length; i++) {
    var contentByType = content[fileTypes[i]];
    //console.log(contentByType);
    for (var j=0; j < contentByType.length; j++) {
      var fileType = fileTypes[i];
      var name = contentByType[j].md;
      filePaths.push(path.resolve(mdDir, fileType, name));
    }
  }
  return filePaths;
};

var pathsFromContent = getFilePaths(content);

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

// check each path in pathsFromContent, if the file actually
// exists on our filesystem, we will read and write it out as html.
R.map(readMarkdown, pathsFromContent);
