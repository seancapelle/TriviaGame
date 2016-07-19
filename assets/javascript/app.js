var timer = 10;
var answer = $('#aDisplay');

var question = [{
	question: "Between Greedo and Han, who shot first?",
	answers: ["Han", "Greedo", "They shot at the same time", "Not sure"],
	correctAnswer: "Han"
}, {
	question: "How old is Yoda when he dies?",
	answers: ["300 years", "500 years", "900 years", "A millennium"],
	correctAnswer: "900 years"
}, {
	question: "Which Rebel spaceship is considered a mid-range ship?",
	answers: ["A-Wing", "B-Wing", "X-Wing", "Y-Wing"],
	correctAnswer: "X-Wing"
}];

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


for (i = 0; i < question.length; i++){
	
	console.log(i);

	var qDisplay = question[i].question;
	document.querySelector('#qDisplay').innerHTML = qDisplay;

	var answerOne = question[i].answers[0];
	document.querySelector('#answerOne').innerHTML = answerOne;

	var answerTwo = question[i].answers[1];
	document.querySelector('#answerTwo').innerHTML = answerTwo;

	var answerThree = question[i].answers[2];
	document.querySelector('#answerThree').innerHTML = answerThree;

	var answerFour = question[i].answers[3];
	document.querySelector('#answerFour').innerHTML = answerFour;

	var correct = question[i].correctAnswer;
	};

	$('#answerOne').on('click', function(){
		
		if (answerOne === correct){
			alert("YES!");
		}
		else {
			alert("NO!");
		}
	})

	$('#answerTwo').on('click', function(){
		
		if (answerTwo === correct){
			alert("YES!");
		}
		else {
			alert("NO!");
		}
	})

	$('#answerThree').on('click', function(){
		
		if (answerThree === correct){
			alert("YES!");
		}
		else {
			alert("NO!");
		}
	})

	$('#answerFour').on('click', function(){
		
		if (answerFour === correct){
			alert("YES!");
		}
		else {
			alert("NO!");
		}
	})
}

//Start of game
$(document).ready(function(){

setInterval(countDown, 1000);
nextQuestion();


})