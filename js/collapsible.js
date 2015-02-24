var elCollapsibleLink = document.querySelector('.js-collapsible-toggle');
var bClose = true;

elCollapsibleLink.addEventListener('click', function(event){
    event.preventDefault();

    var elCollapsible = document.querySelector('.js-collapsible');
    var offset = $(elCollapsible).offset();
    var nCollapsibleHeight;
    var nCollapsibleChildrenHeight = 0;

    if (window.innerWidth < 480) {
        nCollapsibleHeight = this.dataset.heightmobile;
    } else if (window.innerWidth < 768) {
        nCollapsibleHeight = this.dataset.heighttablet;
    } else {
        nCollapsibleHeight = this.dataset.heightdesktop;
    }

    elCollapsible.style.height = nCollapsibleHeight + 'px';

    if (bClose) {

        for (var i = 0; i < elCollapsible.children.length; i++ ) {

            nCollapsibleChildrenHeight += elCollapsible.children[i].clientHeight + Number( document.defaultView.getComputedStyle(elCollapsible.children[i]).getPropertyValue("margin-bottom").replace('px','') );

        }

        elCollapsible.style.height = nCollapsibleChildrenHeight + 'px';

        this.innerHTML = this.dataset.copyend;
        bClose = !bClose;

    } else {
        elCollapsible.style.height = nCollapsibleHeight + 'px';
        this.innerHTML = this.dataset.copyinit;
        bClose = !bClose;
        $("html, body").animate({ scrollTop: offset.top - this.dataset.offset }, this.dataset.animation );
    }

});
