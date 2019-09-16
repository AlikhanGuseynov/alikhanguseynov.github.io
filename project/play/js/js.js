// добавление класса active
$(".player").click(function(event) {
	$(".active").removeClass("active");
	$(this).addClass("active");
});

// вписывание значения в таблицу
$("td").click(function(event) {

});

$("td").click(function(event) {
	let active_player = $(".active").html();
	if ($(this).hasClass("active_td") == true){	
	}else(
		$(this).html(active_player),

		$(this).addClass('active_td') 
		)
});
// изменение активного игрока
$("td").click(function(event) {
	if ($(".player").hasClass("active")) {
		if ($(".x_men").hasClass('active')) {
			$(".x_men").removeClass('active');
			$(".0_men").addClass('active')
		}else{
			$(".0_men").removeClass('active');
			$(".x_men").addClass('active')		
		}
	}
});
// Всплывающая подсказка, выбора игрока
$("table").click(function(event) {
	if (!$(".player").hasClass('active')) {
	alert("Для начала выберите игрока!!!")
	}
});

// Restart
$(".restart").click(function(event) {
	$(".active").removeClass('active')
	$("td").html("");
});