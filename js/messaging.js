function messagingWebApp() {

  var inputReply;
  var divReply;
  var textReply;

  divInputText();

  function divInputText() {
    inputReply = document.querySelector('.js-input-reply');

    if(inputReply !==null) {
        divReply = inputReply.parentNode.querySelector('div[contenteditable]');
    }

    inputReply.onclick = function(event) {
        this.classList.add('hide');
        this.parentNode.querySelector('div[contenteditable]').classList.add('appearance-input-text');
        this.parentNode.querySelector('div[contenteditable]').classList.remove('hide');
        this.parentNode.querySelector('div[contenteditable]').focus();
        event.stopPropagation();

        this.parentNode.querySelector('div[contenteditable]').onclick = function(event) {
          event.stopPropagation();
        }
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

  document.querySelector('html').onclick = function() {
    if(inputReply.value.length === 0) {
      inputReply.classList.remove('hide');
      divReply.classList.remove('appearance-input-text');
      divReply.classList.add('hide');
    }

  };

  scrollChat();

  //SCROLL CHAT
  var rowChat;
  var topChat;
  var totalViewport;

  function scrollChat() {
    rowChat = document.querySelector('.js-wrapper-chat .row');
    totalViewport = window.innerHeight;
    if(rowChat !== null) {
      topChat = rowChat.getBoundingClientRect().top;
      rowChat.style.height = (totalViewport - topChat) + 'px'
    }

  }
  window.addEventListener('resize', scrollChat);

}

window.addEventListener('load', messagingWebApp);
window.addEventListener('ajax-success', messagingWebApp);
