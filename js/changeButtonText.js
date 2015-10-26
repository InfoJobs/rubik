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


  //change copy text

  (function(){

  	function changeCopy() {

  		var eCopy = document.querySelectorAll(".js-copy-device");

  		[].forEach.call( eCopy, function( target ){

  			if (window.innerWidth > 480) {
  			    // target.textContent = target.getAttribute("data-desktop");
  			    target.textContent = target.dataset.desktop;
  			} else {
  			    // target.textContent = target.getAttribute("data-mobile");
  			    target.textContent = target.dataset.mobile;
  			}

  		});

  	}

  	window.addEventListener('load', changeCopy);
  	window.addEventListener('resize', changeCopy);

  }());
