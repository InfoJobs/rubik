(function(){

	function slideToggle() {

		var eClickItem = document.querySelectorAll('.js-collapsible-accordion-toggle');
		var contentToggle;
		var arrowToggle;

		[].forEach.call( eClickItem, function( target ){

			var contentToggle = target.parentNode.querySelector('.toggle');

			function setTextToggle() {
	    		var attribute = contentToggle.classList.contains('hide') ? "data-text-show" : "data-text-hide"
		    	target.textContent = target.getAttribute(attribute) || target.textContent ;
			}

	        target.onclick = function(e){
	        	e.preventDefault();
	        	contentToggle.classList.toggle('hide');
	        	arrowToggle = target.querySelector('.arrow');
	        	if(arrowToggle) {
	        		arrowToggle.classList.toggle('script');
	        		arrowToggle.classList.toggle('iconfont-ArrowDown');
	        		arrowToggle.classList.toggle('iconfont-ArrowUp');
	        	}
	        	setTextToggle();
	        };

	        target.onload = function(){
	        	setTextToggle()
	        }();

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
