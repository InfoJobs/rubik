
(function(){
  var wrapper;
  var stickyContent;
  var stickySidebar;
  var posStickyContent;
  var posStickySidebar;
  var scrollY;
  var desktop;

  function stickyOnscroll() {
    desktop = window.innerWidth > 768;
    wrapper = document.querySelector('.wrapper');
    stickyContent = document.querySelector('.js-sticky-content');
    stickySidebar = document.querySelector('.js-sticky-sidebar');
    scrollY = window.pageYOffset;

    if(stickyContent) {
      posStickyContent = stickyContent.getBoundingClientRect().top + scrollY ;
      setWidth(stickyContent);
    }

    if(stickySidebar && desktop) {
      posStickySidebar = stickySidebar.getBoundingClientRect().top + scrollY;
      setWidth(stickySidebar);
    }

    toggleSticky();

    window.addEventListener('scroll', function() {
      toggleSticky();
    });

  }

  function toggleSticky() {
    scrollY = window.pageYOffset;

    if(stickyContent) {
      toggleClass(posStickyContent , stickyContent);

      if(stickyContent.classList.contains("sticky")) {
        wrapper.style.marginTop = stickyContent.offsetHeight + parseInt(parentMarginContainer().marginTop, 10) + 'px';
      } else {
        wrapper.removeAttribute("style");
      }
    }
    if(stickySidebar && desktop) {
      toggleClass(posStickySidebar , stickySidebar);
    }

    if(stickyContent.classList.contains("sticky") && stickySidebar) {
      posStickySidebar = posStickySidebar - stickyContent.offsetHeight;
      stickySidebar.style.top = stickyContent.offsetHeight + parseInt(parentMarginContainer().marginTop, 10) + 'px';
    } else {
        stickySidebar.style.top = 0;
        stickySidebar.classList.remove("sticky");
    }

  }

  function toggleClass(posSticky , stickyElement) {
    posSticky < scrollY ? stickyElement.classList.add("sticky") : stickyElement.classList.remove("sticky");
  }

  function setWidth(stickyElement) {
    var widthSticky = stickyElement.parentNode.clientWidth;
    stickyElement.style.maxWidth = widthSticky + 'px';
  }

  function parentMarginContainer() {
    var parentContainer =stickyContent.parentNode;
    var styleMarginTop = parentContainer.currentStyle || window.getComputedStyle(parentContainer);
    return styleMarginTop;
  }

  window.addEventListener('load', function() {
      stickyOnscroll();
  });

  window.addEventListener('resize', function() {
    stickyOnscroll();
    setWidth(stickySidebar);
    setWidth(stickyContent);


  });

})();
