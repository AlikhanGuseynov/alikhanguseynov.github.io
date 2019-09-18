$("button.home_btn").click(function (e) { 
  // исчезает первая страница
  $(".home_container").css({
    display:"none",
  });
  // меняет цвет шапки
  $(".header").css({
    backgroundColor: "#fff",
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
  lenght_fance = lenght_fance + 1;
$(".lenght_fance").attr({
  value: lenght_fance,
});
});


// Перелистывание страницы
var a=1;
// ------------PREV
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
    // display: 'none',
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
if (a==1) {
  $("p.master_text").html('“ Установка забора - это одна из первых задач, к которой приступает владелец коттеджа, приусадебного участка или загородной дачи. Хороший забор является  лицом Вашего дома, это символ защищенности, надежности и даже уровня достатка. “');
}
if (a==2) {
  $("p.calc_percent span").html("23");
  $("p.discount span").html("20");
  $("p.master_text").html('“ Для выполнения замеров используйте обычную рулетку. Отмеряя 5-метровые отрезки, ставьте на шнуре заметки маркером,так вам будет проще ориентироваться. Все показания обязательно записывайте.  Для этого можно нарисовать небольшую план-схему и отмечать на ней замеренные участки. “');
}
if (a==3) {
  $("p.calc_percent span").html("33");
  $("p.discount span").html("30");
  $("p.master_text").html('“ Собственный дом с участком – это уютный мир,который хочется скрыть от посторонних глаз.И дай волю каждому – он бы выстроил 10 метровую стену и жил за ней тихо и мирно,не зная проблем и соседей. На самом деле, здесь все зависит от Ваших отношений с соседями. Если Вы можете договориться между собой, то ограничений нет.“"');
}

if (a==4) {
  $("p.calc_percent span").html("43");
  $("p.discount span").html("40");
  $("p.master_text").html('“ Начнем с простого: определите какой ширины проезд. Вас вполне устроит. Не делайте ворота более узкими, чем 3.0м. Только в исключительных случаях. Ширину легче всего определить "по-бытовому". В выбранном для ворот месте просто вбейте колья и попробуйте заехать. Если заезд сложный и не чувствуете себя уверенно, то расширьте ворота хотя бы на метр. “');
}

if (a==5) {
  $("p.calc_percent span").html("53");
  $("p.discount span").html("50");
  $("p.master_text").html('“ Помимо задачи ограждать, калитка несет в себе также декоративные функции. А говорить о важности функциональности калитки излишне, ведь без хорошего ограждения имущество будет  подвержено опасности. “');
}

if (a==6) {
  $("p.calc_percent span").html("63");
  $("p.discount span").html("60");
  $("p.master_text").html('“ При установке распашных или откатных ворот необходимо определить какая автоматика для них будет лучше. Современные системы просты в обслуживании, практически бесшумны и стоят недорого. Именно поэтому наличие автоматики в наши дни является непременным атрибутом комфортной жизни. “');
}

if (a==7) {
  $("p.calc_percent span").html("73");
  $("p.discount span").html("70");
  $("p.master_text").html('“ Мы подберем для Вас наиболее удобное время для замера “');
}

if (a==8) {
  $("p.calc_percent span").html("83");
  $("p.discount span").html("80");
  $("p.master_text").html('“ Демонтаж старого забора в 90% случаях производится силами заказчика или дешевой рабочей сильной нанятой им. При этом стараясь максимально облегчить себе работу, выполняют его таким образом, что последующая установка забора значительно усложняется, что влечет за собой повышение стоимости работ. Ломать - не строить, но правильно сломать тоже надо уметь. “');
}

if (a==9) {
  $("p.calc_percent span").html("93");
  $("p.discount span").html("90");
  $("p.master_text").html('“ Выбор фундамента под забор является весьма непростой задачей, сам фундамент подбирается в зависимости от типа и конструкции забора, который вы планируете возвести. “');
}

if (a==10) {
  $("p.calc_percent span").html("100");
  $("p.discount span").html("100");
  $("p.master_text").html('“ Ответив на 10 вопросов мы предоставляем Вам скидку 100р. на установку любого вида забора, так же при заказе забора от 50 метров вы получаете калитку в подарок. “');
}
});


