function init() {
	[].forEach.call( document.querySelectorAll('.js-appearance-sticker ul'), function( target ){
        target.classList.add('hide');
    });

    [].forEach.call( document.querySelectorAll('.js-container-sticker'), function( target ) {
		[].forEach.call( target.querySelectorAll(':scope > li > label'), function( label ){
			var span = document.createElement('span');
			span.classList.add('level');
			label.appendChild(span);

			label.onclick=function(event){
				label.parentNode.querySelector('ul').classList.toggle('hide');
				if(label.parentNode.querySelector('input').checked) {
					event.preventDefault();
				}
			};

			label.querySelector('.sticker-close').onclick=function(event) {
				event.preventDefault();
				event.stopPropagation();
				label.parentNode.querySelector('input').checked = false;
				label.parentNode.querySelector('ul').classList.add('hide');
				label.querySelector('.level').innerHTML = '';
			};
		});

	    [].forEach.call( target.querySelectorAll(':scope > li > ul > li > label'), function( level ){
	        level.onclick=function(){
	            level.parentNode.parentNode.parentNode.querySelector('.level').innerHTML = level.textContent;
				level.parentNode.parentNode.classList.add('hide');
	        };
	    });
	});
}
window.addEventListener('load', init);

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

				label.onclick = function(event){
					elMoved = this.parentNode;
					if(elMoved.parentNode == elListItemsToMoved) {
						target.querySelector('.js-main-list').insertBefore(elMoved, elMainListItems[elMainListItems.length-1]);
					}
					label.parentNode.querySelector('ul').classList.toggle('hide');
					if(label.parentNode.querySelector('input').checked) {
						event.preventDefault();
					}
	            };

			});

		});

	}

	window.addEventListener('load', moveChecKed, false);

}());
