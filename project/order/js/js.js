
// PAGINATION

var page="";
var home_top = $(".home").offset().top;
var about_top = $(".about").offset().top;
var project_top = $(".project").offset().top;
var technologies_top = $(".technologies").offset().top;
$(window).scroll(function() {
	var scrollTop = $(this).scrollTop();
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
if ( scrollTop > technologies_top-about_top/2) {
	page = 4;
	document.getElementById("page").innerHTML=page;
}
});






//КАРУСЕЛЬ

$("#project").ready(function(){
var owl = $('.project .owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true ,
    navText:["."," ."] ,
    mouseDrag:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        960:{
            items:3
        },
        1200:{
            items:3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
})


$("#technologies").ready(function(){
var owl = $('.technologies .owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:false ,
    navText:["."," ."] ,
    mouseDrag:true,
    margin:10,
	autoplay:true,
	autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },            
        960:{
            items:6
        },
        1200:{
            items:6
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
})



// CONTACT
$(".contact img").hover(function() {
	$(this).addClass('animated  flip')
}).mouseleave((function(){
	$(this).removeClass('animated  flip').delay(2000, 'queueName')
}));



	$(".burger img").click(function(event) {
		$(this).fadeOut(400, function() {
		});
		$(".burger_menu").fadeIn(400, function() {
		});
	});
	$(".burger_menu li a").click(function(event) {
		$(".burger_menu").fadeOut(400, function() {
		});
		$(".burger img").fadeIn(400, function() {
		});		
	});
	$(".burger_menu").click(function(event) {
		$(this).fadeOut(400, function() {
		});
		$(".burger img").fadeIn(400, function() {
		});	

	});