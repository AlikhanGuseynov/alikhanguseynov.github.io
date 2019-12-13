
var mql = window.matchMedia('all and (max-width: 540px)');
if (mql.matches) {
	$(document).ready(function(){
   $('.guest-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.guest-slider-nav',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button" onclick="slide_next()">  </button>'
  });

  $('.guest-slider-nav').slick({
    slidesToScroll: 1,
    asNavFor: '.guest-slider-for',
    infinite: true,
    slidesToShow: 2 
  });
});
}
var mql = window.matchMedia('all and (max-width: 740px)');
if (mql.matches) {
	$(document).ready(function(){
   $('.guest-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.guest-slider-nav',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button" onclick="slide_next()">  </button>'
  });

  $('.guest-slider-nav').slick({
    slidesToScroll: 1,
    asNavFor: '.guest-slider-for',
    infinite: true,
    slidesToShow: 2 
  });
});
}
var mql = window.matchMedia('all and (max-width: 990px)');
if (mql.matches) {
	$(document).ready(function(){
   $('.guest-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.guest-slider-nav',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button" onclick="slide_next()">  </button>'
  });

  $('.guest-slider-nav').slick({
    slidesToScroll: 1,
    asNavFor: '.guest-slider-for',
    infinite: true,
    slidesToShow: 3 
  });
});
}
var mql = window.matchMedia('all and (max-width: 1024px)');
if (mql.matches) {
	$(document).ready(function(){
   $('.guest-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.guest-slider-nav',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button" onclick="slide_next()">  </button>'
  });

  $('.guest-slider-nav').slick({
    slidesToScroll: 1,
    asNavFor: '.guest-slider-for',
    infinite: true,
    slidesToShow: 4 
  });
});
}

var mql = window.matchMedia('all and (max-width: 2000px)');
if (mql.matches) {
	$(document).ready(function(){
   $('.guest-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.guest-slider-nav',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button" onclick="slide_next()">  </button>'
  });

  $('.guest-slider-nav').slick({
    slidesToScroll: 1,
    asNavFor: '.guest-slider-for',
    infinite: true,
    slidesToShow: 5 
  });
});
}


	//------------------- Animation For CIRCLE
	
var mql = window.matchMedia('all and (max-width: 2000px)');
if (mql.matches) {
function circle(){
	   $('.circle_1').circleProgress({
      value: 0.40,
      size: 208,
      fill: {
        gradient: ["#FF6F60"]
      },
      startAngle: 3.1,
      thickness: 5,
      lineCap: 'round',
  });
	   $('.circle_2').circleProgress({
      value: 0.65,
      size: 208,
      fill: {
        gradient: ["#FF6F60"]
      },
      startAngle: 3.1,
      thickness: 5,
      lineCap: 'round'

  });
	   $('.circle_3').circleProgress({
      value: 0.45,
      size: 208,
      fill: {
        gradient: ["#FF6F60"]
      },
      startAngle: 3.1,
      thickness: 5,
      lineCap: 'round'

  });
	   $('.circle_4').circleProgress({
      value: 1,
      size: 150,
      fill: {
        gradient: ["#FFB7AF"]
      },
      startAngle: 3.1,
      thickness: 5,
      lineCap: 'round',
      reverse: true,
      animation: { duration: 2400, easing: "circleProgressEasing" }

  });
};

}
	
// var mql = window.matchMedia('all and (max-width: 990px)');
// if (mql.matches) {
// function circle(){
// 	   $('.circle_1').circleProgress({
//       value: 0.40,
//       size: 180,
//       fill: {
//         gradient: ["#FF6F60"]
//       },
//       startAngle: 3.1,
//       thickness: 5,
//       lineCap: 'round',
//   });
// 	   $('.circle_2').circleProgress({
//       value: 0.65,
//       size: 180,
//       fill: {
//         gradient: ["#FF6F60"]
//       },
//       startAngle: 3.1,
//       thickness: 5,
//       lineCap: 'round'

//   });
// 	   $('.circle_3').circleProgress({
//       value: 0.45,
//       size: 180,
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

// }






