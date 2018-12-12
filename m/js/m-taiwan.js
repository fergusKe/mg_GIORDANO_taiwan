(function() {
	$(function() {
		changeStep()
	});

	function changeStep() {
		// 切換 step
		var stepIndex = 1;
		var nextStepIndex = 0;
		var stepLength = 7;
		var j_wrap = $('.wrap');
		$(".next-btn").click(function() {
			if (stepIndex > stepLength) {
				stepIndex = 1;
			}
			nextStepIndex = stepIndex + 1;
			if (stepIndex >= stepLength) {
				nextStepIndex = 1;
				j_wrap.css('background', 'url("../images/taiwan/taiwan-bg.jpg") no-repeat');
			}
			// 會依據使用者選擇的地點切換背景圖
			if (nextStepIndex == 4) {
				console.log('step4');
				j_wrap.css('background', 'url("../images/taiwan/step4/bg1-1.jpg") no-repeat');
			}
			$(".step" + stepIndex + "").fadeOut(function() {
				$(".step" + nextStepIndex + "").fadeIn();
			});
			stepIndex++;
		});
	}
})(jQuery);