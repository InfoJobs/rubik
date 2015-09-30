(function(){

	function slideToggle() {

		var eClickItem = document.querySelectorAll('.js-slide-toggle');
		var eDivToggle = document.querySelector('.toggle');
		//var offsetHeight = document.getElementById('myDiv').offsetHeight;

		[].forEach.call( eClickItem, function( target ){

			        target.onclick = function(){
			            eDivToggle.classList.toggle('hide');
			        };

		});

	}

	window.addEventListener('load', slideToggle);

}());
