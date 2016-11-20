$(function(){

	var url = $(location).attr('href'),
	href = url.substr(url.length - 2);

	function tab(link, img){
		$('.contentwrap').find('div.is-active').removeClass('is-active');
		$('#tabs').find('a.is-active').removeClass('is-active');
		link.addClass('is-active');
		$('.contentwrap').find('div.tab').eq(link.index()-1).addClass('is-active');
		$('.hero').css('background-image', img);
	}

	function img(){
		href = href.substr(href.length-1)-1;
		var img = "url(img/img"+href+".jpg)";
		return img;
	}

	$('#tabs').find('a').each(function() {
		if ($(this).attr('href') == href) {
			tab($(this), img());
		}
	});

	$('#tabs a').click(function(){
		url = $(this).attr('href');
		href = url.substr(url.length - 1);
		if ($(this).attr('class') !== 'is-active') {
			tab($(this), img());
			$('body,html').animate({scrollTop:0},0);
		}
	});

});