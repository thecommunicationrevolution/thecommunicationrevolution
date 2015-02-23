var main,
    header = require('./header'),
    manifest = require('./manifest'),
    premises = require('./premises'),
    styles = require('./styles'),
    theater = require('./theater');

main = function() {
  styles();
  header();
  manifest();
  theater();
  premises();
};

document.addEventListener('DOMContentLoaded', main);
