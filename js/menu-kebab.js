(function() {

  function kebabToggle() {
    var eClickItem = document.querySelectorAll('.js-kebab-toggle');
    var currentKebabItem;

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

            currentKebabItem = document.querySelector('.menu-kebab-drop-item-selected');
            currentKebabItem.classList.add('menu-kebab-drop-item-focus');

            eDivToggle.onmouseover = function() {
              currentKebabItem.classList.remove('menu-kebab-drop-item-focus');
              document.removeEventListener('keyup', navigationMenu);
            }
            eDivToggle.onmouseout = function() {
              currentKebabItem.classList.add('menu-kebab-drop-item-focus');
              document.addEventListener('keyup', navigationMenu);
            }
            document.addEventListener('keyup', navigationMenu);
            window.addEventListener('keydown', disabledScrollWindow);
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
          eClickItem[i].parentNode.querySelector('.kebab-toggle').classList.add('hide');
        }
        if(document.querySelector('.menu-kebab-drop-item-focus')!==null) {
          document.querySelector('.menu-kebab-drop-item-focus').classList.remove('menu-kebab-drop-item-focus');
        }
        document.removeEventListener('keyup', navigationMenu);
        window.removeEventListener('keydown', disabledScrollWindow);
      };

      function navigationMenu(event) {
        if(event.keyCode === 40) {
          if(currentKebabItem.nextElementSibling!==null) {
            currentKebabItem.nextElementSibling.classList.toggle('menu-kebab-drop-item-focus');
            moveFocus();
          }
        }
        if(event.keyCode === 38) {
          if(currentKebabItem.previousElementSibling!==null) {
            currentKebabItem.previousElementSibling.classList.toggle('menu-kebab-drop-item-focus');
            moveFocus();
          }
        }

        function moveFocus() {
          currentKebabItem.classList.toggle('menu-kebab-drop-item-focus');
          currentKebabItem = document.querySelector('.menu-kebab-drop-item-focus');
          currentKebabItem.querySelector('a').focus();
        }

      };

      function disabledScrollWindow(e) {
          if([38, 40, 32].indexOf(e.keyCode) > -1) {
            e.preventDefault();
          }
      };

    }

  }

  window.addEventListener('load', kebabToggle);
  window.addEventListener('resize', kebabToggle);
  window.addEventListener('ajax-success', kebabToggle);

}());
