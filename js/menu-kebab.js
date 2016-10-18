(function(){

		var eClickItem = document.querySelectorAll('.js-kebab-toggle');
		var eDivToggle = document.querySelector('.toggle');

	function slideToggle() {

		[].forEach.call( eClickItem, function( target ){

			        target.onclick = function(event){
			            eDivToggle.classList.toggle('hide');
                  event.stopPropagation();
			        };

		});

    document.querySelector('html').onclick = function() {
      eDivToggle.classList.add('hide');

    }

	}

	window.addEventListener('load', slideToggle);

}());
