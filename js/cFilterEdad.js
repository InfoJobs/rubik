	var decimals = 0;
	var maxRange = 65;
	var minRange = 16;
	var MODE_YEAR = 3;
	var AGE_MIN = 16;
	var AGE_MAX = 65;

	function initSliderSalary(minValue,maxValue, modeSlider, init){
		if(typeof modeSlider=='undefined' || modeSlider==0){modeSlider = MODE_YEAR;}
		mode = modeSlider;
		var idDiv = $("#mode_"+mode);
		var isActive = idDiv.closest("div").hasClass("active");

		if(!isActive){

			$("div[id^='mode_']").removeClass("active");
			idDiv.toggleClass("active");

			 $("#salary").noUiSlider({
					start: [ minValue, maxValue],
					step: 1,
          connect: true,
					range: {
						'min': [ minRange ],
						'max': [ maxRange ]
					},
					serialization: {
						lower: [
								$.Link({
									target: $("#minRange")
								})
						],
						upper: [
								$.Link({
									target: $("#maxRange")
								})
						],
						format: {
							decimals: decimals
						}
					}
				}, init);

			$("#salary").val(minValue,true);
			$("#minRange").html(minRange);
			$("#maxRange").html(maxRange);
		}
	}
