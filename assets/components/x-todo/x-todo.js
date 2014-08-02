var _ = require('lodash');
var model = require('app/models/model');

Polymer('x-todo', {

  created : function() {
    this.todoList = [];
  },

  ready: function() {
    this.$.title = this.shadowRoot.querySelector('.todo-title');
    this.$.list = this.shadowRoot.querySelector('.todo-list');
  },
  
  onClickAppender : function () {
    this.$.list.add(model(
      this.$.title.value
    ));

    this.$.title.value = '';
  }
});
