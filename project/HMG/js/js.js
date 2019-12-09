$(document).ready(function(){
  $('.guest-slider').slick({
  	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  nextArrow: '<button class="slick-next" aria-label="Next" type="button" onclick="slide_next()">  </button>'
  });
  $('.result-slider').slick({
  	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  // nextArrow: '<button class="slick-next" aria-label="Next" type="button" onclick="slide_next()">  </button>'
  });
  $('.review-slider').slick({
  	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  // nextArrow: '<button class="slick-next" aria-label="Next" type="button" onclick="slide_next()">  </button>'
  });

});