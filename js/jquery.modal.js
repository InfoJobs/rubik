/*
	Modal
	version - 0.3.0

*/
;(function ( $, window, document, undefined ) {

	var width,
        innerHeight,
        $modalInner,
        $modalLayer,
        $modalWrapper,
        $modalContent,
        $modalHeader,
        minTopMargin	= 40, // Margin to apply when the modal won't fit in window height.
        browsers = /(android)/gi;

	$.fn.modalWindow = function( options ) {
		// Defaul options
		var settings    = $.extend({}, $.fn.modalWindow.defaults, options);
		
		var dismissible = $( this ).data().dismissible || settings.dismissible;
		
        // Close on ESC key
        $(this).on('keyup', function(event) {
            if(dismissible && event.keyCode === 27) {
                $.fn.modalWindow.closeModalWindow();
            }
        });

        $(window).resize(function() {
        	$.fn.modalWindow.resizeModal();
        });

        return this.each(function() {
			var $this = $( this ),
				headermodal = $this.data().headermodal || settings.headermodal,
				hasheader = $this.data().hasheader || settings.hasheader,
				closecolor = $this.data().closecolor || settings.closecolor,
				close = $this.data().close || settings.close,
				closeBackground	= $this.data().closeBackground || settings.closeBackground,
				autoclose = $this.data().autoclose || settings.autoclose,
				callback = $this.data().callback,
				openElement	= $this.data().openelement,
				contentWrapper = $this.data().contentwrapper,
				content = $('#'+contentWrapper).html(),
				closeModal = dismissible === true ? '<a href="#" class="close-modal hit-area ' + closecolor + '" title=""></a>' : '',
				headerModal = '<div class="modal-header" id="header-'+openElement+'">' + closeModal + '<h1 class="title truncate">' + headermodal + '</h1> </div>',
				structure = '<div id="layer-'+openElement+'" class="modal-hidden modal-layer"><div id="inner-'+openElement+'" class="modal-inner"><div id="content-'+openElement+'" class="modal-content"></div></div></div>';
				width = $this.data().width || settings.width;
				headerModal = hasheader === false ? closeModal : headerModal;

			$('#'+contentWrapper).remove();
			
			$('#'+openElement).click( function() {

				$('#notification-toast').css('position','static');
				$("body").css({ overflow: 'hidden' });
				$(".sticky").css({ zIndex: 0 });
				$('.wrapper').append(structure);
				$('#inner-'+openElement).prepend(headerModal);
				$('#content-'+openElement).append(content);

				$modalInner = $('#inner-'+openElement);
				$modalLayer = $('#layer-'+openElement);
				$modalWrapper = $('#content-'+openElement);
				$modalContent = $('#content-'+openElement);

				$modalHeader = $('#header-'+openElement);
                $modalLayer
                    .addClass('modal-fade-in')
                    .removeClass('modal-hidden modal-fade-out')
                    .click(function(event) {
                        if((dismissible && closeBackground && $(event.target).is('.modal-layer')) || $(event.target).is('.close-modal')) {
                            event.preventDefault();
                            $.fn.modalWindow.closeModalWindow();
                            return false;
                        }
                    });

                $.fn.modalWindow.resizeModal();

                if(callback) {
                    eval(callback);
                }

            });
		});
	};

	$.fn.modalWindow.resizeModal = function () {
		if($modalInner && $modalHeader){
			var headerHeight = $modalHeader.innerHeight();

			// If width of window is greater than settings.width
			if( $( window ).width() > width) {
				$modalInner.css({
					'width': width+'px'
				});
			}
			var elementInner = document.querySelector(".modal-content");
			if(window.innerHeight < (elementInner.offsetHeight + headerHeight + minTopMargin)) {
				if($( window ).width() > $modalInner.width()) {
					innerHeight = window.innerHeight - headerHeight - minTopMargin;
					$modalInner.css({
						//'height': (window.innerHeight - minTopMargin) + 'px',
						'top': '20px',
						'margin': 'auto'
					});
	                $modalWrapper.css({
						'height': innerHeight + 'px',
						'max-height': innerHeight + 'px',
						'overflow-x': 'hidden'
					});


				} else {
					$modalInner.css({
						//'height': window.innerHeight + 'px',

						'top': '0px'
					});
	                $modalWrapper.css({
						'height': (window.innerHeight - headerHeight) + 'px',
						'max-height': (window.innerHeight - headerHeight) + 'px',
						'overflow-x': 'hidden'
					});

    	            if( window.navigator.userAgent.search( browsers ) > -1 ) {

    	                $modalInner.css({
    	                	'left': '0',
    	                	'margin': '0'
    	                });
    	            }
				}
			}
			else if ($( window ).width() > 480) {
				contentInnerHeight = elementInner.offsetHeight;
	            $modalWrapper.css({
					'max-height': contentInnerHeight + 'px',
					'height': contentInnerHeight + 'px'
				});
	            var top = (window.innerHeight - (contentInnerHeight + $modalHeader.innerHeight())) / 2;

	            $modalInner.css({
	            	//'height': $modalInner.innerHeight() + 'px',
	            	'top': top + 'px'
				});

	            if( window.navigator.userAgent.search( browsers ) > -1 ) {

	            	var left = ($(window).width() - $modalInner.width()) / 2;

	                $modalInner.css({
	                	'left': left + 'px',
	                	'margin': '0'
	                });
	            }

			}
			else if ($( window ).width() < 481) {
				//contentInnerHeight = $modalContent.innerHeight();
	            $modalWrapper.css({
	            	'max-height': contentInnerHeight + 'px',
					'height': contentInnerHeight + 'px'
				});
				var top = (window.innerHeight - $modalInner.innerHeight()) / 2;
	            $modalInner.css({
					'top': '0',
					//'height': '100%'
				});
			}
		}
	};

	$.fn.modalWindow.closeModalWindow = function() {
        $modalLayer.addClass('modal-fade-out').removeClass('modal-fade-in');
        $modalLayer.remove();
        $('body').css({ overflow: 'inherit' })
        $('#notification-toast').css('position','relative');
        $(".sticky").css({ zIndex: 8996 });
        window.dispatchEvent(new window.CustomEvent('close-modal'));
	};

	// Estos son los valores por defecto.
	$.fn.modalWindow.defaults = {
        width: '370',
		close: 'Cerrar',
		headermodal: '',
		closeBackground : true,
		callback: null,
		dismissible: true
	};

})( jQuery, window, document );

// delete extra empty p generated by modal component
$(document).ready(function() {
	$("p:empty").remove();
});
