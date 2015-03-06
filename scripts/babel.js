var babel = (function() {
  var isEN = window.location.pathname.indexOf('/en/') != -1,
      isPT = !isEN;

  return {
    isEN: isEN,
    isPT: isPT
  };
})();

module.exports = babel;
