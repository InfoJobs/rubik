function sticky() {
  var scrollY = window.pageYOffset;
  var headerHeight = document.querySelector('.global-nav').getBoundingClientRect().height;
  var slotBanner = document.querySelector('.wrapper-slotbanner .slotbanner-fixed');

  if(slotBanner) {
    slotBanner.style.top = scrollY < headerHeight ? (headerHeight - scrollY) + 'px' : 0
  }
}

window.addEventListener("load", sticky);
window.addEventListener("scroll", sticky);
