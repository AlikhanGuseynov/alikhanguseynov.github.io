$(".project img").hover(function() {
	$(this).css({
		animationName: 'project_on'
	});
}, function() {
	$(this).css({
		animationName: 'project_off'
	});
});


$("header li").click(function(event) {
	$("section").addClass("d-none");
	$("section").removeClass("d-block");
	var link_a = $(this).html() ;
	console.log(link_a);
	var link_href = document.getElementById(link_a);
	link_href.classList.remove("d-none");
	link_href.classList.add("d-block");
	var i = $(this).index();
	$("body").animate({
	backgroundPositionY: 100 - (i*25) + "%",
	},1000);

});
