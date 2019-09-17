document.getElementById("clear").addEventListener("click", function clear(){
	localStorage.clear()
})



	var a = 0 ;

document.getElementById("get").addEventListener("click", function get(){
	let key = document.getElementById("key").value;
	let value = document.getElementById("value").value;
	a++;

	localStorage.setItem("key_" + a, value)

})



