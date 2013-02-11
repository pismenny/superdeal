$(document).ready(function() {
	$('.city__change').click(function(event) {
		$('.location').slideToggle();
		return false;
	});
	$('.profile__user').click(function(event) {
		$('.profile__drop').fadeToggle('fast');
		return false;
	});

	$('.pics__wrap').each(function(event) {
		le = $(this).children().length;
		if(le>1){
			$(this).parent().addClass('pics_slider');
			var prev_arr = $(this).parent().children('.pics__prev');
	        var next_arr = $(this).parent().children('.pics__next');;
	        $(this).cycle({
	            fx:      'scrollHorz',
	            next:    next_arr,
	            prev:    prev_arr,
	            timeout:  0,
	            speed: 700
	        });
		}
	});
});