var loaderUtils = require('loader-utils');
var compile = require('riot/compiler/compiler').compile;

module.exports = function(source) {
  var query = loaderUtils.parseQuery(this.query);
  // TODO: Process query parameters.
  return compile(source);
};