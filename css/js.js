$(document).ready(function() {
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > altura) {
			$('.menu').addClass('menu-sticky');
		} else {
			$('.menu').removeClass('menu-sticky');
		}
	});
});
