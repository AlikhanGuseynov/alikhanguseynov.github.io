//////////////////////////////////
////////////////////////// SLICK
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

///////////////////////////////////
//////////////////////// вывод колличества слайдов
var slides_amount = $(".years_slider .slider_nav div").length;
$(".years_slider p.slides_amount").html("/" + slides_amount);

///////////////////////////////////
//////////////////////// вывод номера слайда
var slide_number = 1;
$(".years_slider p.slide_number").html(slide_number);

///////////////////////////////////
//////////////////////// кнопка next
function slide_next(){
if (slide_number < slides_amount ) {
slide_number++;
}else{
	slide_number = 1;
}
$(".years_slider p.slide_number").html(slide_number);
};

///////////////////////////////////
//////////////////////// кнопка prev
function slide_prev(){
if (slide_number > 1 ) {
slide_number--;
}else{
	slide_number = slides_amount;
}
$(".years_slider p.slide_number").html(slide_number);
}





////////////////
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
});
