'use strict';

var babelJest = require('babel-jest');

module.exports = {
  process: function(src, filename) {

    // This is a hack to remove custom webpack loaders from test files.

    return babelJest
      .process(src, filename)
      .replace(/^require.*\.scss.*;$/gm, '');
  }
};
