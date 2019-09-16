	var x_men = document.getElementsByClassName("x_men")[0]; 
	var o_men = document.getElementsByClassName("o_men")[0]; 
function player(asd) {
	if (x_men.classList.contains("active")) {
		x_men.classList.remove('active');
	}else{
		o_men.classList.remove('active');
	};
	asd.classList.add("active");
}



	var td = document.querySelector("td");






document.querySelector("td").addEventListener("click", myFunction);

function myFunction() {

  // document.getElementById("table").innerHTML = "YOU CLICKED ME!";

console.log(123)

}