(function(){

	var eTopPos;
	var eMenu;

	function init () {
		eTopPos = document.querySelector('.button'); // distancia que hay desde el top de la ventana hasta el elemento 'elB'
		eMenu   = document.querySelector('.menu');
		submenuLogged();
	}

	function submenuLogged () {

        //var total = window.innerHeight; // tamanyo de la ventana del navegador (viewport)
		eMenu.style.height = eTopPos.offsetTop+'px';

      }

      window.addEventListener('DOMContentLoaded', init);
      window.addEventListener('resize', submenuLogged);

})();