// --------------------NEXT
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
  $("p.calc_percent span").html("23");
  $("p.discount span").html("20");
  $("p.master_text").html('“ Для выполнения замеров используйте обычную рулетку. Отмеряя 5-метровые отрезки, ставьте на шнуре заметки маркером,так вам будет проще ориентироваться. Все показания обязательно записывайте.  Для этого можно нарисовать небольшую план-схему и отмечать на ней замеренные участки. “');
}
if (a==3) {
  $("p.calc_percent span").html("33");
  $("p.discount span").html("30");
  $("p.master_text").html('“ Собственный дом с участком – это уютный мир,который хочется скрыть от посторонних глаз.И дай волю каждому – он бы выстроил 10 метровую стену и жил за ней тихо и мирно,не зная проблем и соседей. На самом деле, здесь все зависит от Ваших отношений с соседями. Если Вы можете договориться между собой, то ограничений нет.“"');
}

if (a==4) {
  $("p.calc_percent span").html("43");
  $("p.discount span").html("40");
  $("p.master_text").html('“ Начнем с простого: определите какой ширины проезд. Вас вполне устроит. Не делайте ворота более узкими, чем 3.0м. Только в исключительных случаях. Ширину легче всего определить "по-бытовому". В выбранном для ворот месте просто вбейте колья и попробуйте заехать. Если заезд сложный и не чувствуете себя уверенно, то расширьте ворота хотя бы на метр. “');
}

if (a==5) {
  $("p.calc_percent span").html("53");
  $("p.discount span").html("50");
  $("p.master_text").html('“ Помимо задачи ограждать, калитка несет в себе также декоративные функции. А говорить о важности функциональности калитки излишне, ведь без хорошего ограждения имущество будет  подвержено опасности. “');
}

if (a==6) {
  $("p.calc_percent span").html("63");
  $("p.discount span").html("60");
  $("p.master_text").html('“ При установке распашных или откатных ворот необходимо определить какая автоматика для них будет лучше. Современные системы просты в обслуживании, практически бесшумны и стоят недорого. Именно поэтому наличие автоматики в наши дни является непременным атрибутом комфортной жизни. “');
}

if (a==7) {
  $("p.calc_percent span").html("73");
  $("p.discount span").html("70");
  $("p.master_text").html('“ Мы подберем для Вас наиболее удобное время для замера “');
}

if (a==8) {
  $("p.calc_percent span").html("83");
  $("p.discount span").html("80");
  $("p.master_text").html('“ Демонтаж старого забора в 90% случаях производится силами заказчика или дешевой рабочей сильной нанятой им. При этом стараясь максимально облегчить себе работу, выполняют его таким образом, что последующая установка забора значительно усложняется, что влечет за собой повышение стоимости работ. Ломать - не строить, но правильно сломать тоже надо уметь. “');
}

if (a==9) {
  $("p.calc_percent span").html("93");
  $("p.discount span").html("90");
  $("p.master_text").html('“ Выбор фундамента под забор является весьма непростой задачей, сам фундамент подбирается в зависимости от типа и конструкции забора, который вы планируете возвести. “');
}

if (a==10) {
  $("p.calc_percent span").html("100");
  $("p.discount span").html("100");
  $("p.master_text").html('“ Ответив на 10 вопросов мы предоставляем Вам скидку 100р. на установку любого вида забора, так же при заказе забора от 50 метров вы получаете калитку в подарок. “');
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
var  block_10_1 =  $("input[name=block_10_1]").val();
var  block_10_2 =  $("input[name=block_10_2]").val();
console.log(block_10_1);
console.log(block_10_2);

var send_box = "1. Какой тип забора вы хотите? : " + block_1 + "; 2. Какой длины будет забор? : " + block_2 + "м" + "; 3. Какой высоты будет забор? : " + block_3 + "м"
+ "; 4. Будут ли у Вас ворота? : " + block_4 + " ; 5. Будет ли у Вас калитка? : " + block_5 + "; 6.  Вам потребуется автоматический привод для ворот? : " + block_6
+ "; 7. Где находится участок который нужно оградить? : " + block_7 + "; 8. Вам нужен демонтаж старого забора? : " + block_8 + " ; 9. Вам нужен фундамент под забор? : " + block_9
+ "; 10. Имя клиента: " + block_10_1 + ", номер: " + block_10_2 + ".";


$(".send_box").val(send_box) ;
});

// кнопки качалки
function up_2(a) {
  let input = document.getElementById("input_number_2");
  in_val = Number( input.value )
  in_val = in_val + a;
  input.value  = in_val;
} 
function up_3(a) {
  let input = document.getElementById("input_number_3");
  in_val = Number( input.value )
  in_val = in_val + a;
  input.value  = in_val;
} 


function connect() {
  $(".form_container").css({
    display: "-webkit-flex",
    display: "-moz-flex",
    display: "-ms-flex",
    display: "-o-flex",
    display: "flex",
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  });
  $("body").css({
  });
}

function closeForm() {

  $(".form_container").css({
    display: "none",
    backgroundColor: ' ',
  });
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;


