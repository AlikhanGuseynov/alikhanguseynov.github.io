$(".burger").click(function(event) {
	$(this).fadeOut('fast', function() {
	});
	$("#nav-menu_hidden").css({
		display: 'flex'
	});
});
$("#nav-menu_hidden").click(function(event) {
	$(this).fadeOut('fast', function() {
	});
	$(".burger").fadeIn('fast', function() {
	});
});



