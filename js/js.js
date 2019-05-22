		$(".project_block img").hover(function() {
	$(this).addClass("animated pulse")
}, function() {
	$(this).removeClass("animated pulse")

});

// $("div.header .nav_menu li").eq(0).css("color", '#45d8e8');
// // $("div.header .nav_menu a").hover(function() {
// // 	$(".block").addClass("none");
// // 	$(".block").removeClass("block");




// // 	var link_a = $(this).attr("href") ;
// // 	console.log(link_a);
// // 	var link_href = document.getElementById(link_a);
// // 	link_href.classList.remove("none");
// // 	link_href.classList.add("block");
// // }, function() {
// // });


//--------------------------------- 	TERN THE LIST ---------------------------------
$("div.header .nav_menu li").click(function(event) {
	$(".block").addClass("none");
	$(".block").removeClass("block");
	var link_a = $(this).html() ;
	console.log(link_a);
	var link_href = document.getElementById(link_a);
	link_href.classList.remove("none");
	link_href.classList.add("block");
});

//--------------------------------------------- HEADER_COLOR ---------------------------------------------

// if( $(".about").css("margin-top") > "20px" ){
	// alert($(".about").css("margin-top")	)
// }

// $("div.header .nav_menu").click(function(event) {
// 	if( $(".about").css("margin-top")> '10px'  ){
// 		alert(123);
// 		console.log($(".about").css("margin-top"))
// 	}
// });


// //------------------------------------------ PAGINATION ------------------------------------------
// var i=0;
// var child_lenght=$("body section").length;
// console.log(child_lenght);
// $("button.right").click(function(event) {
// 	if (i > child_lenght-2 ) {
// 		i=child_lenght-2;
// 	};
// 	$("body section").eq(i).removeClass("block").addClass("none");

// 	i++;
// 	$("div.header .nav_menu li").eq(i).css("color", '#45d8e8');
// 	$("div.header .nav_menu li").eq(i-1).css("color", '');
// 	$("body section").eq(i).addClass("block");
// });

// $("button.left").click(function(event) {
// 	if (i == 0 ) {
// 		console.log("стоп");
// 		i=0;
// 		return i;
// 	}
// 		console.log(i)
// 	$("body section").eq(i).removeClass("block").addClass("none");
// 	i--;
// 	$("div.header .nav_menu li").eq(i).css("color", '#45d8e8');
// 	$("div.header .nav_menu li").eq(i+1).css("color", '#fff');
// 	$("body section").eq(i).addClass("block");
// });



	// var i=0;

	// $("body section").eq(i);
	// $(".header li").click(function(event) {
	// 	console.log($(this).eq())

	// });



