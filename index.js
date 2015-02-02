var loaderUtils = require('loader-utils');
var riot = require('riot');

module.exports = function(source) {
  var query = loaderUtils.parseQuery(this.query);
  return riot.compile(source, query);
};
