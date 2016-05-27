
(function(){
  var stickyElement;
  var stickyElementOffset;

  window.onload = function() {
    stickyElement = $('.js-sticky');

  }

  function offsetElement() {
    if(stickyElement) {
      stickyElementOffset = stickyElement.offset().top;
      return stickyElementOffset;
    }

  }
  function sticky() {
    if(stickyElement) {

      var widthParent = stickyElement.parent().width();
      stickyElement.css('max-width', widthParent);

      if ($(window).scrollTop() >= stickyElementOffset) {
          stickyElement.addClass('sticky');
      }
      else {
          stickyElement.removeClass('sticky');
      }
    }

  }

  window.addEventListener('load', offsetElement);
  window.addEventListener('scroll', sticky);
  window.addEventListener('load', sticky);
  window.addEventListener('resize', sticky);


})();
