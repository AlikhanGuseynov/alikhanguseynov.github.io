$(window).scroll(function(event) {
	var home_height = $(".home").height();
	var window_scroll = $(window).scrollTop();
	if( window_scroll >= 100 ){
		$(".header .row").css({
			animationName: 'header_on',
		});
	}
	if( window_scroll < 100 ){
		$(".header .row").css({
			animationName: 'header_off',
		});
	}	
	if( window_scroll > home_height-home_height/2 ){
		$(".header .scrollTop").fadeIn('1500', function() {
		});	
	}
	if( window_scroll < home_height-home_height/2 ){
		$(".header .scrollTop").fadeOut('1500', function() {
		});	
	}
});


$('button.scrollTop').click(function() {
  $('html, body').animate({scrollTop: 0},500);
  return false;
});

$(document).ready(function(){
    $('.header a').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
