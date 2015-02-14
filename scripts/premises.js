var bind,
    bindTriggers,
    cache,
    load,
    open,
    premises,
    show,
    transition,
    triggers,
    user = 31845909;

bind = function() {
  triggers.forEach(bindTriggers);
};

bindTriggers = function(trigger) {
  trigger.addEventListener('click', open);
};

cache = function() {
  triggers = [ ].slice.call(document.querySelectorAll('[data-portfolio-id]'));
};

load = function(id) {
  var api = 'https://api.vimeo.com/users/{{user}}/portfolios/{{portfolio}}',
      xhr = new XMLHttpRequest();
};

open = function(event) {
  var trigger = event.currentTarget,
      id = trigger.dataset.portfolioId;

  if (!id.length) {
    throw 'premise called but no portfolio id was given';
  }

  load(id);
  show(trigger, id);
};

premises = function() {
  cache();
  bind();
};

show = function(trigger, id) {
  var boundingClientRect = trigger.getBoundingClientRect();

  trigger.classList.add('premises-freeze');

  trigger.style.top = boundingClientRect.top + 'px';
  trigger.style.left = boundingClientRect.left + 'px';
  trigger.style.width = trigger.offsetWidth + 'px';
  trigger.style.height = trigger.offsetHeight + 'px';

  window.setTimeout(transition, 1000 / 60 >> 0, trigger, id);
};

transition = function(trigger, id) {
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  trigger.classList.add('premises-transition');

  trigger.style.top = '65px';
  trigger.style.left = 0;
  trigger.style.width = width + 'px';
  trigger.style.height = height + 'px';
};

module.exports = premises;
