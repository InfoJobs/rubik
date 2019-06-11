(function() {

  function profileToggle() {
    var eBpHeader = 945;
    var eClickItem = document.querySelectorAll('.js-menu-avatar');
    var eDivToggle = document.querySelector('.js-dropdown-layer');

    if (eClickItem !== null && 	window.innerWidth > eBpHeader) {
      [].forEach.call( eClickItem, function(target){
        if (!eDivToggle.classList.contains('hide')) {
          eDivToggle.classList.add('hide');
        }

        target.onclick = toggleMenu;
      });

      document.querySelector('html').onclick = function() {
        if (!eDivToggle.classList.contains('hide')) {
          toggleMenu();
        }
      };

      function toggleMenu() {
        eDivToggle.classList.toggle('hide');
        event.stopPropagation();
      };
    }
  }

  window.addEventListener('load', profileToggle);
  window.addEventListener('resize', profileToggle);

}());
