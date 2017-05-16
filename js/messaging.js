function messagingWebApp() {
  var textReply;

  var textareaReply = document.querySelector('.js-reply');

  if(textareaReply  !== null) {
	textareaReply.style.height = 44 + 'px';
	textareaReply.style.paddingTop = 10 + 'px';
    textareaReply.addEventListener('keydown', autosize);

    function autosize(){
      var el = this;
      setTimeout(function(){
    	  el.style.height = el.scrollHeight + 'px';
    	  if (el.getBoundingClientRect().height > 44) {
    		  el.style.paddingTop = 4 + 'px';
    	  } else {
    		  el.style.paddingTop = 10 + 'px';
    	  }
      },0);
    }

    textareaReply.addEventListener('keydown', function(event) {
      if (event.keyCode === 9) {
        document.querySelector('.js-btn-reply').focus();
        event.preventDefault();
      }
    });
  }

  scrollChat();

  //MOBILE VIEW
  var listChats = document.querySelectorAll('.js-list-chats li');
  var panelListChats = document.querySelector('.js-messaging-list-panel');
  var panelMessaging = document.querySelector('.js-messaging-detail-panel');
  var backMesaging = document.querySelector('.js-chat-back');

  window.addEventListener('resize', function() {
    if(panelListChats !== null && panelMessaging !== null && window.innerWidth >= 480) {
      panelListChats.classList.remove('hide');
      panelMessaging.classList.remove('show-move-left');
      panelMessaging.classList.remove('hide-move-right');
    }
  });

  if(listChats !== null) {
    [].forEach.call( listChats, function( target ){
      target.addEventListener('click', function() {
        if(window.innerWidth < 480) {
          panelMessaging.classList.remove('hide-move-right');
          panelListChats.classList.add('hide');
          panelMessaging.classList.remove('hide-small-device');
          panelMessaging.style.marginTop = '0';
          panelMessaging.classList.add('shadow');
          panelMessaging.classList.add('show-move-left');
        }
      })
    });
  }

  if(backMesaging !== null && window.innerWidth < 480) {
    backMesaging.addEventListener('click', function() {
      panelMessaging.classList.remove('show-move-left');
      panelMessaging.classList.add('hide-move-right');
      setTimeout(function(){
        panelListChats.classList.remove('hide');
        panelMessaging.classList.add('hide-small-device');
      }, 0400);

    })
  }

  //SCROLL CHAT
  var rowChat;
  var topChat;
  var totalViewport;

  function scrollChat() {
    rowChat = document.querySelector('.js-wrapper-chat .row');
    if(rowChat !== null) {

      if(window.innerWidth < 946) {
        totalViewport = window.innerHeight;
      } else {
        totalViewport = (window.innerHeight - 10);//10px de margen abajo en web app
      }

      topChat = rowChat.getBoundingClientRect().top;
      rowChat.style.height = (totalViewport - topChat) + 'px';
    }

  }
  window.addEventListener('resize', scrollChat);

  if(textareaReply  !== null) {
    textareaReply.focus();
  }

}

window.addEventListener('load', messagingWebApp);
window.addEventListener('ajax-success', messagingWebApp);
