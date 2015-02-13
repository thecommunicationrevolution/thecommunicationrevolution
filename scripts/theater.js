var bind,
    cache,
    dialog,
    header,
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
  header = document.querySelector('#header');
  dialog = document.querySelector('#theater');
  player = document.querySelector('#theater-player');
  triggers = [ ].slice.call(document.querySelectorAll('[data-theater-id]'));

  triggers.forEach(bind);
};

hide = function() {
  dialog.addEventListener('transitionend', hidden);
  dialog.classList.remove('theater-show');
  dialog.classList.add('theater-hide');
};

hidden = function() {
  dialog.removeEventListener('transitionend', hidden);
  dialog.classList.remove('theater-hide');

  if (document.body.scrollTop < 25)
    header.classList.remove('toggle');

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

  dialog.addEventListener('transitionend', shown);
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
