
$(function() {

	var eBpHeader = 945;
	var eMenu = $('.nav-mobile');
	var eWrapper= $('body');
	var srcAvatar = $('.avatar .picture').attr('src');
	var vpHeight = $( window ).height();
	var buttonAccess = $('.nav-bar-access .js-access-button');
	var buttonAccessContrast = $('.nav-bar-access .js-access-button-contrast');
	var buttonAccessAlternative = $('.nav-bar-access .js-access-button-alternative');

	function closeMenu() {

		eWrapper.removeAttr( 'style')
		$('.wrap-overlay').removeClass('wrap-transition');
		eMenu.removeClass('open-menu');
	    setTimeout(function(){
	    	eWrapper.removeClass('wrap-overlay');

		},600);

	}

  function changeButton(btn, btnRemove, btnAdd) {
    btn.removeClass(btnRemove);
    btn.addClass(btnAdd);
  }

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
	    if(buttonAccess.length) {
        changeButton(buttonAccess, 'btn-small', 'btn');
	    }
	    if(buttonAccessContrast.length) {
        changeButton(buttonAccessContrast, 'btn-default-contrast', 'btn-default');
	    }
	    if(buttonAccessAlternative.length) {
        changeButton(buttonAccessAlternative, 'btn-default-alternative', 'btn-default');
	    }
	}

	$( window ).resize(function() {

		vpHeight = $( window ).height();

		if( eMenu.hasClass('open-menu') && window.innerWidth <= eBpHeader) {
			eWrapper.css('height', vpHeight);
		}

		if (window.innerWidth <= eBpHeader) {
      if(buttonAccess.length) {
        changeButton(buttonAccess, 'btn-small', 'btn');
      } else {
        changeButton(buttonAccess, 'btn', 'btn-small');
      }

      if(buttonAccessContrast.length) {
        changeButton(buttonAccessContrast, 'btn-default-contrast', 'btn-default');
      }

	    if(buttonAccessAlternative.length) {
        changeButton(buttonAccessAlternative, 'btn-default-alternative', 'btn-default');
	    }
    } else {
      changeButton(buttonAccess, 'btn', 'btn-small');

      if(buttonAccessContrast.length) {
        changeButton(buttonAccessContrast, 'btn-default', 'btn-default-contrast');
      }

	    if(buttonAccessAlternative.length) {
        changeButton(buttonAccessAlternative, 'btn-default', 'btn-default-alternative');
	    }
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
