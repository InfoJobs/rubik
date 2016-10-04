(function(){
  var move;
  var source = document.querySelector('.js-move-source');
  var destination = document.querySelector('.js-move-destination');

  function moveElement() {

    if(source !== null && destination !== null) {

      if (window.innerWidth > 767){
        destination.appendChild(source);
        move = false;
      } else if(window.innerWidth < 768 && move === false) {
        window.location.reload(false);
        move = true;
      }

    }

  }

  window.addEventListener('load', moveElement)
  window.addEventListener('resize', moveElement)


})();
