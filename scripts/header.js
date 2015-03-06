var scroll = require('./scroll'),
    header,
    video,
    menuButton,
    scrollButton,
    status,
    links,
    timer;

function scrollToSection(e) {
  e.preventDefault();
  var section = document.getElementById(e.currentTarget.getAttribute('href')),
      elementScrollTop = section.offsetTop;

  header.classList.remove('nav-small--open');

  if (section.id !== 'landing')
    elementScrollTop -= 65;

  scroll(elementScrollTop, {
    ease: 'inOutCirc',
    duration: 1000
  });
}

function toggleMenu(e) {
  e.preventDefault();

  if (header.classList.contains('nav-small--open'))
    return header.classList.remove('nav-small--open');
  header.classList.add('nav-small--open');
}

module.exports = function() {
  wrapper = document.getElementById('wrapper');
  video = document.getElementById('video');
  header = document.getElementById('header');
  links = document.querySelectorAll('header nav .nav-list__item a, .nav-small-logo');
  scrollButton = document.getElementById('start-scroll');
  menuButton = document.getElementsByClassName('nav-small-button')[0];

    for (var i = links.length - 1; i >= 0; i--) {
    links[i].addEventListener('click', scrollToSection);
  };

  menuButton.addEventListener('click', toggleMenu);
  scrollButton.addEventListener('click', scrollToSection);

  window.onscroll = function(e) {
    if (!status && window.scrollY > 25) {
      header.classList.add('toggle');
      video.pause();
      status = true;
    } else if (status && window.scrollY < 25) {
      header.classList.remove('toggle');
      video.play();
      status = false;
    }
  }
};
