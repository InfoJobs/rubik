
(function(){
  var stickyElement = document.querySelectorAll('.js-sticky');
  var stickyElementDesktop = document.querySelectorAll('.js-sticky-desktop');
  var stickyElementOffset =[];
  var totalViewport;
  var scrollY;
  var heightSide;
  var elStickyBottomMediumDevice = document.querySelector('.sticky-bottom-medium-device');
  var elScrollable = document.querySelectorAll('.js-scrollable');
  var heightElScrollable;
  var aStickyElements = [];

  window.onload = function() {
    stickyElement = document.querySelectorAll('.js-sticky');
    stickyElementDesktop = document.querySelectorAll('.js-sticky-desktop');
    elScrollable = document.querySelectorAll('.js-scrollable');
  };

  function offsetElement() {
    aStickyElements = [];

    returnOffset(stickyElement);
    returnOffset(stickyElementDesktop);

    function returnOffset(e) {
      if(e !== null) {
        var topPos;

        for(var i = 0; i < e.length ; i++ ) {
          e[i].classList.remove('sticky');
          aStickyElements.push(e[i]);
        }

        for(var i = 0; i < e.length ; i++ ) {
          if (stickyElementOffset[i] <= 0) {
            stickyElementOffset[i] = window.pageYOffset + e[i].getBoundingClientRect().top;
          } else {
            stickyElementOffset[i] = e[i].getBoundingClientRect().top;
          }
        }

        for(var i = 0; i < aStickyElements.length-1 ; i++ ) {
          topPos = aStickyElements[i].clientHeight + parseInt(styleContainer().marginTop, 10);
          aStickyElements[i+1].style.top = topPos + 'px';

          return stickyElementOffset;

        }
      }
    }
  }

  function sticky() {

    if(stickyElement !== null) {
      makeMeSticky(stickyElement);
    }

    if(window.innerWidth > 768 && stickyElementDesktop !== null) {
      makeMeSticky(stickyElementDesktop);
    }

    if (window.innerWidth <= 768 && stickyElementDesktop !== null) {
      [].forEach.call( stickyElementDesktop, function( target ){
        target.style.maxWidth = 'none';
      });
    }

    function makeMeSticky(el) {
      for(var i = 0; i < el.length ; i++ ) {
        scrollY = window.pageYOffset;
        var widthParent = el[i].parentElement.clientWidth;
        el[i].style.maxWidth = widthParent + 'px';
        if (aStickyElements[0] && scrollY > aStickyElements[0].offsetTop) {
          el[i].classList.add('sticky');
          stopSticker();
        } else {
            el[i].classList.remove('sticky');
        }
      }

    }
  }

  function scrollSideBar() {
    [].forEach.call( elScrollable, function( target ){
      target.style.height = 'auto';
      for(var i = 0; i < stickyElementDesktop.length ; i++ ) {
        heightSide = stickyElementDesktop[i].clientHeight;
        topSide = stickyElementDesktop[i].getBoundingClientRect().y;
      }

      heightElScrollable = target.clientHeight;
      if(stickyElementDesktop.length < 0) {
        totalViewport = window.innerHeight - topSide;
      } else {
        totalViewport = window.innerHeight;
      }

      if (heightSide > totalViewport && window.innerWidth > 768) {
        target.style.height = totalViewport - (heightSide - heightElScrollable) - parseInt(styleContainer().marginTop, 10) + 'px';
        target.style.overflowY = 'auto';
      }
    });
  }

  function stopSticker() {
	  if(stickyElementDesktop.length) {
	    var elScrollableParent = document.querySelector('.row-faux').getBoundingClientRect().height;
	    var elScrollable = document.querySelector('.js-sticky-desktop');
	    var elScrollableHeight = elScrollable.getBoundingClientRect().height;

	    if(window.innerWidth > 768) {
	      if(pageYOffset - (elScrollableParent - elScrollableHeight) >= 0) {
	        elScrollable.classList.remove('sticky');
	        elScrollable.style.marginTop = elScrollableParent - elScrollableHeight + 'px';
	      } else {
	        elScrollable.classList.add('sticky');
	        elScrollable.style.marginTop = 'inherit';
	      }
	    } else {
	      elScrollable.style.marginTop = 'inherit';
	    }

	  }
  }

  function styleContainer() {
    var elContainer = document.querySelector('.container-expanded');
    if(elContainer !== null) {
      var style = elContainer.currentStyle || window.getComputedStyle(elContainer);
      return style;
    }
  }

  function stickyBottom() {
    if(elStickyBottomMediumDevice !==null) {

      if(window.innerWidth <= 767 ) {
        document.body.style.marginBottom = elStickyBottomMediumDevice.offsetHeight + 'px';
      } else {
        document.body.style.marginBottom = 'inherit';
      }

    }
  }

  window.addEventListener("load", function() {
    offsetElement();
    sticky();
    scrollSideBar();
    stickyBottom();
  });

  window.addEventListener("resize", function() {
    offsetElement();
    sticky();
    scrollSideBar();
    stickyBottom();
  });

  window.addEventListener("scroll", function() {
    sticky();
    scrollSideBar();
  });

})();
