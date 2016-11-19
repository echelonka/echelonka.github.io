$(function(){
	$('#tabs a').click(function() {
	    if ($(this).attr('class') !== 'is-active') {
	    	$('.contentwrap').find('div.is-active').removeClass('is-active');
	    	$('#tabs').find('a.is-active').removeClass('is-active');
	    	$(this).addClass('is-active');
	    	$('.contentwrap').find('div.tab').eq($(this).index()).addClass('is-active');
	    }
	});
});