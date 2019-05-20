$(".project_block img").hover(function() {
	$(this).addClass("animated pulse")
}, function() {
	$(this).removeClass("animated pulse")

});

$("div.header .nav_menu a").eq(0).css("color", '#45d8e8');




//------------------------------------------ PAGINATION ------------------------------------------
var i=0;
var child_lenght=$("body section").length;
console.log(child_lenght);
$("button.right").click(function(event) {
	if (i > child_lenght-2 ) {
		i=child_lenght-2;
	};
	$("body section").eq(i).removeClass("block").addClass("none");

	i++;
	$("div.header .nav_menu a").eq(i).css("color", '#45d8e8');
	$("div.header .nav_menu a").eq(i-1).css("color", '#fff');
	$("body section").eq(i).addClass("block");
});

$("button.left").click(function(event) {
	if (i == 0 ) {
		console.log("стоп");
		i=0;
		return i;
	}
		console.log(i)
	$("body section").eq(i).removeClass("block").addClass("none");
	i--;
	$("div.header .nav_menu a").eq(i).css("color", '#45d8e8');
	$("div.header .nav_menu a").eq(i+1).css("color", '#fff');
	$("body section").eq(i).addClass("block");
});

