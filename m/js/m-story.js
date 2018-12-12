(function($) {
	$(function() {
		$('.step1 .next-btn').on('click', function() {
			$('.step1').fadeOut(function() {
				$('.step2').fadeIn();
			})
		});
		$('.human li').on('click', function() {
			var index = $(this).index();
			$(this).addClass('active').siblings('li').removeClass('active');
			$('.info li').eq(index).addClass('active').siblings('li').removeClass('active');
		});
	});
})(jQuery);