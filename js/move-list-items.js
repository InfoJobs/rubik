(function(){

	function moveChecKed() {

        var elMoveList = document.querySelector('.js-list-to-move');
		var elMoveListItems = document.querySelectorAll('.js-list-to-move label:first-of-type');
		var elMainListItems = document.querySelectorAll('.js-main-list > li');
        var elMoved;


		[].forEach.call( elMoveListItems, function( target ){
            target.onclick = function(){

				elMoved = target.parentNode;
				if(elMoved.parentNode == elMoveList) {
					elMoved.parentNode.parentNode.querySelector('.js-main-list').insertBefore(elMoved, elMainListItems[elMainListItems.length-1]);
					elMoveListItems = document.querySelectorAll('.js-list-to-move label');
				}

            };

		});

	}

	window.addEventListener('load', moveChecKed, false);

}());
