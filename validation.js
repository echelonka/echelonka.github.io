function validation(){
	$('.button').click(
		function(){
			var inputs = $('form input'),
			i = 0;
			for(i; i <= inputs.length; i++){
				if(inputs[i].value.length < 3)
					inputs[i].style.border='1px solid #ff3366';
				else inputs[i].style.border='none';
			};
	});
};
$(document).ready(function() {validation();});