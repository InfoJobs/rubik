(function(){

    function scrollHeader () {
        var elHeader = document.querySelector('header');
        var scrollY = window.pageYOffset;
        var sPaddingLeft;

        if (window.innerWidth > 1200) {
             sPaddingLeft = '280px';
        } else {
            sPaddingLeft = '0';
        }

        if( scrollY > 20 ){
         elHeader.classList.add('sg-header-scroll');
         document.querySelector('h1').style.display = 'block';
         document.querySelector('h1').style.paddingLeft = sPaddingLeft;
         document.querySelector('h1').parentNode.style = 'box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);';

        } else { // to repeat animation
         document.querySelector('h1').style.display = 'none';
         document.querySelector('h1').style.paddingLeft = sPaddingLeft;
         document.querySelector('h1').parentNode.style = 'box-shadow: none;';

        }

      }

      window.addEventListener('scroll', scrollHeader);
      window.addEventListener('load', scrollHeader);
      window.addEventListener('resize', scrollHeader);
})();
