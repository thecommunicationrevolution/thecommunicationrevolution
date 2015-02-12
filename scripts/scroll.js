var raf = require('raf-component')
var ease = require('ease-component')
var listener = require('eventlistener')

var scroll = function(to, options) {
  var type = 'inOutSine'
  var duration = 350

  options = options || {};
  type = options.ease || type;

  var start = +new Date
  var from = window.scrollY;

  var cancelled = false
  var cancel = function() {
    cancelled = true
    listener.remove(document, 'mousewheel', cancel)
  }

  listener.add(document, 'mousewheel', cancel)

  var scroll = function(timestamp) {
    var now = +new Date
    var time = Math.min(1, ((now - start) / duration))
    var eased = ease[type](time)

    window.scrollTo(0, (eased * (to - from)) + from);

    if (time < 1) {
      return raf(scroll)
    }
    
    cancel()
  }

  raf(scroll)
}

module.exports = scroll;