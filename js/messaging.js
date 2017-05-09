function messagingWebApp() {
  var inputReply = document.querySelector('.js-input-reply');
  var textReply;
  var btnReply;

  divInputText();

  function divInputText() {

    if(inputReply !==null) {

        divReply = inputReply.parentNode.querySelector('div[contenteditable]');
        btnReply = document.querySelector('.js-btn-reply');
        inputReply.onfocus = function(event) {

        	this.classList.add('hide');
        	this.parentNode.querySelector('div[contenteditable]').classList.add('appearance-input-text');
        	this.parentNode.querySelector('div[contenteditable]').classList.remove('hide');
        	this.parentNode.querySelector('div[contenteditable]').focus();
        	event.stopPropagation();

        	this.parentNode.querySelector('div[contenteditable]').onclick = function(event) {
        		event.stopPropagation();
        	}

      	  divReply.addEventListener('keydown', function(event) {
  		    if (event.keyCode === 9) {
  		    	btnReply.focus();
  		    	event.preventDefault();
  		    }

  		  });

        }

        divReply.onkeypress = function() {
        	valueReply();
        }
        divReply.onkeyup = function() {
        	valueReply();
        }

        function valueReply() {
        	var textReply = divReply.textContent;
        	inputReply.value = textReply;
        }

    }

  }

  document.querySelector('html').onclick = function() {

	  if(inputReply != null && inputReply.value.length === 0) {
      inputReply.classList.remove('hide');
      divReply.classList.remove('appearance-input-text');
      divReply.classList.add('hide');
    }

  };

  scrollChat();

  if(inputReply !==null) {
	  inputReply.focus();
  }

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

}

window.addEventListener('load', messagingWebApp);
window.addEventListener('ajax-success', messagingWebApp);
