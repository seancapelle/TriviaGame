//Questions object
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
},{
	question: "What is the name of Boba Fett's ship?",
	answers: ["Fett-1", "Firestorm", "Slave-1", "Avenging Angel"],
	correctAnswer: "Slave-1"
},{
	question: "What is the name of the planet that houses the second Death Star's shield generator?",
	answers: ["Tatooine", "Dantooine", "Mustafar", "Endor"],
	correctAnswer: "Endor"
},{
	question: "Which stoutly X-Wing pilot died during the Battle of Yavin?",
	answers: ["Porkins", "Beefkins", "Chubbs", "Gordo"],
	correctAnswer: "Porkins"
},{
	question: "What game did Han lose the Millennium Falcon over?",
	answers: ["Chess", "Blackjack", "Sabaac", "Bocci"],
	correctAnswer: "Sabaac"
},{
	question: "How did Vader plan to deliver Luke to the Emperor?",
	answers: ["Freeze him in carbonite", "Cut him in pieces", "Shackle him", "Hypnotize him"],
	correctAnswer: "Freeze him in carbonite"
},{
	question: "Who killed Jabba the Hutt?",
	answers: ["Princess Leia", "Luke", "Chewbacca", "Darth Vader"],
	correctAnswer: "Princess Leia"
},{
	question: "Who does Anakin beat in pod racing?",
	answers: ["Jar-Jar", "Watto", "Ben Quadinaros", "Sebulba"],
	correctAnswer: "Sebulba"
}];

//Game object
var game = {

	//Variables
	timer: 30,
	correctScore: 0,
	incorrectScore: 0,
	unanswered: 0,

	//Functions
	countDown: function() {

		console.log("In countDown");

		if(game.timer > 0){
			game.timer--;
			$('#timer').html(game.timer);
		}
		else {
			clearInterval(game.countDown);
			
		}
	},

	askQuestion: function() {

		console.log("In askQuestion");

		//Timer counts down
		setInterval(game.countDown, 1000);
	
		//Display question
		$('#qDisplay').html(question[0].question);

		//Set each answer to a variable
		var answerOne = question[0].answers[0];
		$('#answerOne').html(answerOne);

		var answerTwo = question[0].answers[1];
		$('#answerTwo').html(answerTwo);

		var answerThree = question[0].answers[2];
		$('#answerThree').html(answerThree);

		var answerFour = question[0].answers[3];
		$('#answerFour').html(answerFour);

		//Set correct answer
		var correct = question[0].correctAnswer;
	

		//Take user guess
		$('#answerOne').unbind().click(function() {
			
			userGuess = answerOne;
			game.checkGuess(userGuess, correct);
		})

		$('#answerTwo').unbind().click(function() {
			
			userGuess = answerTwo;
			game.checkGuess(userGuess, correct);
		})

		$('#answerThree').unbind().click(function() {
			
			userGuess = answerThree;
			game.checkGuess(userGuess, correct);
		})

		$('#answerFour').unbind().click(function() {
			
			userGuess = answerFour;
			game.checkGuess(userGuess, correct);
		})

	},

	checkGuess: function(userGuess,correct) {

		console.log("In checkGuess");

		if (userGuess === correct){
			alert("YES!");
			game.correctScore++;
			game.nextQuestion();
			
		}
		else {
			alert("NO!");
			game.incorrectScore++;
			game.nextQuestion();
		}
	},

	nextQuestion: function() {

		console.log("In nextQuestion");

		//Set next question to index 0
		question.shift();

		game.timer = 30;
		// window.refreshIntervalId;
		clearInterval(game.countDown);

		game.askQuestion();
	},

	finished: function() {
		console.log(correctScore);
		console.log(incorrectScore);
		console.log(unanswered);
	},

	reset: function() {

		location.reload();
	},

};

//Start of game
// $(document).ready(function(){

game.askQuestion();


// })


//NOTES
//question++

// if (question === question.length){

// }




// game.checkGuess();
