(function(){

	function moveChecKed() {
		var elMoveListItems = document.querySelectorAll('.js-move-list-items');
        var elMoved;

		[].forEach.call( elMoveListItems, function( target ){

			var elListItemsToMoved = target.querySelector('.js-list-to-move');
			elListItemsToMoved.classList.toggle('hide');

			target.querySelector('.js-toggle').addEventListener("click", function() {

				elListItemsToMoved.classList.toggle('hide');

				}

			);

        	var elLabels = target.querySelectorAll('.js-list-to-move > li > label');

			[].forEach.call( elLabels, function( label ){
				var elMainListItems = target.querySelectorAll('.js-main-list > li');

				label.onclick = function(){
					elMoved = this.parentNode;
					if(elMoved.parentNode == elListItemsToMoved) {
						target.querySelector('.js-main-list').insertBefore(elMoved, elMainListItems[elMainListItems.length-1]);
					}

	            };

			});

		});

	}

	window.addEventListener('load', moveChecKed, false);

}());
