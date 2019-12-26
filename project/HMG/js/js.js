// //------------------- Animation For SLIDER
// $(document).ready(function(){
//   $('.result-slider').slick({
// 	  infinite: true,
// 	  slidesToShow: 1,
// 	  slidesToScroll: 1,
//     nextArrow: '<button type="button" class="slick-next"> </button>',
//     prevArrow: '<button type="button" class="slick-prev"> </button>'
//   });
//   $('.review-slider').slick({
// 	  infinite: true,
// 	  slidesToShow: 1,
// 	  slidesToScroll: 1,
//     dots: true,
//   });
// });

// $(document).ready(function(){
//    $('.guest-slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: true,
//     asNavFor: '.guest-slider-nav',
//     nextArrow: '<button class="slick-next" aria-label="Next" type="button" onclick="slide_next()">  </button>'
//   });

//   $('.guest-slider-nav').slick({
//     slidesToScroll: 1,
//     asNavFor: '.guest-slider-for',
//     infinite: false,
//     // slidesToShow: 5,   
//   });
// });
	


// //------------------- Animation For CIRCLE
// function circle(){
// 	   $('.circle_1').circleProgress({
//       value: 0.40,
//       size: 208,
//       fill: {
//         gradient: ["#FF6F60"]
//       },
//       startAngle: 3.1,
//       thickness: 5,
//       lineCap: 'round',
//   });
// 	   $('.circle_2').circleProgress({
//       value: 0.65,
//       size: 208,
//       fill: {
//         gradient: ["#FF6F60"]
//       },
//       startAngle: 3.1,
//       thickness: 5,
//       lineCap: 'round'

//   });
// 	   $('.circle_3').circleProgress({
//       value: 0.45,
//       size: 208,
//       fill: {
//         gradient: ["#FF6F60"]
//       },
//       startAngle: 3.1,
//       thickness: 5,
//       lineCap: 'round'

//   });
// 	   $('.circle_4').circleProgress({
//       value: 1,
//       size: 150,
//       fill: {
//         gradient: ["#FFB7AF"]
//       },
//       startAngle: 3.1,
//       thickness: 5,
//       lineCap: 'round',
//       reverse: true,
//       animation: { duration: 2400, easing: "circleProgressEasing" }

//   });
// };



//------------------- Else Animation For CIRCLE 
  var compleated = true;
$(window).scroll(function(event) {
  var window_scroll = $(window).scrollTop();
  let circle_top = $("#result").offset().top;
  let top = window.screen.height;
  let end = circle_top - top;
  //
  console.log(end)
  console.log(window_scroll)
  //
  if (window_scroll > end && compleated) {
  circle();
  compleated = false
  }
});


//------------------- Animation For NUMBER
$(document).ready(function () {
    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 2500
            });
            show = false;
        }
    });
});


//------------------- Animation For POP UP
$(".guest_item").click(function(){
  $('.pop_up').css({
    'visibility': 'visible'
  });
});
$(".close").click(function(){
  $('.pop_up').css({
    'visibility': 'hidden '
  });
})
// закрытие при нажатии вне окна для слайдера
$(document).mouseup(function (e){ // событие клика по веб-документу
  var div = $(".pop_up"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
    $('.pop_up').css({
      'visibility': 'hidden '
    });
  }
});

// закрытие при нажатии вне окна для меню
$(document).mouseup(function (e){ // событие клика по веб-документу
  var div = $("nav"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
      
  $('ul.nav_menu li').css({
    'display': 'none'
  });
  $('nav ul.nav_menu').css({
    'background-color': 'transparent'
  });
  $('.burger_menu').css({
    'display': 'block'
  });
  $('.close_menu').css({
    'display': 'none'
  });
    
      
  }
});


//------------------- Animation For SCROLL
$(document).ready(function(){
    $('.down_btn').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });
});
//------------------- Animation For MENU
$(document).ready(function(){
    $('.why_menu_item').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
      return false;
    });
});
$(document).ready(function(){
    $('.guest_menu_item').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
      return false;
    });
});
$(document).ready(function(){
    $('.partner_menu_item').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
      return false;
    });
});

$(".burger_menu").click(function(){
  $('ul.nav_menu li').css({
    'display': 'block'
  });
  $('nav ul.nav_menu').css({
    'background-color': '#FF6F60'
  });
  $('.burger_menu').css({
    'display': 'none'
  });
  $('.close_menu').css({
    'display': 'block'
  });
});
$(".close_menu").click(function(){
  $('ul.nav_menu li').css({
    'display': 'none'
  });
  $('nav ul.nav_menu').css({
    'background-color': 'transparent'
  });
  $('.burger_menu').css({
    'display': 'block'
  });
  $('.close_menu').css({
    'display': 'none'
  });
})



$(window).scroll(function(event) {
  var window_scroll = $(window).scrollTop();
  //
  if (window_scroll > 50) {
    $('header').css({
      "background-color": '#FFEEEC',
    });
  }
  if (window_scroll < 50) {
    $('header').css({
      "background-color": '#fff',
    });
  }
});