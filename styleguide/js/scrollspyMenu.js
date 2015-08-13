var elMenu = document.getElementById('sg-menu');
//var elMenuItem = document.querySelector('.js-itemMenu');
var elMenuSections = elMenu.getElementsByTagName('a');
var elHref;
var elHeading = document.querySelectorAll('.sg-block');
// var elHeading = document.getElementById('rubik-1.2.1');


function scrollspy () {

    var topPos;
    var myScroll;
    var scrollY = window.pageYOffset; // desplazamiento scroll
    var total = window.innerHeight; // alto ventana offset
    var elHrefId;


    for ( var i = 0; i < elHeading.length; i++) {

        //console.log(elHeading[i].id);

        topPos = elHeading[i].offsetTop; // distancia del top del offset (viewport)
        myScroll = topPos - (total + scrollY); // posicion del objeto en la ventana offset
        //for ( var j = 0; j < elMenuSections.length; j++) {
        //console.log(myScroll);
        // if( elMenu.querySelector('.sg-active') ){
            elMenu.querySelector('.sg-active').classList.remove('sg-active');
        // }

        if (myScroll < 0) {
          //elMenu.querySelector('a[href*="'+ elHeading[i].id + '"]').style = 'color: red';
          if(elMenu.querySelector('a[href*="'+ elHeading[i].id + '"]')) {
            //alert("hola");
            elMenu.querySelector('a[href*="'+ elHeading[i].id + '"]').classList.add('sg-active');
          }
          //elMenu.querySelector('a[href*="rubik-1.1"]').style = 'color: red';

        }

            //elHref = elMenuSections[j].getAttribute('href').split('#');
            //elHrefId = elHref[elHref.length - 1];
            // //elHrefId = elMenuSections[1].getAttribute('href').substring(elHref);
            //console.log(elHeading[j].id +' == '+ elHrefId);
            //
            // if ( elHeading.id === elHrefId) {
            //
            //     elMenuSections[i].style = 'color: red;';
            //     document.querySelector('h1').innerHTML = elMenuSections[i].innerHTML;
            //
            // }
        //}

    }

}

window.addEventListener('scroll', scrollspy);
window.addEventListener('load', scrollspy);
window.addEventListener('resize', scrollspy);
