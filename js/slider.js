var a=[];
var b="";
var id="";
var did ="";
var bi="";
var idi="";
var didi ="";
var abc="";
var first =""; 
for (var i = 1; i <=5; i++) {
  	a[i] = document.getElementById(i)
}


$(".left").click(function() {
  	b = $(".show");
  	id =$(b).attr('id');
    did =document.getElementById(++id)
	$(b).removeClass('show');
	$(did).addClass('show');
	if (id == 6) {
	first = document.getElementById(1);
	$(first).addClass('show');
	} else {
	}
});




$(".right").click(function() {
  	bi = $(".show");
  	idi =$(bi).attr('id');
	var didi =document.getElementById(--idi)
	$(bi).removeClass('show');
	$(didi).addClass('show');
	console.log(idi);
	if (idi == 0) {
	first = document.getElementById(5);
	$(first).addClass('show');
	} else {
	}

});