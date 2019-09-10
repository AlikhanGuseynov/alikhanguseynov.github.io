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
// PREV
$("button.btn_prev").click(function(event) {
  $(".block_"+a).css({
  display: 'none',
});
  a = a-1;
$(".block_"+a).css({
  display: 'block',
});
if (a==1) {
  $(".btn_prev").css({
    display: 'none',
  });
};
if (a!==1) {
  $(".btn_next").css({
    display: '',
  });
};
if (a!==10) {
  $(".btn_send").css({
    display: 'none',
  });
};

});


// NEXT
$("button.btn_next").click(function(event) {
$(".block_"+a).css({
  display: 'none',
});
  a = a+1;
$(".block_"+a).css({
  display: 'block',
});
// PREV
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
if (a!==1) {
  $(".btn_prev").css({
    display: '',
  });
};
if (a!==10) {
  $(".btn_send").css({
    display: 'none',
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

// изменение цвета кнопки при нажатии


$(".block_3 .border_btn").click(function(event) {
  $(".border_btn").removeClass('active');
  $(this).addClass('active');
});




$(".block_6 .border_btn").click(function(event) {
  $(".block_6 .border_btn").removeClass('active');
  $(this).addClass('active');
});

$(".block_8 .border_btn").click(function(event) {
  $(".block_8 .border_btn").removeClass('active');
  $(this).addClass('active');
});

$(".block_9 .border_btn").click(function(event) {
  $(".block_9 .border_btn").removeClass('active');
  $(this).addClass('active');
});







// ОТПРАВКА ФОРМЫ

$("button.btn_send").click(function(event) {

//  block_1
var  block_1 = $("input[name=block_1]:checked").val();

//  block_2
var  block_2 = $("input[name=block_2]").val();

//  block_3

if ($(".block_3 .border_btn").hasClass('active')) {
  var block_3 = $(".border_btn.active").attr("value");
}else{
  var block_3 = $("input[name=block_3]").val();
};

//  block_4
var  block_4 =  $("input[name=block_4]:checked").val();

//  block_5
var  block_5 =  $("input[name=block_5]:checked").val();

//  block_6
var  block_6 =  $(".block_6_answer button.active").attr("value");

//  block_7
var  block_7 =  $("input[name=block_7]").val();

//  block_8
var  block_8 =  $(".block_8_answer button.active").attr("value");


//  block_9
var  block_9 =  $(".block_9 .active").attr("value");

//  block_10
var  block_10_1 =  $("input[name=block_7]").val();
var  block_10_2 =  $("input[name=block_7]").val();


var send_box = "1. Какой тип забора вы хотите? : " + block_1 + "; 2. Какой длины будет забор? : " + block_2 + "м" + "; 3. Какой высоты будет забор? : " + block_3 + "м"
+ "; 4. Будут ли у Вас ворота? : " + block_4 + " ; 5. Будет ли у Вас калитка? : " + block_5 + "; 6.  Вам потребуется автоматический привод для ворот? : " + block_6
+ "; 7. Где находится участок который нужно оградить? : " + block_7 + "; 8. Вам нужен демонтаж старого забора? : " + block_8 + " ; 9. Вам нужен фундамент под забор? : " + block_9
+ "; 10. Имя клиента: " + block_10_1 + ", номер: " + block_10_2 + ".";


$(".send_box").val(send_box) ;

console.log(block_1);
console.log(block_2);
console.log(block_3);
console.log(block_4);
console.log(block_5);
console.log(block_6);
console.log(block_7);
console.log(block_8);
console.log(block_9);
console.log(block_10_1);
console.log(block_10_2);
});
