//------------------- Else Animation For CIRCLE 
  var compleated = true;
$(window).scroll(function(event) {
  var window_scroll = $(window).scrollTop();
  let circle_top = $("#result").offset().top;
  let top = window.screen.height;
  let end = circle_top - top;
  //
  // console.log(end)
  // console.log(window_scroll)
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
    'background-color': '#FF6F60',
    'height': '260px'
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
    'background-color': 'transparent',
    'height': '40px',
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