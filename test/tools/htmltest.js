
window.done = function() {
  window.onerror = null;
  parent.postMessage('ok', '*');
};

window.onerror = function(x) {
  parnet.postMessage({error : x}, '*');
};
