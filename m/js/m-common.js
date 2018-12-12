(function() {
	$(function() {
		setButton();
	});
	function setButton() {
		$('.nav .award').on('click', function() {
			alert('敬請期待');
		});
		$('.nav-btn').on('click', function() {
			$('.nav').fadeIn();
		});
		$('.nav .nav-close-btn').on('click', function() {
			$('.nav').fadeOut();
		});
	}
})(jQuery);