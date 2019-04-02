
// PAGINATION

var page="";
var home_top = $(".home").offset().top;
var about_top = $(".about").offset().top;
var project_top = $(".project").offset().top;
// var contact_top = $(".contact").offset().top;
$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();
console.log( home_top );
console.log( home_top/2 );
if ( scrollTop > home_top) {
	page = "1";
	document.getElementById("page").innerHTML=page;
}
if ( scrollTop > about_top-about_top/2) {
	page = "2";
	document.getElementById("page").innerHTML=page;
}
if ( scrollTop > project_top-about_top/2) {
	page = 3;
	document.getElementById("page").innerHTML=page;
}
// if ( scrollTop > contact_top-about_top/2) {
// 	page = 4;
// 	document.getElementById("page").innerHTML=page;
// } 
});


// PETAL BLOCK
$(".topic_information").click(function() {
	 $( ".text_information" ).css( "display", "flex" );
	 $( ".text_knowledge" ).css( "display", "none" );
 	 $( ".text_resume" ).css( "display", "none" );
 	 // $( ".petal_information" ).css( "border-right", "none" );
 	 // $( ".petal_knowledge" ).css( "border-right", "2px solid #96A6C0" );
 	 // $( ".petal_resume" ).css( "border-right", "2px solid #96A6C0" );
	 $( ".text_information" ).addClass( "animated fadeIn " );

});
$(".topic_knowledge").click(function() {
	 $( ".text_information" ).css( "display", "none" );
	 $( ".text_knowledge" ).css( "display", "flex" );
 	 $( ".text_resume" ).css( "display", "none" );
 	 // $( ".petal_information" ).css( "border-right", "2px solid #96A6C0" );
 	 // $( ".petal_knowledge" ).css( "border-right", "none" );
 	 // $( ".petal_resume" ).css( "border-right", "2px solid #96A6C0" );
	 $( ".text_knowledge" ).addClass( "animated fadeIn " );


});
$(".topic_resume").click(function() {
	 $( ".text_information" ).css( "display", "none" );
	 $( ".text_knowledge" ).css( "display", "none" );
 	 $( ".text_resume" ).css( "display", "flex" );
 	 // $( ".petal_information" ).css( "border-right", "2px solid #96A6C0" );
 	 // $( ".petal_knowledge" ).css( "border-right", "2px solid #96A6C0" );
 	 // $( ".petal_resume" ).css( "border-right", "none" );
	 $( ".text_resume" ).addClass( "animated fadeIn " );
 	 
});


































