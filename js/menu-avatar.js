(function() {

  function profileToggle() {
    var eBpHeader = 945;
    var eClickItem = document.querySelectorAll('.js-menu-avatar');
    var eDivToggle = document.querySelector('.js-dropdown-layer');

    if (eClickItem !== null && 	window.innerWidth > eBpHeader) {
      [].forEach.call( eClickItem, function(target){
        target.onclick = toggleMenu;
      });

      document.querySelector('html').onclick = function() {
        if (eDivToggle.classList.contains('open-menu')) {
          toggleMenu();
        }
      };

      document.onkeydown = function(evt) {
          evt = evt || window.event;
          if (evt.keyCode == 27 && eDivToggle.classList.contains('open-menu')) {
            toggleMenu();
          }
      };

      function toggleMenu() {
        eDivToggle.classList.toggle('open-menu');
        event.stopPropagation();
      };

    }
  }

  window.addEventListener('load', profileToggle);
  window.addEventListener('resize', profileToggle);

}());
