var page="";
var home_top = $(".home").offset().top;
// console.log(home_top);
var about_top = $(".about").offset().top;
// console.log(about_top);
var projrct_top = $(".project").offset().top;
// console.log(projrct_top);
var contact_top = $(".contact").offset().top;
// console.log(contact_top);


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
if ( scrollTop > projrct_top-about_top/2) {
	page = 3;
	document.getElementById("page").innerHTML=page;
}
if ( scrollTop > contact_top-about_top/2) {
	page = 4;
	document.getElementById("page").innerHTML=page;
} 

});

















