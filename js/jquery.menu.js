
$(function() {

	function closeMenu() {
		$('.nav-mobile').addClass('fade-out');
		$('.wrapper').removeClass('wrap-overlay');
	    setTimeout(function(){
	        $('.nav-mobile').removeClass('open-menu fade-out fade-in');
	     },1000);
	}

    $('.js-open-menu').click(function(){

        $(this).next('.nav-mobile').addClass('fade-in open-menu');
		$('.wrapper').addClass('wrap-overlay');

		if ($('.nav-mobile').hasClass('open-menu')) {

			$('.wrapper').click(function() {
				closeMenu();
			 });

			 $('.global-nav').click(function(event){
			     event.stopPropagation();
			 });

		}

    });

    // Close on ESC key
    $(document).on('keyup', function(event) {
        if(event.keyCode === 27 && $('.nav-mobile').hasClass('open-menu')) {
			closeMenu();
        }

    });

	//delete wrap-overlay on resize
	$( window ).resize(function() {

		if($('.wrapper').hasClass('wrap-overlay') && window.innerWidth > 945) {

			$('.wrapper').removeClass('wrap-overlay');

		}
		else if(
				$('.wrapper').not('wrap-overlay') &&
				$('.nav-mobile').hasClass('open-menu') &&
				window.innerWidth <= 945
			) {
			$('.wrapper').addClass('wrap-overlay');
		}

	});


});
