$(function(){
	let url = $(location).attr('href'),
	href = url.substr(url.length - 2);
	console.log($('a.is-active').attr('href'));
	// $('#tabs').find('a').each(function(){
	// 	if (this.href === href) {
	// 		$(this).addClass('is-active');
	// 	}
	// });

	$('#tabs a').click(function(){
		url = $(this).attr('href');
		href = url.substr(url.length - 1);
		console.log(href);
		if (href >= 2) {
			if ($(this).attr('class') !== 'is-active') {
				$('.contentwrap').find('div.is-active').removeClass('is-active');
		    	$('#tabs').find('a.is-active').removeClass('is-active');
		    	$(this).addClass('is-active');
		    	$('.contentwrap').find('div.tab').eq($(this).index()-1).addClass('is-active');
			}
		}
	});
});