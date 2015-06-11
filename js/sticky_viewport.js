
	function submenuLogged () {

        var topPos = document.querySelector('.button').offsetTop; // distancia que hay desde el top de la ventana hasta el elemento 'elB'
        //var total = window.innerHeight; // tamanyo de la ventana del navegador (viewport)
		document.querySelector('.menu').style.height = topPos+'px';

      }

      window.addEventListener('scroll', submenuLogged);
      window.addEventListener('load', submenuLogged);
      window.addEventListener('resize', submenuLogged);
