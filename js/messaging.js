function messagingWebApp() {
  var inputReply = document.querySelector('.js-input-reply');
  var textReply;
  var btnReply;

  divInputText();

  function divInputText() {

    if(inputReply !==null) {

        divReply = inputReply.parentNode.querySelector('div[contenteditable]');
        btnReply = document.querySelector('.js-btn-reply');
        inputReply.onclick = function(event) {

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
    if(inputReply.value.length === 0) {
      inputReply.classList.remove('hide');
      divReply.classList.remove('appearance-input-text');
      divReply.classList.add('hide');
    }

  };

  scrollChat();

  if(inputReply !==null) {
	  inputReply.focus();
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
