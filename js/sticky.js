
(function(){
  var stickyContent;
  var posStickyContent;
  var scrollY;

  function stickyOnscroll() {
    stickyContent = document.querySelector('.js-sticky');
    scrollY = window.pageYOffset;
    if(stickyContent) {
      posStickyContent = stickyContent.getBoundingClientRect().top + scrollY;
      setWidth();
      toggleSticky();

      window.addEventListener('scroll', function() {
        toggleSticky();
      });

      window.addEventListener('resize', function() {
        setWidth();
      });
    }
  }

  function toggleSticky() {
    scrollY = window.pageYOffset;
    posStickyContent < scrollY ? stickyContent.classList.add("sticky") : stickyContent.classList.remove("sticky");

    if(stickyContent.classList.contains("sticky")) {
      document.querySelector('.wrapper').style.marginTop =  stickyContent.offsetHeight + parseInt(parentMarginContainer().marginTop, 10) + 'px';
    } else {
      document.querySelector('.wrapper').removeAttribute("style");
    }
  }

  function setWidth() {
    var widthSticky = stickyContent.parentNode.clientWidth;
    stickyContent.style.maxWidth = widthSticky + 'px';
  }

  function parentMarginContainer() {
    var parentContainer = stickyContent.parentNode;
    var styleMarginTop = parentContainer.currentStyle || window.getComputedStyle(parentContainer);
    return styleMarginTop;
  }

  window.addEventListener('load', function() {
      stickyOnscroll();
  });

})();
