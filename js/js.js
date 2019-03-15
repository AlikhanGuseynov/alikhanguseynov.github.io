$(".contact img").hover(function() {
	$(this).addClass('animated  flip')
}).mouseleave((function(){
	$(this).removeClass('animated  flip').delay(2000, 'queueName')
}));

$(document).ready(function(){
    $('.home a, .footer a').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});


$(window).scroll(function() {
	var target = $(this).scrollTop();
	var circle_min = $(".about").offset().top/2.3;
	var circle_max = $(".about").offset().top*1.5;
// console.log(target);
// console.log(circle_black);
if((target > circle_min)&& (target < circle_max)){
  $( ".circle" ).css('border',"2px solid #fff");
  $( ".ball" ).css( "background-color", "#000" );
  $( ".ball" ).css( "box-shadow", "0 0 25px 1px #000" )
} else {
  $( ".circle" ).css('border',"2px solid #e5322d");
  $( ".ball" ).css( "background-color", "#fff" )

  $( ".ball" ).css( "box-shadow", "0 0 25px 1px #fff" )
}
});

// 	var home = $("#home").offset().top;
	var about = $("#about").offset().top;
// 	var progect = $("#progect").offset().top;
// 	var contact = $("#contact").offset().top;
// 		console.log(home);
		console.log(about);
// 		console.log(progect);
// 		console.log(contact);



// $(window).scroll(function() {
// 	var target = $(this).scrollTop();
// 		console.log(target);

// if((target > home) || (target < about)){
// 	$(".c_1").addClass('heartBeat');

// } else {
// 	$(".c_1").removeClass("heartBeat");

// }
// });



// $(window).scroll(function() {
// 	var target = $(this).scrollTop();
// 		console.log(target);

// if((target > about) && (target < 2000)){
// 	$(".c_2").addClass('heartBeat');

// } else {
// 	$(".c_2").removeClass("heartBeat");

// }
// });
