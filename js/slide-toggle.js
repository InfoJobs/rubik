(function(){

	function slideToggle() {

		var eClickItem = document.querySelectorAll('.js-collapsible-accordion-toggle');

		[].forEach.call( eClickItem, function( target ){

	        target.onclick = function(e){
	        	e.preventDefault();
	        	target.parentNode.querySelector('.toggle').classList.toggle('hide');
	        	target.querySelector('.arrow').classList.toggle('script');
	        	target.querySelector('.arrow').classList.toggle('iconfont-ArrowDown');
	        	target.querySelector('.arrow').classList.toggle('iconfont-ArrowUp');
	        };
		});
	}


	function turnArrow() {

		var eContentItem = document.querySelectorAll('.collapsible-accordion-content');

		[].forEach.call( eContentItem, function( target ){

			if (!target.classList.contains('hide')) {
				target.parentNode.querySelector('.arrow').classList.toggle('script');
				target.parentNode.querySelector('.arrow').classList.toggle('iconfont-ArrowUp');
				target.parentNode.querySelector('.arrow').classList.toggle('iconfont-ArrowDown');
	        }
		});
	};

	window.addEventListener('load', turnArrow);
	window.addEventListener('load', slideToggle);


}());
