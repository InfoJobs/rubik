
$(function() {

	var eMenuHeight = $('.nav-mobile').height();
	var eBpHeader   = 945;

	function closeMenu() {
		$('.nav-mobile').addClass('fade-out');
		$('.wrap-overlay').removeClass('wrap-transition').removeAttr( 'style' );

	    setTimeout(function(){
			$('.wrapper').removeClass('wrap-overlay');
	        $('.nav-mobile').removeClass('open-menu fade-out fade-in');
	     },1000);
	}

    $('.js-open-menu').click(function(){

        $(this).next('.nav-mobile').addClass('fade-in open-menu');
		$('.wrapper').addClass('wrap-overlay').css('height' , eMenuHeight + 'px');

        $(window).resize(function () {
			eMenuHeight = $('.nav-mobile').height();
            $('.wrap-overlay').css('height' , eMenuHeight + 'px');
        });

	    setTimeout(function(){
			$('.wrap-overlay').addClass('wrap-transition');
		},100);

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

		if($('.wrapper').hasClass('wrap-overlay') && window.innerWidth > eBpHeader) {

			$('.wrapper').removeClass('wrap-overlay').removeAttr( 'style' );

		}
		else if(
				$('.wrapper').not('wrap-overlay') &&
				$('.nav-mobile').hasClass('open-menu') &&
				window.innerWidth <= 945
			) {
			$('.wrapper').addClass('wrap-overlay').css('height' , eMenuHeight + 'px');
		}

	});


});
