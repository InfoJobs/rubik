
$(function() {

	var eBpHeader = 945;
	var eMenu = $('.nav-mobile');
	var eWrapper= $('.wrapper');
	var srcAvatar = $('.avatar .picture').attr('src');
	var vpHeight = $( window ).height();
  var buttonAccess = $('.nav-bar-access .js-access-button');

	function closeMenu() {

		eWrapper.removeAttr( 'style')
		$('.wrap-overlay').removeClass('wrap-transition');
		eMenu.removeClass('open-menu');
	    setTimeout(function(){
	    	eWrapper.removeClass('wrap-overlay');

		},600);

	}

  //commented because is not in empleo, but maybe will be in the future
  // function bgBlur() {
  //
  // 	$('.avatar').backgroundBlur({
  // 	    imageURL : srcAvatar,
  // 	    blurAmount : 50,
  // 	    imageClass : 'bg-blur'
  // 	});
  //
  // }


  $('.js-open-menu').click(function(){

		eWrapper.css( 'overflow', 'hidden').css('height', vpHeight);
        $('.nav-mobile').addClass('open-menu');
        eWrapper.addClass('wrap-overlay');

	    setTimeout(function(){
			$('.wrap-overlay').addClass('wrap-transition');
		},100);

		if (eMenu.hasClass('open-menu')) {

			eWrapper.click(function() {
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
	    if(buttonAccess.lenght) {
	      buttonAccess.removeClass('btn-small');
	      buttonAccess.addClass('btn');
	    }

	}

  //commented because is not in empleo, but maybe will be in the future
  //bgBlur();

	$( window ).resize(function() {

		vpHeight = $( window ).height();

		if( eMenu.hasClass('open-menu') && window.innerWidth <= eBpHeader) {
			eWrapper.css('height', vpHeight);
		}

		if (window.innerWidth <= eBpHeader) {
	      if(buttonAccess.length) {
	          buttonAccess.removeClass('btn-small');
	          buttonAccess.addClass('btn');
	      } else {
	        buttonAccess.removeClass('btn');
	        buttonAccess.addClass('btn-small');
	  		}

		} else {
	    	buttonAccess.removeClass('btn');
	    	buttonAccess.addClass('btn-small');
	    }

		if(eWrapper.hasClass('wrap-overlay') && window.innerWidth > eBpHeader) {

			eWrapper.removeClass('wrap-overlay').removeClass('wrap-transition').removeAttr( 'style' );

		}
		else if(
				eWrapper.not('wrap-overlay') &&
				eMenu.hasClass('open-menu') &&
				window.innerWidth <= eBpHeader
			) {
			eWrapper.addClass('wrap-overlay').addClass('wrap-transition');
		}

	});


});
