'use strict';

// ## Module Dependencies
var _ = require('lodash');

var Company = function (_node) {
  _.extend(this, _node.data);
};

module.exports = Company;