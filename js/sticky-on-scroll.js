
(function(){
  var stickyElement = $('.js-sticky');
  var stickyElementDesktop = $('.js-sticky-desktop');
  var stickyElementOffset;
  var offsetFooter;

  window.onload = function() {
    stickyElement = $('.js-sticky');
    stickyElementDesktop = $('.js-sticky-desktop');
  }

  function offsetElement() {

    returnOffset(stickyElement);
    returnOffset(stickyElementDesktop);

    function returnOffset(e) {
      if(e.length) {
        e.removeClass('sticky');
        stickyElementOffset = e.offset().top;
        return stickyElementOffset;
      }
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

    if(window.innerWidth > 767 && stickyElementDesktop.length) {

      var widthParent = stickyElementDesktop.parent().width();
      stickyElementDesktop.css('max-width', widthParent);

      if ($(window).scrollTop() >= stickyElementOffset) {

          stickyElementDesktop.addClass('sticky');
      }
      else {
          stickyElementDesktop.removeClass('sticky');
      }

    }
    if (window.innerWidth <= 767 && stickyElementDesktop.length) {
      stickyElementDesktop.css('max-width', 'none');
    }


  }


  window.addEventListener('load', offsetElement);
  window.addEventListener('resize', offsetElement);

  window.addEventListener('scroll', sticky);
  window.addEventListener('load', sticky);
  window.addEventListener('resize', sticky);


})();
