var link,
    loaded,
    styles;

loaded = function() {
  link.removeAttribute('media');
};

styles = function() {
  link = document.createElement('link');

  link.addEventListener('load', loaded);

  link.href = 'build/styles/minor.css';
  link.media = 'only x';
  link.rel = 'stylesheet';

  document.head.appendChild(link);
};

module.exports = styles;
