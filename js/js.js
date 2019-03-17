$(".contact img").hover(function() {
	$(this).addClass('animated  flip')
}).mouseleave((function(){
	$(this).removeClass('animated  flip').delay(2000, 'queueName')
}));

$(document).ready(function(){
    $('.home a, .footer a, .circle_box a').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});



// МЕНЮ СЛАЙДЕРА
  var home = $("#home").offset().top;
  var about = $("#about").offset().top;
  var progect = $("#progect").offset().top;
  var contact = $("#contact").offset().top;
$(window).scroll(function() {
	var target = $(this).scrollTop();
		console.log(target);
if(target < about-about/3){
	$("#c_1").addClass('heartBeat');
	$("#b_1").addClass('ball');
} else {
	$("#c_1").removeClass('heartBeat');
	$("#b_1").removeClass('ball');
}
if((target < progect-about/3)&&(target > about-about/3)){
	$("#c_2").addClass('heartBeat');
	$("#b_2").addClass('ball');
} else {
	$("#c_2").removeClass('heartBeat');
	$("#b_2").removeClass('ball');
}
if((target < contact-about/3)&&(target > progect-about/3)){
	$("#c_3").addClass('heartBeat');
	$("#b_3").addClass('ball');
} else {
	$("#c_3").removeClass('heartBeat');
	$("#b_3").removeClass('ball');
}
if(target > contact-about/3){
	$("#c_4").addClass('heartBeat');
	$("#b_4").addClass('ball');
} else {
	$("#c_4").removeClass('heartBeat');
	$("#b_4").removeClass('ball');
}
});


// ПАРАЛАКС ЭФФЕКТ
$(window).ready(function(b){
     var elem=$('.e_1');                         //movement element
    var factor = 0.02;                          //movement coefficient
    var elem_left = elem.offset().left;
    var elem_top = elem.offset().top;
    console.log(elem_left, elem_top );
    $('.home').mousemove(function(e) {           //the area in which the mouse is moving 
      var X = e.pageX;                          //X axis position
      var Y = e.pageY;                          //Y axis position
      if (X > 0) {
        elem.animate({
        left: elem_left-(X*factor) + "px",
        top: elem_top-(Y*factor) + "px",
        position: "absolute",
        }, 1);

        console.log(X, elem_left, elem_left-X*factor + "px" );

      } else {
      };
    });
});
$(window).ready(function(b){
     var elem=$('.e_2');                         //movement element
    var factor = 0.02;                          //movement coefficient
    var elem_left = elem.offset().left;
    var elem_top = elem.offset().top;
    console.log(elem_left, elem_top );
    $('.home').mousemove(function(e) {           //the area in which the mouse is moving 
      var X = e.pageX;                          //X axis position
      var Y = e.pageY;                          //Y axis position
      if (X > 0) {
        elem.animate({
        left: elem_left-(X*factor) + "px",
        top: elem_top-(Y*factor) + "px",
        position: "absolute",
        }, 1);

        console.log(X, elem_left, elem_left-X*factor + "px" );

      } else {
      };
    });
});
$(window).ready(function(b){
     var elem=$('.e_3');                         //movement element
    var factor = -0.02;                          //movement coefficient
    var elem_left = elem.offset().left;
    var elem_top = elem.offset().top;
    console.log(elem_left, elem_top );
    $('.home').mousemove(function(e) {           //the area in which the mouse is moving 
      var X = e.pageX;                          //X axis position
      var Y = e.pageY;                          //Y axis position
      if (X > 0) {
        elem.animate({
        left: elem_left-(X*factor) + "px",
        top: elem_top-(Y*factor) + "px",
        position: "absolute",
        }, 1);

        console.log(X, elem_left, elem_left-X*factor + "px" );

      } else {
      };
    });
});
$(window).ready(function(b){
     var elem=$('.e_4');                         //movement element
    var factor = 0.05;                          //movement coefficient
    var elem_left = elem.offset().left;
    var elem_top = elem.offset().top;
    console.log(elem_left, elem_top );
    $('.home').mousemove(function(e) {           //the area in which the mouse is moving 
      var X = e.pageX;                          //X axis position
      var Y = e.pageY;                          //Y axis position
      if (X > 0) {
        elem.animate({
        left: elem_left-(X*factor) + "px",
        top: elem_top-(Y*factor) + "px",
        position: "absolute",
        }, 1);

        console.log(X, elem_left, elem_left-X*factor + "px" );

      } else {
      };
    });
});
$(window).ready(function(b){
     var elem=$('.e_5');                         //movement element
    var factor = 0.05;                          //movement coefficient
    var elem_left = elem.offset().left;
    var elem_top = elem.offset().top;
    console.log(elem_left, elem_top );
    $('.home').mousemove(function(e) {           //the area in which the mouse is moving 
      var X = e.pageX;                          //X axis position
      var Y = e.pageY;                          //Y axis position
      if (X > 0) {
        elem.animate({
        left: elem_left-(X*factor) + "px",
        top: elem_top-(Y*factor) + "px",
        position: "absolute",
        }, 1);

        console.log(X, elem_left, elem_left-X*factor + "px" );

      } else {
      };
    });
});
$(window).ready(function(b){
     var elem=$('.e_6');                         //movement element
    var factor = -0.12;                          //movement coefficient
    var elem_left = elem.offset().left;
    var elem_top = elem.offset().top;
    console.log(elem_left, elem_top );
    $('.home').mousemove(function(e) {           //the area in which the mouse is moving 
      var X = e.pageX;                          //X axis position
      var Y = e.pageY;                          //Y axis position
      if (X > 0) {
        elem.animate({
        left: elem_left-(X*factor) + "px",
        top: elem_top-(Y*factor) + "px",
        position: "absolute",
        }, 1);

        console.log(X, elem_left, elem_left-X*factor + "px" );

      } else {
      };
    });
});

// ИЗМЕНЕНИЕ ЦВЕТА


$(window).ready(function(b){
     var elem=$('.content h1');                         //movement element
    var factor = 1;                          //movement coefficient
    var elem_left = elem.offset().left;
    var elem_top = elem.offset().top;
    console.log(elem_left, elem_top );
    $('.home').mousemove(function(e) {           //the area in which the mouse is moving 
      var X = e.pageX;                          //X axis position
      var Y = e.pageY;                          //Y axis position
      if (X > 0) {
        elem.animate({
        // left: elem_left-(X*factor) + "px",

        // filter: hue-rotate(X*Y + "deg"),
        filter: blur(X*Y + "deg"),




        }, 1);

        console.log(X, elem_left, elem_left-X*factor + "px" );

      } else {
      };
    });
});


