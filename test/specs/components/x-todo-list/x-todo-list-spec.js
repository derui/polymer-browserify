document.addEventListener('polymer-ready', function() {
  describe('x-todo-list', function() {
    it('オブジェクトに同期して追加される', function () {
      var list = document.querySelector('#list');
      expect(list.items).to.have.length(0);

      list.add({id : 1, title : 'test'});
      expect(list.items).to.have.length(1);
      done();
    });

    it('選択したアイテムが削除される', function () {
      var list = document.querySelector('#list2');
      list.add({id : 1, title : 'test'});

      list.delete(1);
      expect(list.items).to.have.length(0);
      done();
    });
  });

  mocha.run();
});
