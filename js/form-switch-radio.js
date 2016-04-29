(function(){

	window.onload = function() {

	    var switchCheck = document.querySelectorAll('.switch-radio input');
	    var switchLabel = document.querySelector('.switch-radio label:last-of-type');
		var elSelector = document.querySelector('.js-to-show');

	    if(switchLabel) {

			var setSwitchPosFirstLabel = document.querySelector('.switch-radio label:first-of-type').getBoundingClientRect().right;
	        var switchPosFirstLabel = setSwitchPosFirstLabel;

	        switchLabel.onclick = function(event) {
	            if(switchCheck[1].checked == true && ( switchPosFirstLabel > event.clientX)) {
	                event.preventDefault();
	                for(var i = 0; i < switchCheck.length ; i++ ) {
	                    switchCheck[0].checked = true;
						setContainer();
	                }
	            }

	        }

	        window.addEventListener('resize', function() {
	            switchPosFirstLabel = setSwitchPosFirstLabel;
	        });

			// show something with this switcher.
			function setContainer() {
				if(switchCheck[1].checked == true) {
					console.log('abierto');
				} else if (switchCheck[0].checked == true) {
					console.log('cerrado');
				}
			};

        	for(var i = 0; i < switchCheck.length ; i++ ) {
				switchCheck[i].addEventListener('change', setContainer);
			}


	    }

	}

})();
