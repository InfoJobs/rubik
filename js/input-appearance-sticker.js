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
