////////////////// SLICK
$(document).ready(function(){
$('.years_slider .slider-for').slick({ 
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.years_slider .slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '10px',
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button" onclick="slide_prev()"> </button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button" onclick="slide_next()"> </button>',
});
});
/////////////// вывод колличества слайдов
var slides_amount = $(".years_slider .slider_nav div").length;
$(".years_slider p.slides_amount").html("/" + slides_amount);

//////////////////////// вывод номера слайда
var slide_number = 1;
$(".years_slider p.slide_number").html(slide_number);

//////////////////////// кнопка next
function slide_next(){
if (slide_number < slides_amount ) {
slide_number++;
}else{
	slide_number = 1;
}
$(".years_slider p.slide_number").html(slide_number);
};

//////////////////////// кнопка prev
function slide_prev(){
if (slide_number > 1 ) {
slide_number--;
}else{
	slide_number = slides_amount;
}
$(".years_slider p.slide_number").html(slide_number);
}
//////////////// второй слайдер
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
});
//////////////// всплывающий слайдер
$('.up_slider_drag').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-prev up_slider_btn up_slider_btn_prev" aria-label="Previous" type="button""> </button>',
  nextArrow: '<button class="slick-next up_slider_btn up_slider_btn_next" aria-label="Next" type="button""> </button>',
  responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    ]
});

// ВСПЛЫВАЮШИЙ СЛАЙДЕР
$(".div_item li").click(function(event) {
 var btn_class = $(this).attr('class');
 $(".up_slider_box").css({
   display: 'block',
 });
$("." + btn_class + "_block").addClass('display_flex')
});

$("button.close_slider").click(function(event) {
  $(".up_slider_box .display_flex").removeClass('display_flex');
  $('.up_slider_box').css({
    display: 'none',
  });
});

// кнопка заказа звонка
$(".btn_form").click(function(event) {
  $(".block_form").css({
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  });
});
$(".form .btn, button.close_cross").click(function(event) {
  $(".block_form").css({
    display: 'none',
  });
});


