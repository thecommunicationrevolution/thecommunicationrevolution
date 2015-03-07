var babel = (function() {
  var isEN = window.location.pathname.indexOf('/en/') != -1;

  return {
    isEN: isEN,
    isPT: !isEN,
    tag: isEN ? 'en' : 'pt'
  };
})();

module.exports = babel;
