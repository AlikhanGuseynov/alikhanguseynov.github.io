$("button.home_btn").click(function (e) { 
  // исчезает первая страница
  $(".home_container").css({
    display:"none",
  });
  // меняет цвет шапки
  $(".header").css({
    backgroundColor: "#fff",
    opacity: "0.8",
  });
  // меняет фон
  $("section.home").addClass('quiz_bg');
  $("section.home").removeClass('home_bg');
// включает вопросы
    $(".quiz_container").css({
    display:"block",
  });
  
});

// Доработать

$(".swing_up").click(function(event) {
var lenght_fance =Number( $(".lenght_fance").val());
  lenght_fance = lenght_fance +1
  console.log(lenght_fance)

$(".lenght_fance").attr({
  value: lenght_fance,
});
});


// Перелистывание страницы
var a=1;
$("button.btn_next").click(function(event) {
$(".block_"+a).css({
  display: 'none',
});
  a = a+1;
$(".block_"+a).css({
  display: 'block',
});
// появление кнопки
if (a==10) {
  $(".btn_next").css({
    display: 'none',
  });
    $(".btn_send").css({
    display: "-webkit-flex",
    display: "-moz-flex",
    display: "-ms-flex",
    display: "-o-flex",
    display: "flex",
  });
};
// прогресс бар
$(".progress_bar_second").css({
  width: "calc(600px/11*"+ a +")"
});
if (a==10) {
  $(".progress_bar_second").css({
    width: "calc(600px/11*11)",
  });
};
// показатель рассчета
if (a==2) {
  $("p.calc_percent span").html("23")
  $("p.discount span").html("20")

}

if (a==3) {
  $("p.calc_percent span").html("33")
  $("p.discount span").html("30")
}

if (a==4) {
  $("p.calc_percent span").html("43")
  $("p.discount span").html("40")
}

if (a==5) {
  $("p.calc_percent span").html("53")
  $("p.discount span").html("50")
}

if (a==6) {
  $("p.calc_percent span").html("63")
  $("p.discount span").html("60")
}

if (a==7) {
  $("p.calc_percent span").html("73")
  $("p.discount span").html("70")
}

if (a==8) {
  $("p.calc_percent span").html("83")
  $("p.discount span").html("80")
}

if (a==9) {
  $("p.calc_percent span").html("93")
  $("p.discount span").html("90")
}

if (a==10) {
  $("p.calc_percent span").html("100")
  $("p.discount span").html("100")
}



















});
