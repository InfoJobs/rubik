(function(){

    var switchCheck = document.querySelectorAll('.switch-radio input');
    var switchLabel = document.querySelector('.switch-radio label:last-of-type');

    if(switchLabel) {

        switchLabel.onclick = function(event) {
            if(switchCheck[1].checked === true) {
                event.preventDefault();
                var i;
                for(i = 0; i < switchCheck.length ; i++ ) {
                    switchCheck[0].checked = true;
                    switchCheck[1].checked = false;
                }
            }

        }
    }
})();
