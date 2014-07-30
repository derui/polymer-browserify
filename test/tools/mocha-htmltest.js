(function () {
  var base = '';

  mocha.htmlbase = function(htmlbase) {
    base = htmlbase;
  };

  var next, iframe;

  var listener = function(event) {
    if (event.data === 'ok') {
      next();
    } else if (event.data && event.data.error) {
      throw new Error(event.data.error);
    }
  };

  function htmlSetup() {
    window.addEventListener("message", listener);
    iframe = document.createElement('iframe');
    iframe.style.cssText = 'position: absolute; left: -9000em; width:768px; height: 1024px';
    document.body.appendChild(iframe);
  }

  function htmlTeardown() {
    window.removeEventListener('message', listener);
    document.body.removeChild(iframe);
  }

  function htmlTest(src) {
    test(src, function(done) {
      next = done;
      var url = base + src;
      var delimiter = url.indexOf('?') < 0 ? '?' : '&';
      var docSearch = location.search.slice(1);
      iframe.src = url + delimiter + Math.random() + '&' + docSearch;
    });
  };

  function htmlSuite(inName, inFn) {
    suite(inName, function() {
      setup(htmlSetup);
      teardown(htmlTeardown);
      inFn();
    });
  };

  window.htmlTest = htmlTest;
  window.htmlSuite = htmlSuite;
})();
