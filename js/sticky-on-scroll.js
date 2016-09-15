
(function(){
  var stickyElement = $('.js-sticky');
  var stickyElementDesktop = $('.js-sticky-desktop');
  var stickyElementOffset;
  //var offsetFooter;
  var totalViewport;
  var scrollY;
  var heightSide;

  window.onload = function() {
    stickyElement = $('.js-sticky');
    stickyElementDesktop = $('.js-sticky-desktop');
  }

  function offsetElement() {

    //offsetFooter = $('.footer').offset().top;
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
    scrollY = $(window).scrollTop();

    if(stickyElement.length) {

      var widthParent = stickyElement.parent().width();
      stickyElement.css('max-width', widthParent);

      if (scrollY >= stickyElementOffset) {

          stickyElement.addClass('sticky');
      }
      else {
          stickyElement.removeClass('sticky');
      }
    }

    if(window.innerWidth > 767 && stickyElementDesktop.length) {

      var widthParent = stickyElementDesktop.parent().width();
      stickyElementDesktop.css('max-width', widthParent);

      if (scrollY >= stickyElementOffset) {

          stickyElementDesktop.addClass('sticky');
      }
      else {
          stickyElementDesktop.removeClass('sticky');
      }

    }
    if (window.innerWidth <= 767 && stickyElementDesktop.length) {
      stickyElementDesktop.css('max-width', 'none');
    }


    // elFooterScroll = offsetFooter - (totalViewport + scrollY);
    // console.log (elFooterScroll);
    //
    // if (elFooterScroll < 0 ) {
    //     elFooterScroll = elFooterScroll * -1;
    // }


  }

  function scrollSideBar() {
    stickyElementDesktop.css('height', 'auto');
    heightSide = stickyElementDesktop.height();
    totalViewport = window.innerHeight;

    if (heightSide > totalViewport) {
      stickyElementDesktop.css('height', totalViewport);
      stickyElementDesktop.css('overflow-y', 'auto');

    }

  }

  window.addEventListener('load', offsetElement);
  window.addEventListener('resize', offsetElement);

  window.addEventListener('scroll', sticky);
  window.addEventListener('load', sticky);
  window.addEventListener('resize', sticky);

  window.addEventListener('load', scrollSideBar);
  window.addEventListener('resize', scrollSideBar);



})();
