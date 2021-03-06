(function(){
    var elNotificationAdvice;
    var elNotificationToast;
    var notificationClose;
    var heightToast;
    var heightbody;
    var heightfooter;

    function adviceNotification() {
      elNotificationAdvice = document.querySelectorAll('.js-notification-advice');
      if (elNotificationAdvice.length > 0) {
        [].forEach.call( elNotificationAdvice, function( target ){
            target.firstElementChild.classList.remove('is-closed');
          notificationClose = target.querySelector('.js-notification-close');

          notificationClose.addEventListener('click', function() {
            target.firstElementChild.classList.add('is-closed');
            }
          );

        });
      }
    }

    function toastNotification() {
      elNotificationToast = document.querySelectorAll('.js-notification-toast');
      if (elNotificationToast.length > 0) {
        [].forEach.call( elNotificationToast, function( target ){
          heightbody = target.querySelector('.notification-body');
          heightfooter = target.querySelector('.notification-footer');
          if(heightfooter !== null) {
            heightToast = heightbody.offsetHeight + heightfooter.offsetHeight;
          } else {
            heightToast = heightbody.offsetHeight;
          }
          target.firstElementChild.style.height = heightToast + 'px';
          target.firstElementChild.style.borderBottom = '1px solid rgba(0, 0, 0, 0.4)';
          notificationClose = target.querySelector('.js-notification-close');

          notificationClose.addEventListener('click', function() {
              hideNotification(target);
          });

          window.addEventListener('hideToast', function() {
              hideNotification(target);
          });

        });
      }
    }

    function hideNotification(target) {
        target.firstElementChild.style.height = '0';
        target.firstElementChild.style.borderBottom = '0 none';
    }

    function isFixed() {
    	var notificationFixed = document.querySelectorAll('.js-notification-toast');
    	var scrollY = window.pageYOffset;

		[].forEach.call( notificationFixed, function( target ){
			if(scrollY > 10) {
				target.firstElementChild.classList.add('is-fixed');
			} else {
				target.firstElementChild.classList.remove('is-fixed');
			}
		});
    }

    window.addEventListener('showToast', function() {
      adviceNotification();
      toastNotification();
      isFixed();
    });

    window.addEventListener('load', function() {
      adviceNotification();
      toastNotification();
      isFixed();
    });

    window.addEventListener('scroll', function() {
    	isFixed();
    });

})();
