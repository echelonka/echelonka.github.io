$(document).ready(function () {
    let tabs = $('#tabs'),
        tabLinks = tabs.find('a'),
        contentWrapper = $('.contentwrap');

    tabLinks.click(function () {
        if ($(this).attr('class') !== 'is-active') {
            contentWrapper.find('div.is-active').removeClass('is-active');
            tabs.find('a.is-active').removeClass('is-active');
            $(this).addClass('is-active');
            contentWrapper.find('div.tab').eq($(this).index()).addClass('is-active');
        }
    });
});