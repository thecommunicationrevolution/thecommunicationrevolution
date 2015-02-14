var main,
    header = require('./header'),
    premises = require('./premises'),
    styles = require('./styles'),
    theater = require('./theater');

main = function() {
  styles();
  header();
  theater();
  premises();
};

document.addEventListener('DOMContentLoaded', main);
