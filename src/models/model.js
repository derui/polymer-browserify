var _ = require('lodash');

module.exports = function(title) {
  return {
    id : _.uniqueId(),
    title : title
  };
};
