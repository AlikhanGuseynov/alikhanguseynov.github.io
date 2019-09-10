


var mql = window.matchMedia('all and (max-width: 990px)');
if (mql.matches) {
// Перелистывание страницы
var a=1;
$("button.btn_next").click(function(event) {
// прогресс бар
$(".progress_bar_second").css({
  width: "calc(420px/11*"+ a +")"
});
if (a==10) {
  $(".progress_bar_second").css({
    width: "calc(420px/11*11)",
  });
};
});
$("button.btn_prev").click(function(event) {
// прогресс бар
$(".progress_bar_second").css({
  width: "calc(420px/11*"+ a +")"
});
if (a==10) {
  $(".progress_bar_second").css({
    width: "calc(420px/11*11)",
  });
};
});
}

var mql = window.matchMedia('all and (max-width: 540px)');
if (mql.matches) {
// Перелистывание страницы
var a=1;
$("button.btn_next").click(function(event) {
// прогресс бар
$(".progress_bar_second").css({
  width: "calc(420px/11*"+ a +")"
});
if (a==10) {
  $(".progress_bar_second").css({
    width: "calc(420px/11*11)",
  });
};
});
$("button.btn_prev").click(function(event) {
// прогресс бар
$(".progress_bar_second").css({
  width: "calc(420px/11*"+ a +")"
});
if (a==10) {
  $(".progress_bar_second").css({
    width: "calc(420px/11*11)",
  });
};
});
}

var mql = window.matchMedia('all and (max-width: 440px)');
if (mql.matches) {
// Перелистывание страницы
var a=1;
$("button.btn_next").click(function(event) {
// прогресс бар
$(".progress_bar_second").css({
  width: "calc(320px/11*"+ a +")"
});
if (a==10) {
  $(".progress_bar_second").css({
    width: "calc(320px/11*11)",
  });
};
});
$("button.btn_prev").click(function(event) {
// прогресс бар
$(".progress_bar_second").css({
  width: "calc(320px/11*"+ a +")"
});
if (a==10) {
  $(".progress_bar_second").css({
    width: "calc(320px/11*11)",
  });
};
});
}

var mql = window.matchMedia('all and (min-width: 990px)');
if (mql.matches) {

// Перелистывание страницы
var a=1;
$("button.btn_next").click(function(event) {
// прогресс бар
$(".progress_bar_second").css({
  width: "calc(600px/11*"+ a +")"
});
if (a==10) {
  $(".progress_bar_second").css({
    width: "calc(600px/11*11)",
  });
};
});
$("button.btn_prev").click(function(event) {
// прогресс бар
$(".progress_bar_second").css({
  width: "calc(600px/11*"+ a +")"
});
if (a==10) {
  $(".progress_bar_second").css({
    width: "calc(600px/11*11)",
  });
};
});

}
