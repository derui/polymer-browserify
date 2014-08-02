document.addEventListener('polymer-ready', function() {
  describe('x-todo-item', function() {
    it('クリックで削除される', function () {
      var item = document.querySelector('#item1');
      expect(item.model.title).to.be.equal('title');

      item.addEventListener('x-todo-item-delete', function () {
        done();
      });
      item.delete();
    });
  });

  mocha.run();
});
