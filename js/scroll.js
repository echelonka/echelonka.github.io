$(document).ready(function () {
    let toTop = $('.top');

    $(window).scroll(
        () => ($(this).scrollTop() > 300) ? toTop.fadeIn() : toTop.fadeOut());
    toTop.css('opacity', .5)
        .click(function () {
            $('body,html').animate({scrollTop: 0}, 500);
        })
        .hover(function () {
                $(this).animate({opacity: 1}, 200);
            },
            function () {
                $(this).animate({opacity: .5}, 200);
            }
        );
});