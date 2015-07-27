  function changeButtonText(){
    var elButton = document.querySelector('.js-btn-change');
    var elText = document.querySelector('.js-btn-change span');
    var mq = window.matchMedia( "(min-width: 769px)" );
    if (mq.matches) {
      elButton.classList.remove('iconfont-Close');
      elText.classList.remove('hide');

      elButton.style.marginRight = "0";
      elButton.style.paddingLeft = "10px";
    }
    else{
      elButton.classList.add('iconfont-Close');
      elText.classList.add('hide');

      elButton.style.marginRight = "-10px";
      elButton.style.paddingLeft = "12px";
    }
  }

  window.addEventListener('load',changeButtonText);
  window.addEventListener('resize',changeButtonText);
