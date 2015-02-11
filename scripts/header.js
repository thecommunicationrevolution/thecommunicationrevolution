var header,
    element,
    status;

header = function() {
  element = document.getElementById('header');

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
