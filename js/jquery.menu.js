
$(function() {

	var eBpHeader = 945;
	var eMenu = $('.nav-mobile');
	var srcAvatar = $('.avatar .picture').attr('src');

	function closeMenu() {
		$('body').removeAttr( 'style')
		$('.wrap-overlay').removeClass('wrap-transition');
		eMenu.removeClass('open-menu');
	    setTimeout(function(){
			$('.wrapper').removeClass('wrap-overlay');

	     },1000);
	}

	function bgBlur() {
		$('.avatar').backgroundBlur({
		    imageURL : srcAvatar,
		    blurAmount : 50,
		    imageClass : 'bg-blur'
		});
	}

    $('.js-open-menu').click(function(){
		$('body').css( 'overflow', 'hidden');
        $(this).next('.nav-mobile').addClass('open-menu');
		$('.wrapper').addClass('wrap-overlay');

	    setTimeout(function(){
			$('.wrap-overlay').addClass('wrap-transition');
		},100);

		if (eMenu.hasClass('open-menu')) {

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
        if(event.keyCode === 27 && eMenu.hasClass('open-menu')) {
			closeMenu();
        }

    });

	if (window.innerWidth <= eBpHeader) {
		$('.nav-bar-access .btn').addClass('btn-medium');
		bgBlur();

	} else {
		$('.nav-bar-access .btn').removeClass('btn-medium');
	}


	$( window ).resize(function() {

		if (window.innerWidth <= eBpHeader) {
			$('.nav-bar-access .btn').addClass('btn-medium');

		} else {
			$('.nav-bar-access .btn').removeClass('btn-medium');
		}

		if($('.wrapper').hasClass('wrap-overlay') && window.innerWidth > eBpHeader) {

			$('.wrapper').removeClass('wrap-overlay').removeAttr( 'style' );

		}
		else if(
				$('.wrapper').not('wrap-overlay') &&
				eMenu.hasClass('open-menu') &&
				window.innerWidth <= eBpHeader
			) {
			$('.wrapper').addClass('wrap-overlay').css('height' , eMenuHeight + 'px');
		}

	});



});
