

//Coding Challenge - Build a fun quiz game in the console! 6.30 start


// 1. build a function constructor called Question to describe a Question. 
//A question should include: the question, the answers from which someone can choose, and correct answer (number)

/*var Question = function(question, options, answer) {
	this.question = question;
	this.options = options;
	this.answer = answer;
	this.display = function(question) {
		console.log(this.question);
		console.log(1 + '. ' + options[0]);
		console.log(2 + '. ' + options[1]);
		console.log(3 + '. ' + options[2]);
	}
}*/

var Question = function(question, options, answer, display) {
	this.question = question;
	this.options = options;
	this.answer = answer;
	this.display = function() {
		var x = 1;
		console.log(this.question);
		for (i = 0; i < this.options.length; i++) {
			console.log(x++ + '. ' + this.options[i]);
		};
	}
}

//2. Create a couple of questions using the constructor

var questionOne = new Question('What is Dean\'s favourite food?', ['donuts', 'peanut butter and spinach milkshakes', 'chicken squares', 'pizza'], '3');
var questionTwo = new Question('What should worms never eat?', ['onions', 'lemons', 'potatoes', 'all of the above'], '4');
var questionThree = new Question('How much does Jasmin love you?', ['lots and lots', 'a bit', 'not much'], '1');
var questionFour = new Question('What colour are Dean\'s eyes?', ['blue', 'grey', 'brown'], '2');
var questionFive = new Question('What colour is our flat?', ['white', 'yellow', 'blue'], '2');

//console.log(questionThree.answer);
//3. Store them all inside an array

var quiz = [questionOne, questionTwo, questionThree, questionFour, questionFive];

//Select a random question and log it on the console, together with the possible answers. 
//(Write a method for the question objects for this task.)
var score = 0;

(nextQuestion = function() {
	var current = quiz[Math.floor(Math.random() * 5)]; 
	console.log(current.display());
	var enterAnswer = prompt('Please select the correct answer (just type the number)'); 
	if (enterAnswer === current.answer) {
		score = score + 1;
		console.log('Correct answer!');
		console.log('Your current score is ' + score + '.');
		console.log('---------------------------');
		nextQuestion();
	} else if (enterAnswer == 'exit') {
		console.log('Thanks for playing! Your final score was ' + score + '.');
	} else {
		console.log('Sorry, that is not the right answer. Try again');
		console.log('Your current score is ' + score + '.');
		console.log('--------------------------------------');
		nextQuestion();
	} 
})();

//nextQuestion();

//5. Use the prompt function to ask the user for the correct answer. 