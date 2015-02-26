var elCollapsible = document.querySelector('.js-collapsible');
var elCollapsibleLink = document.querySelector('.js-collapsible-toggle');

var nCollapsibleHeight;
var nComputedHeight = document.defaultView.getComputedStyle(elCollapsible).getPropertyValue("height");

var bClose = true;

function calcCollapsible() {
	if (window.innerWidth < 480) {

	    nCollapsibleHeight = elCollapsible.dataset.heightmobile;

	    if (nComputedHeight > elCollapsible.dataset.heightmobile) {

			elCollapsible.style.height = elCollapsible.dataset.heightmobile + 'px';
			elCollapsible.querySelector('.gradient').style.display = 'block';
			elCollapsibleLink.style.display = 'block';
			nCollapsibleHeight = elCollapsible.dataset.heightmobile;

		}

	} else if (window.innerWidth < 768) {

		nCollapsibleHeight = elCollapsible.dataset.heighttablet;

		if (nComputedHeight > elCollapsible.dataset.heighttablet) {

			elCollapsible.style.height = elCollapsible.dataset.heighttablet + 'px';
			elCollapsible.querySelector('.gradient').style.display = 'block';
			elCollapsibleLink.style.display = 'block';
			nCollapsibleHeight = elCollapsible.dataset.heighttablet;

		}

	} else {

		if (nComputedHeight > elCollapsible.dataset.heightdesktop) {

			elCollapsible.style.height = elCollapsible.dataset.heightdesktop + 'px';
			elCollapsible.querySelector('.gradient').style.display = 'block';
			elCollapsibleLink.style.display = 'block';
			nCollapsibleHeight = elCollapsible.dataset.heightdesktop;

		}

	}
}

window.onload = calcCollapsible;
window.onresize = calcCollapsible;


elCollapsibleLink.addEventListener('click', function(event){
    event.preventDefault();

    var offset = $(elCollapsible).offset(); // anchor position
    var nCollapsibleChildrenHeight = 0;

    if (bClose) {

    	elCollapsible.querySelector('.gradient').style.display = 'none';

    	for (var i = 0; i < elCollapsible.children.length; i++ ) {

            nCollapsibleChildrenHeight += elCollapsible.children[i].clientHeight + Number( document.defaultView.getComputedStyle(elCollapsible.children[i]).getPropertyValue("margin-bottom").replace('px','') );

        }

        elCollapsible.style.height = nCollapsibleChildrenHeight + 'px';

        this.innerHTML = this.dataset.copyend;
        bClose = !bClose;

    } else {
    	elCollapsible.querySelector('.gradient').style.display = 'block';

        elCollapsible.style.height = nCollapsibleHeight + 'px';
        this.innerHTML = this.dataset.copyinit;
        bClose = !bClose;
        $("html, body").animate({ scrollTop: offset.top - this.dataset.offset }, this.dataset.animation );
        var d = document.getElementById("collapsible");

        d.className = d.className + "";

    }

});
