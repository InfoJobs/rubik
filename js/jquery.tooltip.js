/*
	Tool Tip
	version - 0.1.0


*/
;(function ( $, window, document, undefined ) {


		$.fn.toolTip = function( options ) {
			// Defaul options
			var settings = $.extend({}, $.fn.toolTip.defaults, options );

	        // Close on ESC key
	        $(document).on('keyup', function(event) {
	            if(event.keyCode === 27) {
	                $.fn.toolTip.closeTooltip();
	            }
	        });

			return this.each(function() {

				var $this      = $( this ),
        	dark         = $this.data().dark || settings.dark,
					width        = $this.data().width || settings.width,
					position     = $this.data().position || settings.position,
					close        = $this.data().close || settings.close,
					autoclose    = $this.data().autoclose || settings.autoclose,
					closeButton  = '<a href="#" class="close-tooltip" title="'+close+'">'+close+'</a>';


				if( $( window ).width() > width) {
					$this.find('.tooltip').css({'width' : width+"px"});
				} else {
					$this.find('.tooltip').css({'width' : "auto"});
				}


				if(position != settings.position) {

					$this.find('.tooltip-layer').addClass( "tooltip-right" );
        }

        if(dark) {
					$this.find('.tooltip-layer').addClass( "tooltip-layer-contrast");
					$this.find('.tooltip').addClass( "tooltip-contrast");
        }

				$this.find('.js-tooltip-open').click( function() {

				  	if(autoclose) {
				  		$.fn.toolTip.closeTooltip();
					}

				  	$this.find('.tooltip-layer').addClass('move-up-tooltip--mobile')
					.removeClass('tooltip-hidden move-down-tooltip--mobile tooltip-fade-out');

					$(document).mouseup(function (event) {
					    var container = $('.tooltip-layer');

					    if (!container.is(event.target) // if the target of the click isn't the container...
					        && container.has(event.target).length === 0) // ... nor a descendant of the container
					    {
	                		$.fn.toolTip.closeTooltip();
					    }
					});

				});

				$this.find('.tooltip').prepend(closeButton);

				$this.find('.close-tooltip').click(function(event) {
					event.preventDefault();
					$this.find('.tooltip-layer')
					.addClass('move-down-tooltip--mobile tooltip-fade-out')
					.removeClass('move-up-tooltip--mobile');
				});

			});

		};

		$.fn.toolTip.closeTooltip = function() {
				$('.tooltip-layer').addClass('move-down-tooltip--mobile tooltip-fade-out')
				.removeClass('move-up-tooltip--mobile');
		};

		// Estos son los valores por defecto.
		$.fn.toolTip.defaults = {
			width: "480",
			position: "left",
			close: "Cerrar",
			autoclose: true,
			dark: false
		};


})( jQuery, window, document );
