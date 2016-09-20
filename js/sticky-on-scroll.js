
(function(){
  var stickyElement = $('.js-sticky');
  var stickyElementDesktop = $('.js-sticky-desktop');
  var stickyElementOffset;
  var totalViewport;
  var scrollY;
  var heightSide;

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
        e.css('margin-top', 'inherit');

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

      scrollY = $(window).scrollTop();
      if(el.parents().hasClass('container-expanded')) {
        scrollY += parseInt(styleContainer().marginTop, 10);

      }

      var widthParent = el.parent().width();
      el.css('max-width', widthParent);

      if (scrollY > stickyElementOffset) {
        el.addClass('sticky');

        if(el.parents().hasClass('container-expanded')) {
          el.css('margin-top', styleContainer().marginTop);
        }

      } else {
        el.removeClass('sticky');

        if(el.parents().hasClass('container-expanded')) {
          el.css('margin-top', 'inherit');
        }

      }

    }

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

  function styleContainer() {
    var elContainer = document.querySelector('.container-expanded');
    if(elContainer !=null) {
    var style = elContainer.currentStyle || window.getComputedStyle(elContainer);
    return style
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

//https://github.com/InfoJobs/rubik/pull/68/files
