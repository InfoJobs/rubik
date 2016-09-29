
(function(){

  var elChosenToggle = $('.chosen-toggle');

  function dropChosen() {

    if(elChosenToggle !== null) {
      $('.chosen-toggle .chosen-single').ready(function(){

        $('.chosen-toggle .chosen-single').addClass('iconfont-Menumore');

      });
    }

  }

  window.addEventListener('load', dropChosen);

})();
