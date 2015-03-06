var babel = require('./babel'),
    link,
    loaded,
    styles;

loaded = function() {
  link.removeAttribute('media');
};

styles = function() {
  var path = 'build/styles/';

  if (!babel.isPT) {
    path = '../' + path;
  }

  link = document.createElement('link');

  link.addEventListener('load', loaded);

  link.href = path + 'minor.css';
  link.media = 'only x';
  link.rel = 'stylesheet';

  document.head.appendChild(link);
};

module.exports = styles;
