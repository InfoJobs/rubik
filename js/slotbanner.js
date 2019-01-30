function sticky() {
  var scrollY = window.pageYOffset;
  var headerHeight = document.querySelector('.global-nav').getBoundingClientRect().height;
  var slotBanner = document.querySelector('.wrapper-slotbanner .slotbanner-fixed');

  if(scrollY < headerHeight) {
      slotBanner.style.top = (headerHeight - scrollY) + 'px';
  } else {
    slotBanner.style.top = 0;
  }
}

window.addEventListener("load", sticky);
window.addEventListener("scroll", sticky);
