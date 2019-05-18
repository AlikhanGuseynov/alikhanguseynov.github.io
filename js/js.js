$(".project_block img").hover(function() {
	$(this).addClass("animated pulse")
}, function() {
	$(this).removeClass("animated pulse")

});




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
	$("body section").eq(i).addClass("block");
});

