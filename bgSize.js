function bgSize(){
	$('.hover-effect a').hover(
		function (){
			$(this).children('.bg').css({'transform': 'scale(1.1)', 'opacity': '.8'});
		},
		function(){
			$(this).children('.bg').css({'transform': 'scale(1)', 'opacity': '.3'});
		});
};
$(document).ready(function() {bgSize();});