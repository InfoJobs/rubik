(function(){

    var switchCheck = document.querySelectorAll('.switch-radio input');
    var switchLabel = document.querySelector('.switch-radio label:last-of-type');

    if(switchLabel) {
        var switchPosFirstLabel = document.querySelector('.switch-radio label:first-of-type').getBoundingClientRect().right;

        switchLabel.onclick = function(event) {
            if(switchCheck[1].checked === true && ( switchPosFirstLabel > event.clientX)) {
                event.preventDefault();
                for(var i = 0; i < switchCheck.length ; i++ ) {
                    switchCheck[0].checked = true;
                }
            }
        }
    }
})();
