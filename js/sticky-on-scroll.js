
(function(){
  var stickyElement = $('.js-sticky');
  var stickyElementOffset;

  //stickyElement.parent().width();

  function offsetElement() {

      stickyElementOffset = stickyElement.offset().top;
      return stickyElement;

  }

  function sticky() {

    if ($(window).scrollTop() >= stickyElementOffset) {
        stickyElement.addClass('sticky');
    }
    else {
        stickyElement.removeClass('sticky');
    }

  }

  window.addEventListener('load', offsetElement);
  window.addEventListener('resize', offsetElement);
  window.addEventListener('scroll', sticky);
  window.addEventListener('load', sticky);
  window.addEventListener('resize', sticky);


})();
