var scroll = require('./scroll');
var header,
    scrollButton,
    element,
    status,
    links,
    timer;

function scrollToSection(e) {
  e.preventDefault();
  var section = document.getElementById(e.currentTarget.getAttribute('href')),
      elementScrollTop = section.offsetTop;

  if (section.id !== 'landing')
    elementScrollTop -= 65;

  scroll(elementScrollTop, {
    ease: 'inOutCirc',
    duration: 1000
  });
}

header = function() {
  element = document.getElementById('header');
  links = document.getElementsByTagName('a');
  scrollButton = document.getElementById('start-scroll');
  
  for (var i = links.length - 1; i >= 0; i--) {
    links[i].addEventListener('click', scrollToSection);
  };

  scrollButton.addEventListener('click', scrollToSection);

  window.onscroll = function(e) {
    if (!status && document.body.scrollTop > 25) {
      element.classList.add('toggle');
      status = true;
    } else if (status && document.body.scrollTop < 25) {
      element.classList.remove('toggle');
      status = false;
    }
  }
};

module.exports = header;
