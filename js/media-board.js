

function textTranslate() {
	var $items = $('.js-media-board-item'),
		margin = 6,
		windowWidth = $(window).width();

	
	$items.each( function(index,elm) {

		$this = $(elm);
		$this.css("color", "red");
		
		var $title = $this.find('.title'),
			$description = $this.find('.description'),
			$descriptionHeight = $description.innerHeight();


		if(windowWidth > 768) {

			$($title).css({
				'-webkit-transform' : 'translateY(' + $descriptionHeight + 'px)',
				'transform' : 'translateY(' + $descriptionHeight + 'px)'
			});

			$this.mouseenter(function(event) {
				$($title).css({
					'-webkit-transform' : 'translateY('+ (0 - margin) +'px)',
					'transform' : 'translateY('+ (0 - margin) +'px)'
				});
			});

			$this.mouseleave(function(event){
				$($title).css({
					'-webkit-transform' : 'translateY(' + $descriptionHeight + 'px)',
					'transform' : 'translateY(' + $descriptionHeight + 'px)'
				});
			});

		} else {

			$this.unbind('mouseenter mouseleave');
			$($title).css({
				'-webkit-transform' : 'translateY(0px)',
				'transform' : 'translateY(0px)'
			});

		}

	});
}


$(document).ready(textTranslate);
$(window).resize(textTranslate);