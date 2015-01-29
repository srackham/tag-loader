//var loaderUtils = require('loader-utils');
var compile = require('riot/compiler/compiler').compile;

module.exports = function(source) {
  return compile(source);
};