$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 300) {
			$('.top').fadeIn();
		} else {
			$('.top').fadeOut();
		}
	});
	$('.top').css('opacity', .5);
	$('.top').click(function() {
		$('body,html').animate({scrollTop:0},500);
	});
	$('.top').hover(function(){
		$(this).animate({opacity: 1},200);
		},
		function(){
			$(this).animate({opacity: .5},200);
		}
		);
});