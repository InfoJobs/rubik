var inputReply;
var divReply;
var textReply;

function divInputText() {

  inputReply = document.querySelector('.js-input-reply');
  divReply = inputReply.parentNode.querySelector('div[contenteditable]');
  console.log(divReply);

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
    var textReply = divReply.innerText;
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

window.addEventListener('load', divInputText);
