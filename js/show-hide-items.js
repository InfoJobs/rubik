(function() {

	function showHideListItems() {
    var eClickItem = document.querySelectorAll('.js-show-hide-items');
    var eHiddenSibblingItems = document.querySelectorAll('.js-hidden-sibbling-items');//clase en el <ul> para ocultar por defecto todos los itemsmenos el primero
    var eToggle;
    var eClickItemParent;

		[].forEach.call(eClickItem, function(target) {

      //si hay una lista hidden sibbling items, ocultamos todos los items menos el primero
      for(var i= 0; i < eClickItem.length; i++) {

         eClickItemParent = target.parentNode;

        if(target.previousElementSibling === eHiddenSibblingItems[0]) {
            eToggle =  eClickItemParent.querySelectorAll('li:not(:first-of-type)');

            for (var j = 0; j < eToggle.length; j++) {
              eToggle[j].classList.add('hide');

    	      }
        }

        eToggle =  eClickItemParent.querySelectorAll('.js-toggle-element');

        for (var l = 0; l < eToggle.length; l++) {
          eToggle[l].classList.add('hide');

	      }
      }


			target.onclick = function() {

         eClickItemParent = target.parentNode;

        //comprobamos si el <ul> tiene la clase js-hidden-sibbling-items
        if(target.previousElementSibling === eHiddenSibblingItems[0]) {

          eToggle =  eClickItemParent.querySelectorAll('li:not(:first-of-type)');
          toggleItems();

        } else {

          eToggle =  eClickItemParent.querySelectorAll('.js-toggle-element');
          toggleItems();

        }

        function toggleItems(){
          for (var i = 0; i < eToggle.length; i++) {
            eToggle[i].classList.toggle('hide');

            if(eToggle[i].classList.contains('hide')) {
              target.textContent = target.getAttribute('data-text-show');
            } else {
              target.textContent = target.getAttribute('data-text-hide');
            }
  	      }
        }

			};

		});

	}

	window.addEventListener('load', showHideListItems);

}());
