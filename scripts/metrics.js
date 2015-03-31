module.exports = (function() {
  return {
    isSmallScreen: function() {
      return document.body.clientWidth < 737;
    }
  };
})();
