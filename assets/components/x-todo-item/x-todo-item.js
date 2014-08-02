
Polymer('x-todo-item', {
  created : function() {
    this.model = {};
  },

  deleterClickAction : function () {
    this.fire('x-todo-item-delete', this.model);
    this.parent.removeChild(this);
  },

  delete : function () {
    this.deleterClickAction();
  }
});
