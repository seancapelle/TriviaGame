//USE ONE ON CLICK THAT USES A BUTTON CLASS, INSTEAD OF FOUR INDIVIDUAL BUTTONS

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
	timer: 15,
	correctScore: 0,
	incorrectScore: 0,
	unanswered: 0,
	results: ["The Force is strong with this one!", "That is why you fail."],

	//Functions
	start: function() {
		//Create Start button
		$('#graphic').html('<button id="start">START</button>');

		//When Start clicked
		$('#start').unbind().click(function() {
			
			//Remove the button
			$('#start').remove();

			//Go to askQuestion
			game.askQuestion();
		})
	},
	countDown: function() {

		console.log("In countDown");

		if(game.timer > 0){
			
			//Decrement time
			game.timer--;
			
			//Display current time
			$('#timer').html(game.timer);
		}
		else {
			//Clear countDown timer
			clearInterval();
			//Go to timeUp
			game.timeUp();
		}
	},

	timeUp: function() {

		console.log("In timeUp");

		//Stop the timer
		clearInterval(clock);

		//Set userGuess to nothing. You get nothing! Good day, sir!
		userGuess = null;

		//Provide correct answer
		correct = question[0].correctAnswer

		//Go to checkGuess
		game.checkGuess(userGuess, correct);

	},

	askQuestion: function() {

		//Create divs for each answer to go
		$('#aDisplay').append("<div id ='answerOne'</div>");
		$('#aDisplay').append("<div id ='answerTwo'</div>");
		$('#aDisplay').append("<div id ='answerThree'</div>");
		$('#aDisplay').append("<div id ='answerFour'</div>");

		console.log("In askQuestion");

		//Timer counts down
		clock = setInterval(game.countDown, 1000);

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
			
			clearInterval(clock);
			userGuess = answerOne;
			game.checkGuess(userGuess, correct);
		})

		$('#answerTwo').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerTwo;
			game.checkGuess(userGuess, correct);
		})

		$('#answerThree').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerThree;
			game.checkGuess(userGuess, correct);
		})

		$('#answerFour').unbind().click(function() {
			
			clearInterval(clock);
			userGuess = answerFour;
			game.checkGuess(userGuess, correct);
		})

	},

	checkGuess: function(userGuess,correct) {

		console.log("In checkGuess");

		//If user picks correct answer
		if (userGuess === correct){
			
			//Display congrats
			$('#qDisplay').html(game.results[0]);
			
			//Empty the answers
			$('#answerOne').remove();
			$('#answerTwo').remove();
			$('#answerThree').remove();
			$('#answerFour').remove();

			//Assign pic to correctImg and display
			var correctImg = '<img src="http://i.giphy.com/3o8doOlGO3pjQa5h28.gif" width="480" height="207"/>';
			$('#graphic').html(correctImg);

			game.correctScore++;
			
			game.pause();

		}

		//If user doesn't pick an answer before time runs out
		else if (userGuess === null){
			
			//Discourage
			$('#qDisplay').html(game.results[1]);

			//Empty the answers
			$('#answerOne').remove();
			$('#answerTwo').remove();
			$('#answerThree').remove();
			$('#answerFour').remove();

			//Reveal correct answer
			$('#aDisplay').html("The correct answer was " + correct);

			//Assign pic to correctImg and display
			var correctImg = '<img src="http://i.giphy.com/l2JJLpA2wWNqJUwXC.gif" width="480" height="300"/>';
			$('#graphic').html(correctImg);

			//Increment unanswered count
			game.unanswered++;
			
			//Go to pause
			game.pause();

		}

		//If user picks wrong answer
		else {
			//Discourage
			$('#qDisplay').html(game.results[1]);

			//Empty the answers
			$('#answerOne').remove();
			$('#answerTwo').remove();
			$('#answerThree').remove();
			$('#answerFour').remove();

			//Reveal correct answer
			$('#aDisplay').html("The correct answer was " + correct);

			//Assign pic to correctImg and display
			var correctImg = '<img src="http://i.giphy.com/l2JJLpA2wWNqJUwXC.gif" width="480" height="300"/>';
			$('#graphic').html(correctImg);

			//Increment incorrect count
			game.incorrectScore++;

			//Go to pause
			game.pause();
		}
	},

	pause: function() {

		console.log("In pause");

		//Wait 4 seconds before going to nextQuestion
		setTimeout(function(){ game.nextQuestion(); }, 4000);
	},

	nextQuestion: function() {

		console.log("In nextQuestion");

		//Clear "Correct answer was"
		$('#aDisplay').empty();

		//Clear the #graphic div
		$('#graphic').empty();

		//Set next question to index 0
		question.shift();

		//Checks if any questions are left
		if(question.length === 0) {
			
			//If no more questions, end game
			game.finished();
		}
		else {
			//Reset seconds
			game.timer = 15;

			//Ask new question
			game.askQuestion();	
		}

	},

	finished: function() {
		
		console.log("In finished");

		//Display stats
		$('#qDisplay').html("The Force will be with you, always.");
		$('#aDisplay').html("<p>Number of questions right: " + game.correctScore + "</p>" +
							"<p>Number of questions wrong: " + game.incorrectScore + "</p>" +
							"<p>Number of questions unanswered: " + game.unanswered + "</p>");


		//Create Reset button
		$('#graphic').html('<button id="reset">RESET</button>');

		//When Reset clicked
		$('#reset').unbind().click(function() {
			
			//Remove the button
			$('#reset').remove();

			//Go to game.reset()
			game.reset();

		})
	},

	reset: function() {

		console.log("In reset");

		//Reset page
		location.reload();
	},

};

//Start the game
game.start();






