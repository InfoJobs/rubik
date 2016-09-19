
(function(){
  var stickyElement = $('.js-sticky');
  var stickyElementDesktop = $('.js-sticky-desktop');
  var stickyElementOffset;


  window.onload = function() {
    stickyElement = $('.js-sticky');
    stickyElementDesktop = $('.js-sticky-desktop');
  }

  function offsetElement() {

    returnOffset(stickyElement);
    returnOffset(stickyElementDesktop);

    function returnOffset(e) {
      if(e.offset() != null) {
        e.removeClass('sticky');
        stickyElementOffset = e.offset().top;
        return stickyElementOffset;
      }
    }

  }

  function sticky() {

    if(stickyElement.offset() != null) {
      makeMeSticky(stickyElement);
    }

    if(window.innerWidth > 767 && stickyElementDesktop.offset() != null) {
      makeMeSticky(stickyElementDesktop);
    }

    if (window.innerWidth <= 767 && stickyElementDesktop.offset() != null) {
      stickyElementDesktop.css('max-width', 'none');
    }

    function makeMeSticky(el) {
      var widthParent = el.parent().width();
      el.css('max-width', widthParent);

      if ($(window).scrollTop() > stickyElementOffset) {
          el.addClass('sticky');
      } else {
        el.removeClass('sticky');
      }

      if(el.hasClass('sticky') && el.parents().hasClass('container-expanded')) {
        el.css('margin-top', '10px');
      } else {
        el.css('margin-top', 'inherit');
      }

    }

  }

  window.addEventListener('load', offsetElement);
  window.addEventListener('resize', offsetElement);

  window.addEventListener('scroll', sticky);
  window.addEventListener('load', sticky);
  window.addEventListener('resize', sticky);

})();
