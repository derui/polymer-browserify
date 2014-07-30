
Polymer('x-todo-item', {
  publish : {
    title : ''
  },

  deleterClickAction : function () {
    this.fire('x-todo-item-delete');
  },

  delete : function () {
    this.deleterClickAction();
  }
});
