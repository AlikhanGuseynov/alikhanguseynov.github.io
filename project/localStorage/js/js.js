document.getElementById("clear").addEventListener("click", function clear(){
	localStorage.clear()
})



	var a = 0 ;

document.getElementById("get").addEventListener("click", function get(){
	let key = document.getElementById("key").value;
	let value = document.getElementById("value").value;
	a++;

	localStorage.setItem("key_" + a, value)

	let table = document.getElementById("table");

	// var loc_key = localStorage.getItem("key_" + a)

	// var newString = table.insertAdjacentHTML('<div class="item">two</div>')   
	// newString.classList.add("item");
	
let div = document.createElement('div');

div.idName = "item";

	let div_item = document.getElementsByClassName("item")[0];

console.log(div_item)

// document.table.append(div_item)



})



