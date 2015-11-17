/*
	Toast
	version - 0.1.0


*/
;(function ( $, window, document, undefined ) {


		$.fn.toast = function( options ) {
			// Default options
			var settings = $.extend({}, $.fn.toast.defaults, options );

			return this.each(function() {

				var $this 			= $( this ),
					sourceElement 	= $this.data().source || settings.source,
					classes 		= $this.data().classes || settings.classes;

				if ( sourceElement != null ) {

				    var topScroll = $(sourceElement).offset().top + $(sourceElement).innerHeight();
				    var scroll = function() {

				        var scroll = $(window).scrollTop();

				        if (scroll >= topScroll) {
				        	$this.addClass(classes);
				        } else {
				        	$this.removeClass(classes);
				        }
				    };

				    $(window).scroll( scroll );
				    scroll();
				}
				
			});

		};


		// Estos son los valores por defecto.
		$.fn.toast.defaults = {
			sourceElement: null,
			classes: ""
		};


})( jQuery, window, document );
