
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

      var widthParent = stickyElement.parent().width();
      stickyElement.css('max-width', widthParent);

      if ($(window).scrollTop() > stickyElementOffset) {

          stickyElement.addClass('sticky');
      }
      else {
          stickyElement.removeClass('sticky');
      }
    }

    if(window.innerWidth > 767 && stickyElementDesktop.offset() != null) {

      var widthParent = stickyElementDesktop.parent().width();
      stickyElementDesktop.css('max-width', widthParent);

      if ($(window).scrollTop() > stickyElementOffset) {

          stickyElementDesktop.addClass('sticky');
      }
      else {
          stickyElementDesktop.removeClass('sticky');
      }

    }
    if (window.innerWidth <= 767 && stickyElementDesktop.offset() != null) {
      stickyElementDesktop.css('max-width', 'none');
    }

    function addMargin(e) {

      if(e.parentNode.classList.contains('container-expanded')) {
        console.log('hola');
      }
    }


  }


  window.addEventListener('load', offsetElement);
  window.addEventListener('resize', offsetElement);

  window.addEventListener('scroll', sticky);
  window.addEventListener('load', sticky);
  window.addEventListener('resize', sticky);


})();
