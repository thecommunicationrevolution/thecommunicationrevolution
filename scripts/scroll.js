var raf = require('raf-component'),
    ease = require('ease-component');

var scroll = function(to, options) {
  var type = 'inOutSine',
      duration = 350,
      cancelled = false,
      start = +new Date,
      from = window.scrollY;

  options = options || {};
  type = options.ease || type;
  duration = options.duration || duration;

  function cancel() {
    cancelled = true;
    document.removeEventListener('mousewheel', cancel);
  }

  function update(timestamp) {
    var now = +new Date,
        time = Math.min(1, ((now - start) / duration)),
        eased = ease[type](time);

    window.scrollTo(0, (eased * (to - from)) + from);

    if (time < 1)
      return raf(update);
    else
      cancel();
  }

  document.addEventListener('mousewheel', cancel);
  raf(update);
}

module.exports = scroll;