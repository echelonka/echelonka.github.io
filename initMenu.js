function initMenu() {
  $('.submenu').hide();
  $('ul:first li').click(
    function() {
    	$(this).children('.submenu').slideToggle('fast');
      });
  }
	$(document).ready(function() {initMenu();});