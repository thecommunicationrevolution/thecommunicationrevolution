var main,
    styles = require('./styles'),
    header = require('./header');

main = function() {
  styles();
  header();
};

document.addEventListener('DOMContentLoaded', main);
