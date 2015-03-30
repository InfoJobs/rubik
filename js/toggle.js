var eContainer,
    eToggleContainer,
    eArrow,
    nCollapsibleChildrenHeight = 0;

function hideContainer() {

	eContainer = document.querySelectorAll('.js-toggle');

	eToggleContainer = document.querySelectorAll('.js-toggle-container');

	if (window.innerWidth < 481) {
		[].forEach.call(eToggleContainer, function(content){
			content.bOcult = true;
			content.addEventListener('click', listeners, false);
		});
	} else {
		[].forEach.call(eToggleContainer, function(content){
			content.removeEventListener('click', listeners , false);
		});
	}

	[].forEach.call( eContainer, function( target ){
		if (window.innerWidth < 481) {
			target.classList.remove('hide-small-device');
	    	target.nCollapsibleChildrenHeight = 0;

	    	for (i = 0; i < target.children.length; i++ ) {
	            target.nCollapsibleChildrenHeight += target.children[i].getBoundingClientRect().height + Number( document.defaultView.getComputedStyle(target.children[i]).getPropertyValue("margin-bottom").replace('px','') );
	        }

	    	target.classList.add('slide-toggle');
		} else {
			target.classList.remove('slide-toggle');
			target.removeAttribute("style");

		}
	});

}
function listeners(event){
	event.stopPropagation();
	if(this.bOcult) {
		this.querySelector('.js-toggle').style.height = Math.round(this.querySelector('.js-toggle').nCollapsibleChildrenHeight) + 'px';

		eArrow = this.querySelectorAll('.iconfont-ArrowDown');
		[].forEach.call(eArrow, function(arrow){
			arrow.classList.remove("iconfont-ArrowDown");
			arrow.classList.add("iconfont-ArrowUp");
		});
		this.bOcult = false;
	} else {
		this.querySelector('.js-toggle').style.height = 0;
		eArrow = this.querySelectorAll('.iconfont-ArrowUp');
		[].forEach.call(eArrow, function(arrow){
			arrow.classList.remove("iconfont-ArrowUp");
			arrow.classList.add("iconfont-ArrowDown");
		});
		this.bOcult = true;
	}
}
window.addEventListener('load', hideContainer);
window.addEventListener('resize', hideContainer);

        
