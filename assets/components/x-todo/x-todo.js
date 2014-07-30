var _ = require('lodash');

Polymer('x-todo', {

  created : function() {
    this.todoList = [];
    
    this.$.title = this.shadowRoot.querySelector('.todo-title');
    this.$.list = this.shadowRoot.querySelector('.todo-list');
  },
  
  onClickAppender : function () {
    this.$.list.append({
      title : this.$.title.value
    });

    this.$.title.value = '';
  }
});
