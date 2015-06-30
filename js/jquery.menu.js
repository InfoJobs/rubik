$(function() {
    $('.js-open-menu').click(function(){

        $(this).next('.nav-mobile').addClass('fade-in open-menu');
		$('.wrapper').addClass('wrap-overlay');

		function closeMenu() {
			$('.nav-mobile').addClass('fade-out');
			$('.wrapper').removeClass('wrap-overlay');
		    setTimeout(function(){
		        $('.nav-mobile').removeClass('open-menu fade-out fade-in');
		     },1000);
		}

		if ($('.nav-mobile').hasClass('open-menu')) {

			$('.wrapper').click(function() {
				closeMenu();
			 });

			 $('.global-nav').click(function(event){
			     event.stopPropagation();
			 });

		    // Close on ESC key
		    $(document).on('keyup', function(event) {

		        if(event.keyCode === 27) {
					closeMenu();
		        }

		    });

		}


    });


});
