  function changeButtonText(){
    var elButton = document.querySelectorAll('.js-btn-change');
    var elText = document.querySelectorAll('.js-btn-change span');
    var mq = window.matchMedia( "(min-width: 769px)" );

    for(var i=0; i < elButton.length; i++){
      if (mq.matches) {
        elButton[i].classList.remove('iconfont-Close');
        elText[i].classList.remove('hide');

        elButton[i].style.marginRight = "0";
        elButton[i].style.paddingLeft = "10px";
      }
      else{
        elButton[i].classList.add('iconfont-Close');
        elText[i].classList.add('hide');

        elButton[i].style.marginRight = "-10px";
        elButton[i].style.paddingLeft = "12px";
      }
    }
  }

  window.addEventListener('load',changeButtonText);
  window.addEventListener('resize',changeButtonText);
