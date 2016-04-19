(function(){

    var switchCheck = document.querySelectorAll('.switch-radio input');
    var switchLabel = document.querySelector('.switch-radio label:last-of-type');

    if(switchLabel) {
		var setSwitchPosFirstLabel = document.querySelector('.switch-radio label:first-of-type').getBoundingClientRect().right;
        var switchPosFirstLabel = setSwitchPosFirstLabel;

        switchLabel.onclick = function(event) {
            if(switchCheck[1].checked == true && ( switchPosFirstLabel > event.clientX)) {
                event.preventDefault();
                for(var i = 0; i < switchCheck.length ; i++ ) {
                    switchCheck[0].checked = true;
                }
            }

        }

        window.addEventListener('resize', function() {
            switchPosFirstLabel = setSwitchPosFirstLabel;
        });

		// show something with this switcher.
        for(var i = 0; i < switchCheck.length ; i++ ) {
			switchCheck[i].addEventListener('change', function () {
				if(switchCheck[1].checked === true) {
					toggleDiv(elSelector);
				} else {
					toggleDiv(elSelector);
				}
			});
		}

		var elSelector = document.querySelector('.js-to-show');
		// you can redefine this var, elSelector = your selector;

		function toggleDiv(elSelector) {
			if(elSelector) {
				elSelector.classList.toggle('hide');
			};
		}

    }



})();
