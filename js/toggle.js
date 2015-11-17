var eContainer,
    eToggleContainer,
    eArrow,
    nCollapsibleChildrenHeight = 0;

function hideContainer() {

	eContainer = document.querySelectorAll('.js-toggle');

	eToggleContainer = document.querySelectorAll('.js-toggle-container');

	if (window.innerWidth < 481) {
		[].forEach.call(eToggleContainer, function(content) {
			if(!content._hasEvent) {
			    content.querySelector('.js-toggle-switch').addEventListener('click', listeners, false);
				content._hasEvent = true;
				content.bOcult = true;
			}
		});
	} else {
		[].forEach.call(eToggleContainer, function(content){
			content.querySelector('.js-toggle-switch').removeEventListener('click', listeners , false);
			content._hasEvent = false;
		});
	}

	[].forEach.call( eContainer, function( target ){
		if (window.innerWidth < 481) {
			target.classList.remove('hide-small-device');
	    	target.nCollapsibleChildrenHeight = 0;

	    	for (i = 0; i < target.children.length; i++ ) {
	            target.nCollapsibleChildrenHeight += target.children[i].getBoundingClientRect().height +
	            getRealStyle(target.children[i], 'margin-bottom' );
	        }

	    	target.classList.add('slide-toggle');
		} else {
			target.classList.remove('slide-toggle');
			target.removeAttribute("style");

		}
	});

}

function getRealStyle(element, style ) {
	return Number( document.defaultView.getComputedStyle(element).getPropertyValue(style).replace('px','') );
}

function listeners(event){
	event.stopPropagation();
	if(this.parentNode.bOcult) {
		this.parentNode.querySelector('.js-toggle').style.height = Math.round(this.parentNode.querySelector('.js-toggle').nCollapsibleChildrenHeight) + 'px';

		eArrow = this.querySelectorAll('.iconfont-ArrowDown');
		[].forEach.call(eArrow, function(arrow){
			arrow.classList.remove("iconfont-ArrowDown");
			arrow.classList.add("iconfont-ArrowUp");
		});
		this.parentNode.bOcult = false;
	} else {
		this.parentNode.querySelector('.js-toggle').style.height = 0;
		eArrow = this.parentNode.querySelectorAll('.iconfont-ArrowUp');
		[].forEach.call(eArrow, function(arrow){
			arrow.classList.remove("iconfont-ArrowUp");
			arrow.classList.add("iconfont-ArrowDown");
		});
		this.parentNode.bOcult = true;
	}
}
window.addEventListener('load', hideContainer);
window.addEventListener('resize', hideContainer);
