var timer = 10;
document.querySelector('#timer').innerHTML = timer;

var countDown = function(){

	if(timer > 0){
		timer--;
		document.querySelector('#timer').innerHTML = timer;
	}
	else {
		clearInterval(countDown);
		// location.reload();
	}
}

var nextQuestion = function(){

}


$(document).ready(function(){

setInterval(countDown, 1000);


})