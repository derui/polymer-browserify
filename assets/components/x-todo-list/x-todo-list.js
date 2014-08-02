Polymer('x-todo-list', {
  created : function () {
    this.items = [];
  },

  add : function(item) {
    this.items.push(item);
  },

  deleteAction : function(e) {
    this.delete(e.detail.id);
  },

  delete : function (id) {
    this.items = this.items.filter(function (m) {
      return m.id !== id;
    });
  }
});
