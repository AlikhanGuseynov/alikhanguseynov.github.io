document.getElementById("clear").addEventListener("click", function clear(){
	localStorage.clear()
})
	var table = document.getElementById("table")
	var a = 0 ;
	let qwer = {
	};
console.log(value)
document.getElementById("get").addEventListener("click", function get(){
	a++;
	var value = document.getElementById("value").value;
	qwer["item_" + a] = value; // создает ключь со значением value
	let qwerObj = JSON.stringify(qwer); // преобразует объект в строку
	localStorage.setItem("key", qwerObj ); // прердает значение qwerObj в localStorage
	let getItem = localStorage.getItem("key"); // получает занчение key из localStorage 
	let parseItems = JSON.parse(getItem); // преобразует строку в объект
	var eachItems =  Object.values(parseItems); // получает все значения объекта
	table.innerHTML = eachItems; // передает в значения объекта в id="table"
	console.log(eachItems[a-1]);


})



