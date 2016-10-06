
(function(){

  var elChosenToggle = $('.chosen-toggle');

  function dropChosen() {

    if(elChosenToggle !== null) {
      $('.chosen-toggle .chosen-single').ready(function(){
        
        if (window.innerWidth < 481) {
          $('.chosen-toggle').addClass('iconfont-Menumore iconfont-24px');
          $('.chosen-toggle').css('padding-top','5px');
        }
        else {
          $('.chosen-toggle .chosen-single').addClass('iconfont-Menumore');
        }

      });
    }

  }

  window.addEventListener('load', dropChosen);

})();
