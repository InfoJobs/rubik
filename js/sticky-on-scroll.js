
(function(){
  var stickyElement = $('.js-sticky');
  var stickyElementOffset;


  function offsetElement() {
    if(stickyElement) {
      stickyElementOffset = stickyElement.offset().top;
      return stickyElement;
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
  window.addEventListener('resize', offsetElement);
  window.addEventListener('scroll', sticky);
  window.addEventListener('load', sticky);
  window.addEventListener('resize', sticky);


})();
