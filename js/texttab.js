$(document).ready(function () {
    let url = $(location).attr('href'),
        href = url.substr(url.length - 2),
        tabs = $('#tabs'),
        tabLinks = tabs.find('a');

    function tab(link, img) {
        let contentWrapper = $('.contentwrap');
        contentWrapper.find('div.is-active').removeClass('is-active');
        tabs.find('a.is-active').removeClass('is-active');
        link.addClass('is-active');
        contentWrapper.find('div.tab').eq(link.index() - 1).addClass('is-active');
        $('.hero').css('background-image', `url('${img}')`);
    }

    function changeImage() {
        href = href.substr(href.length - 1) - 1;
        return `img/img${href}.jpg`;
    }

    tabLinks.each(() => ($(this).attr('href') === href) ? tab($(this), changeImage) : false);
    tabLinks.click(function () {
        url = $(this).attr('href');
        href = url.substr(url.length - 1);
        if ($(this).attr('class') !== 'is-active') {
            tab($(this), changeImage());
            $('body, html').animate({scrollTop: 0}, 0);
        }
    });

    tab(tabs.find(`a[href="${href}"]`), changeImage());
});