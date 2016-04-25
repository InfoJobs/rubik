(function() {

	function switchRadioSetup(target) {

		var dataVars = JSON.parse(target.getAttribute("data-vars"));
		var onChange = eval(dataVars.onChange);

		var switchInputList = target.querySelectorAll("input");
		var switchLastLabel = target.querySelector("label:last-of-type");

		if (switchLastLabel) {

			function setContainer() {
				if (switchInputList[1].checked == true) {
					onChange("second");
				}
				else if (switchInputList[0].checked == true) {
					onChange("first");
				}
			};

			var setSwitchPosFirstLabel = target.querySelector("label:first-of-type").getBoundingClientRect().right;
			var switchPosFirstLabel = setSwitchPosFirstLabel;

			switchLastLabel.addEventListener("click", function(event) {
				if (switchInputList[1].checked == true && switchPosFirstLabel > event.clientX) {
					event.preventDefault();
					switchInputList[0].checked = true;
					setContainer();
				}
			});
			window.addEventListener("resize", function() {
				switchPosFirstLabel = setSwitchPosFirstLabel;
			});

			for (var i = 0; i < switchInputList.length ; i++) {
				switchInputList[i].addEventListener("change", setContainer);
			}
		}
	};

	window.addEventListener("load", function() {
		var containerList = document.querySelectorAll(".switch-radio");
		[].forEach.call(containerList, switchRadioSetup);
	});

})();
