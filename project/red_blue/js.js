function add_color( color ){
	document.getElementById(color).classList.add(color)
}

function change_color( color ){
	let obj = document.getElementById(color);
	if (obj.classList.contains("red")) {
		document.getElementById('blue').classList.remove('blue');
	}else{
		document.getElementById('red').classList.remove('red');
	};
} 

function progress( id ){
	let prog = document.getElementsByClassName("men")[0];
	let td_id = document.getElementById(id);
	if ( prog.classList.contains('blue') ){
		td_id.classList.add( "blue" )
	}else{
		td_id.classList.add( "red" )
	}
}

function step(){
	let prog = document.getElementsByClassName("men")[0];
	if (prog.classList.contains('blue')){
		document.getElementById('blue').classList.remove('blue');
		document.getElementById('red').classList.add('red');
	}else{
		document.getElementById('blue').classList.add('blue');
		document.getElementById('red').classList.remove('red');
	}
}


function check( blue, red ){
	let box = document.getElementsByClassName("box");
	if( box[0].classList.contains(blue) && box[1].classList.contains(blue) && box[2].classList.contains(blue)){
		alert( "ПОБЕДИЛ " + blue )
	}else if( box[3].classList.contains(blue) && box[4].classList.contains(blue) && box[5].classList.contains(blue)  ){
		alert( "ПОБЕДИЛ " + blue )
	}else if( box[6].classList.contains(blue) && box[7].classList.contains(blue) && box[8].classList.contains(blue)  ){
		alert( "ПОБЕДИЛ " + blue )
	}

	if( box[0].classList.contains(blue) && box[3].classList.contains(blue) && box[6].classList.contains(blue)){
		alert( "ПОБЕДИЛ " + blue )
	}else if( box[1].classList.contains(blue) && box[4].classList.contains(blue) && box[7].classList.contains(blue)  ){
		alert( "ПОБЕДИЛ " + blue )
	}else if( box[2].classList.contains(blue) && box[5].classList.contains(blue) && box[8].classList.contains(blue)  ){
		alert( "ПОБЕДИЛ " + blue )
	}

	if( box[0].classList.contains(blue) && box[4].classList.contains(blue) && box[8].classList.contains(blue)){
		alert( "ПОБЕДИЛ " + blue )
	}else if( box[2].classList.contains(blue) && box[4].classList.contains(blue) && box[6].classList.contains(blue)  ){
		alert( "ПОБЕДИЛ " + blue )
	}



	if( box[0].classList.contains(red) && box[1].classList.contains(red) && box[2].classList.contains(red)){
		alert( "ПОБЕДИЛ " + red )
	}else if( box[3].classList.contains(red) && box[4].classList.contains(red) && box[5].classList.contains(red)  ){
		alert( "ПОБЕДИЛ " + red )
	}else if( box[6].classList.contains(red) && box[7].classList.contains(red) && box[8].classList.contains(red)  ){
		alert( "ПОБЕДИЛ " + red )
	}

	if( box[0].classList.contains(red) && box[3].classList.contains(red) && box[6].classList.contains(red)){
		alert( "ПОБЕДИЛ " + red )
	}else if( box[1].classList.contains(red) && box[4].classList.contains(red) && box[7].classList.contains(red)  ){
		alert( "ПОБЕДИЛ " + red )
	}else if( box[2].classList.contains(red) && box[5].classList.contains(red) && box[8].classList.contains(red)  ){
		alert( "ПОБЕДИЛ " + red )
	}

	if( box[0].classList.contains(red) && box[4].classList.contains(red) && box[8].classList.contains(red)){
		alert( "ПОБЕДИЛ " + red )
	}else if( box[2].classList.contains(red) && box[4].classList.contains(red) && box[6].classList.contains(red)  ){
		alert( "ПОБЕДИЛ " + red )
	}
}


function clear_all(){

	let all_color = document.getElementsByClassName("box")

	for( let i=0; i< all_color.length; i++ ){
		console.log(all_color[i])
		all_color[i].classList.remove("red");
		all_color[i].classList.remove("blue");

	}

}