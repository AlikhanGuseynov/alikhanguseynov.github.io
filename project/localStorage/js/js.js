document.getElementById("clear").addEventListener("click", function clear(){
	localStorage.clear()
})


	var arr = [];



document.getElementById("get").addEventListener("click", function get(){
	var input = document.getElementById("input").value;
	var table = document.getElementById("table");
	let item = {
		name: input,
		compleated: false
	}
	arr.push(item);
	console.log(arr.length) // колличество элемнтов в массиве
		let last_arr = arr[arr.length - 1]
	console.log(last_arr.name) // колличество элемнтов в массиве
																// создание radio
		let radio = document.createElement('input');
		radio.className = "checkbox";
		radio.setAttribute('type', "checkbox")

																// создание li
		let li = document.createElement('li');
		li.className = "line";
		li.setAttribute('id', last_arr.name )
		li.innerHTML = last_arr.name;

																// создание label

		let label = document.createElement('label');
		label.className = "label";
		label.append(radio);
		label.append(li);

		table.append(label);

		console.log(label) 

})

