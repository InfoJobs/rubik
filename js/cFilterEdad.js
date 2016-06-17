	var decimals = 0;
	var maxRange = 65;
	var minRange = 16;
	var MODE_YEAR = 3;
	var AGE_MIN = 16;
	var AGE_MAX = 65;

	function initSliderSalary(minValueSalary, modeSlider, init){
		if(typeof modeSlider=='undefined' || modeSlider==0){modeSlider = MODE_YEAR;}
		mode = modeSlider;
		var idDiv = $("#mode_"+mode);
		var isActive = idDiv.closest("div").hasClass("active");

		if(!isActive){

			$("div[id^='mode_']").removeClass("active");
			idDiv.toggleClass("active");

			 $("#salary").noUiSlider({
					start: [ minValueSalary ],
					step: 1,
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
						format: {
							decimals: decimals
							//mark: '.'
						}
					}
				}, init);

			$("#salary").val(minValueSalary,true);
			$("#minRange").html(minRange);
			$("#maxRange").html(maxRange);
		}
	}
