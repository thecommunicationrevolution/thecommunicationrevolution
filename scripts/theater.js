var bind,
    cache,
    dialog,
    header,
    wrapper,
    video,
    hide,
    hidden,
    open,
    player,
    reset,
    show,
    shown,
    theater,
    triggers,
    watch;

bind = function(trigger) {
  dialog.addEventListener('click', hide);
  trigger.addEventListener('click', open);
  window.addEventListener('keyup', watch);
};

cache = function() {
  wrapper = document.getElementById('wrapper');
  video  = document.getElementById('video');
  header = document.querySelector('#header');
  dialog = document.querySelector('#theater');
  player = document.querySelector('#theater-player');
  triggers = [].slice.call(document.querySelectorAll('[data-theater-id]'));

  triggers.forEach(bind);
};

hide = function() {
  dialog.addEventListener('transitionend', hidden);
  dialog.classList.remove('theater-show');
  dialog.classList.add('theater-hide');
};

hidden = function() {
  dialog.classList.remove('theater-hide');
  dialog.removeEventListener('transitionend', hidden);
  wrapper.classList.remove('theater--open');
  
  if (document.body.scrollTop < 25) {
    header.classList.remove('toggle');
    video.play();
  }

  reset();
};

open = function(event) {
  var trigger = event.currentTarget;
  if (!trigger.dataset.theaterId.length) {
    throw 'theater called but no video id was given';
  }

  show(trigger.dataset.theaterId);
};

reset = function() {
  player.removeAttribute('src');
};

show = function(id) {
  var source = '//player.vimeo.com/video/{{id}}?autoplay=1&badge=0&byline=0&portrait=0&title=0';

  player.setAttribute('src', source.replace('{{id}}', id));
  header.classList.add('toggle');
  video.pause();

  dialog.addEventListener('transitionend', shown);
  wrapper.classList.add('theater--open');
  dialog.classList.add('theater-show');
};

shown = function() {
  dialog.removeEventListener('transitionend', shown);
};

theater = function() {
  cache();
};

watch = function(event) {
  if (event.which === 27) {
    hide();
  }
};

theater.hide = hide;
theater.reset = reset;
theater.show = show;

module.exports = theater;
