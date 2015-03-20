var bind,
    bindTriggers,
    boxes,
    cache,
    dialog,
    dialogClose,
    hide,
    manifest,
    open,
    show,
    triggers;

bind = function() {
  dialogClose.addEventListener('click', hide);
  triggers.forEach(bindTriggers);
};

bindTriggers = function(trigger) {
  trigger.addEventListener('click', open);
};

cache = function() {
  boxes = {
    specification: document.querySelector('.manifest-specification'),
    sxsw: document.querySelector('.manifest-sxsw'),
    terms: document.querySelector('.manifest-terms')
  };

  dialog = document.querySelector('.manifest');
  dialogClose = document.querySelector('.manifest-close');
  triggers = [ ].slice.call(document.querySelectorAll('[data-manifest-id]'));
};

hide = function() {
  var id;

  for (id in boxes) {
    if (boxes.hasOwnProperty(id)) {
      boxes[id].classList.remove('manifest-active');
    }
  }

  dialog.classList.add('manifest-hidden');
  document.body.classList.remove('overlay');
};

manifest = function() {
  cache();
  bind();
};

open = function(event) {
  var trigger = event.currentTarget,
      id = trigger.getAttribute('data-manifest-id'),
      theme = trigger.getAttribute('data-manifest-theme') || 'dark';

  if (!id.length) {
    throw 'manifest called but no id was given';
  }

  show(id, theme);
};

show = function(id, theme) {
  document.body.classList.add('overlay');
  boxes[id].classList.add('manifest-active');
  dialog.classList.add('manifest-' + theme);
  dialog.classList.remove('manifest-hidden');
};

manifest.hide = hide;
manifest.show = show;

module.exports = manifest;
