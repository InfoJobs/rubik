
(function(){
  var stickyElement;
  var stickyElementOffset;
  var stickyElementDesktop;

  window.onload = function() {
    stickyElement = $('.js-sticky');
    stickyElementDesktop = $('.js-sticky-desktop');
  }

  function offsetElement() {

    if(stickyElement.length) {
      stickyElement.removeClass('sticky');
      stickyElementOffset = stickyElement.offset().top;
      return stickyElementOffset;
    }

    if(stickyElementDesktop.length) {
      stickyElement.removeClass('sticky');
      stickyElementOffset = stickyElementDesktop.offset().top;
      return stickyElementOffset;
    }

  }

  function sticky() {
    if(stickyElement.length) {

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
  window.addEventListener('resize', offsetElement);

  window.addEventListener('scroll', sticky);
  window.addEventListener('load', sticky);
  window.addEventListener('resize', sticky);


})();
