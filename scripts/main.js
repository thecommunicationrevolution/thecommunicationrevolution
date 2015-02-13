var main,
    header = require('./header'),
    styles = require('./styles'),
    theater = require('./theater');

main = function() {
  styles();
  header();
  theater();
};

document.addEventListener('DOMContentLoaded', main);
