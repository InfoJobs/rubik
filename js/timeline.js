(function(){

	function slideToggle() {
		var eClickItem = document.querySelectorAll('.js-timeline');
		[].forEach.call( eClickItem, function( target ){

      target.onclick = function(){
        this.previousElementSibling.classList.toggle('timeline-hidden-items');
      };

		});

	}

	window.addEventListener('load', slideToggle);

}());
