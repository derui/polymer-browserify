var _ = require('lodash');

Polymer('x-test', {
  publish : {
    items : []
  },
  onClick : function () {
    var uniq = _.uniq('item-');

    this.items.push(uniq);
  }
});
