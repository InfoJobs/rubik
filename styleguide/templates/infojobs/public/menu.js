// Main menu and Float menu

var offset = 210;
var floatMenu = document.querySelector('.js-menu-float');
var eFloatMenuItem = document.querySelectorAll('.js-nav-float > li');
var eMainMenuItem = document.querySelectorAll('.js-main-menu li');
var eSubMenu = document.querySelectorAll('.js-submenu');

//scroll float menu fixed
function floatMenuFixed() {

    if ($(this).scrollTop() > offset) {
         floatMenu.classList.add('fixed');
     } else {
         floatMenu.classList.remove('fixed');
     }

};

// If url active menu
for (var i=0; i <= eMainMenuItem.length; i++) {

    if(window.location.href.indexOf('section-' + (i+1) ) > -1) {
        //active main menu
        eMainMenuItem[i].classList.toggle('active');
        //active float menu
        eFloatMenuItem[i].classList.toggle('active');
        // show items section in float menu
        eSubMenu[i].classList.toggle('show-submenu');

        document.querySelector('.js-h1').textContent = eMainMenuItem[i].textContent;
        document.querySelector('.js-description-'+ i).style.display = 'block';
    }
}

// scroll menu

var elHeading = document.querySelectorAll('.sg-block');

function scrollspy () {

    var total;
    var scrollY = window.pageYOffset;
    var elHref = document.querySelectorAll('.js-submenu > li > a');
    var elHeadingId;
    var elLinkId;
    var elLinkNext;
    var elLinkPrev;

    for ( var i = 0; i < elHeading.length; i++) {
        total = (elHeading[i].parentNode.offsetTop + elHeading[i].offsetTop) - window.innerHeight;

        if(total - scrollY <= 0) {

            elHeadingId = elHeading[i].id;

            for ( var j = 0; j < elHref.length; j++) {

                elLinkId = elHref[j].getAttribute('href').split('#');
                elLinkId = elLinkId[1];
                elLinkNext = elHref[j].parentNode.nextElementSibling;
                elLinkPrev = elHref[j].parentNode.previousElementSibling;

                if( elHeadingId == elLinkId) {
                    elHref[j].parentNode.classList.add('active-submenu');

                    if(elLinkPrev) {
                        elLinkPrev.classList.remove('active-submenu');
                    }
                    if(elLinkNext) {
                        elLinkNext.classList.remove('active-submenu');
                    }
                }

            }

        }
    }

}

window.addEventListener('scroll', scrollspy);
window.addEventListener('load', scrollspy);
window.addEventListener('resize', scrollspy);
window.addEventListener('scroll', floatMenuFixed);
window.addEventListener('load', floatMenuFixed);
window.addEventListener('resize', floatMenuFixed);
