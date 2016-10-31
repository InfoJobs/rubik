(function(){
  function kebabToggle() {
    var eClickItem = document.querySelectorAll('.js-kebab-toggle');
    var eDivToggle = document.querySelector('.toggle');

    [].forEach.call( eClickItem, function( target ){
      eDivToggle.classList.add('hide');
      target.onclick = function(event){
        eDivToggle.classList.toggle('hide');
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
      eDivToggle.classList.add('hide');
    };
  }

  window.addEventListener('load', kebabToggle);
  window.addEventListener('resize', kebabToggle);
}());
