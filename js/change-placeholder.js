(function(){

	function changePlaceholder() {

		var ePlaceholders = document.querySelectorAll(".js-placeholder-device");

		[].forEach.call( ePlaceholders, function( target ){

			if (window.innerWidth > 767) {
			    // target.placeholder = target.getAttribute("data-desktop");
			    target.placeholder = target.dataset.desktop;
			} else {
			    // target.placeholder = target.getAttribute("data-mobile");
			    target.placeholder = target.dataset.mobile;
			}
			// equivale a un if else :
			// window.innerWidth > 481 ? target.placeholder = target.dataset.desktop : target.placeholder = target.dataset.mobile ;

		});

	}

	window.addEventListener('load', changePlaceholder);
	window.addEventListener('resize', changePlaceholder);

}());
