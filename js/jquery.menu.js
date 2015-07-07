
$(function() {

	var eBpHeader   = 945;

	function closeMenu() {
		$('body').removeAttr( 'style')
		$('.wrap-overlay').removeClass('wrap-transition');
		$('.nav-mobile').removeClass('open-menu');
	    setTimeout(function(){
			$('.wrapper').removeClass('wrap-overlay');

	     },1000);
	}

    $('.js-open-menu').click(function(){
		$('body').css( 'overflow', 'hidden');
        $(this).next('.nav-mobile').addClass('open-menu');
		$('.wrapper').addClass('wrap-overlay');

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
