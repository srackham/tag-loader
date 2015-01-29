var loaderUtils = require('loader-utils');
var compile = require('riot/compiler').compile;

module.exports = function(source) {
  var query = loaderUtils.parseQuery(this.query);
  return compile(source, query);
};