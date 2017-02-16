(function() {

  function kebabToggle() {
    var eClickItem = document.querySelectorAll('.js-kebab-toggle');

    if (eClickItem !== null) {

      [].forEach.call( eClickItem, function(target){
        var eDivToggle = target.parentNode.querySelector('.kebab-toggle');
        eDivToggle.classList.add('hide');

        target.onclick = function(event){
          closeToggleKebab();
          if(eDivToggle.classList.contains('kebab-current')) {
            eDivToggle.classList.remove('kebab-current');
          } else {
            eDivToggle.classList.add('kebab-current');
            eDivToggle.classList.toggle('hide');
          }
          if(target.getBoundingClientRect().left < eDivToggle.getBoundingClientRect().width) {
            eDivToggle.classList.remove('menu-kebab-drop');
            eDivToggle.classList.add('menu-kebab-drop-right');
          } else {
            eDivToggle.classList.add('menu-kebab-drop');
            eDivToggle.classList.remove('menu-kebab-drop-right');
          }
          event.stopPropagation();
        };

      });

      document.querySelector('html').onclick = function() {
        for(var i=0; i<eClickItem.length; i++) {
          if(eClickItem[i].parentNode.querySelector('.kebab-toggle').classList.contains('kebab-current')) {
            eClickItem[i].parentNode.querySelector('.kebab-toggle').classList.remove('kebab-current');
          }
        }
        closeToggleKebab();
      };

      function closeToggleKebab() {
        for(var i=0; i<eClickItem.length; i++) {
          if(eClickItem[i].parentNode.querySelector('.kebab-toggle')) {
            eClickItem[i].parentNode.querySelector('.kebab-toggle').classList.add('hide');
          }
        }
      }

    }

  }

  window.addEventListener('load', kebabToggle);
  window.addEventListener('resize', kebabToggle);
}());
