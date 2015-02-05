$('.js-action').click(function(event) {
   event.preventDefault();
	var that = event.target;

	var $tipList = $('.tips-list > li');

	for (var i = 0; i < $tipList.length; i++ ) {

		// with js native
		$tipList[i].style.height = $tipList[i].clientHeight + 'px';
		// with jquery
		// $($list[i]).css({'height':$list[i].clientHeight + 'px'});

	}

   $.ajax(this.href, {
      success: function(data) {

		if (data == '0') {
			var $target = $(that).closest('.js-animation');
				$target.addClass('fade-out');

			var timeOut = setTimeout( function() {
				$target.removeClass('fade-out');
				$target.addClass('fade-in-up');

				var t = setTimeout( function() {
					$target.removeClass('fade-in-up');
				}, 1500);

			}, 700);


		} else {
			var $target = $(that).closest('.tips-list > li');
				$target.addClass('fade-out');

			var t = setTimeout( function() {
				$target.addClass('close-animate');
				$target.css({'height':'0'});
				//$target[0].style.height = '0';

			}, 700);


			}

      },
      error: function() {
         console.log('Ko');
      }
   });
});
