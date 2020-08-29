
//everything is an object (almost)

//Primitives and Objects
//Primitives: numbers strongs booleans undefined null
//Objects: arrays, functions, objects, dates, wrappers for numbers, strings, booleans

//The fact that almost everything is an object is what makes JS special

//Object-oriented paradigm

//Constructor (prototype) - often called a class in other languages
//from a constructor, instances are created.
//inheritance is when one object is based on another object
//inertiance uses Prototype properties

//every object we make is inherited from an Object Protoype
//this is the prototype chain. The end of the chain is null

//Every JS object has a proptype property, which makes inheritance possible in JS
//The prototype property of an object is where we put methods and properties that we want other objects to inherit
//The constructor's prototype property is not the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it.
//When a certain method or property is called the search starts in the object itself, and if it cannot be found, the search moves on the the objects prototype. 
//This continues until the method is found. It is the prototype chain.

//Function constructor

var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher',
};

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	}

Person.prototype.calculateAge = function() {
		console.log(2020 - this.yearOfBirth);
	}

var john = new Person('John', 1990, 'teacher');
//this is called instantiation = creating instances
//the new operator points the this function to the empty object

john.calculateAge();

var jane = new Person('Jane', 1978, 'designer');
var mark = new Person('Mark', 1945, 'retired');

jane.calculateAge();
mark.calculateAge();


//attaching methods to the prototype property is fantastic. 
//we can do the same with properties

Person.prototype.lastName = 'Smith';

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

//MAKE YOUR OWN OBJECT


var fortune = {
	hexString: '111111',
	haiku: 'Go for it',
	changingHexString: '000000',
	changingHaiku: 'Stop and listen'
}

var Fortune = function(hexString, haiku, hexString2, haiku2) {
	this.hexString = hexString;
	this.haiku = haiku;
	this.hexString2 = hexString2;
	this.haiku2 = haiku2;
}

click = new Fortune('000000', 'leave your partner', '111111', 'calm down');
click2 = new Fortune('101101', 'get a life', '101101', false );
click3 = new Fortune('100000', 'happy days', '011111', 'storm coming');

console.log(click);
console.log(click2);
console.log(click3);

/*Fortune.prototype.calcChange = function() {
	console.log(this.hexString !== this.hexString2);
}*/

Fortune.prototype.calcChange = function() {
	if (this.hexString === this.hexString2) {
		console.log(this.haiku2 = " ");
	}
	else {
		console.log(this.haiku2);
	}
}

click.calcChange();
click2.calcChange();
click3.calcChange();

//The prototype chain in the console

john.hasOwnProperty('job'); //you can use this to find out if an object has a property
john.hasOwnProperty('lastName');

//you can also write in the console: john instanceof Person

//you can also write console.info() and get info on the object

//the length we use to find the length of our array is a property of the object fundtion.
//there are heaps of functions stored in the object prototype properties.


//Object.create

var personProto = {
	calcAge: function() {
		console.log(2020 - this.yearOfBirth);
	}
};

var pickle = Object.create(personProto);
 
 pickle.name = 'Pickle';
 pickle.yearOfBirth = '1990';

 //object.create allows us to directly specify which object should be the prototype.
 //it is just another way to create an object





//PRIMITIVES VS. OBJECTS

//Booleans Undefined, Null, Numbers, Strings BUNNS

//Variables that contain primitives actually store the primitive in them
//But variables that contain objects only point to the object, they don't store it.

//primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);//each of the variables hold their own copy of the data

var object1 = {
	name: 'John',
	age: 26
}

//objects
var object2 = object1;
object1.age = 30;
console.log(object1.age);
console.log(object2.age);//proves that the variables point to the object

//functions

var age = 27;
var obj = {
	name: 'Jonas',
	city: 'Lisbon'
}

function change(a, b) {
	a = 30;
	b.city = 'SanFransisco';
}

change(age, obj);
console.log(age);//it doesn't matter how much we change a primitive inside a function, it doesn't change the variable outside
console.log(obj.city);//we do not point the object into the function, but only the reference to the object

//FUNCTIONS ARE ALSO OBJECTS in JavaScript

//1. A function is an isntance of the Object Type
//2. A fnction behaves like any other object;
//3. We can store functions in a variable
//4. We can pass a function as an argument to another function;
//5. We can rturn a function from a function

//We have first-class functions and call back functions

//Passing functions as arguments

var years = [1980, 1990, 2020, 2000, 1970];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	} 
	return arrRes;
}

function calcAge(el) { //el for element
	return 2020 - el;
}

var ages = arrayCalc(years, calcAge);//we are not calling the function here we are passing it through to be called back later
console.log(ages);


function isFullAge(el) {
	return el >= 18;
}

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

function maxHeartRate(el) {
	if (el >= 18 && el <= 81) {
		return Math.round(206.9 - (0.67 * el));
	} else {
		return -1;
	}
}

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

//Functions returning functions

function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you draw?');
		} 

	} else if (job === 'teacher') {
			return function(name) {
				console.log(name + ', do you like children?');
			}
	} else {
		return function(name) {
			console.log('Hello ' + name + ', what do you do for a crust?');
		}
	}
}


var teacherQuestion =
interviewQuestion('teacher'); //storing the returned function in a variable

teacherQuestion('Mavis'); //calling the variable

var designerQuestion = interviewQuestion('designer');
designerQuestion('David');
designerQuestion('Minnie');
designerQuestion('Puddles');
designerQuestion('Killer');

interviewQuestion('teacher')('Billy'); //we can even do it this way

//Immediately invoked function expressions (IIFE)

/*function game() {
	var score = Math.random * 10;
	console.log(score >= 5);
}
game();*/

(function () {
	var score = Math.random * 10;
	console.log(score >= 5);
})();

//JavaScript knows that anything in parenthesis cannot be a statement

//console.log(score); Here we have created data provacy, because you cannot access the score variable from the outside


(function (goodLuck) {
	var score = Math.random * 10;
	console.log(score >= 5 - goodLuck);
})(5);


//Closures

function retirement(retirementAge) {
	var a = ' years left until retirement.';
	return function(yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = 
retirement(66);
retirementUS(1978);
var retirementGermany = 
retirement(65);
var retirementIceland = 
retirement(67);

//retirement(66)(1978);

//an inner function always has acces to the variables and parameters of its outer function, even after the outer function has returned.

retirementGermany(1978);
retirementUS(1978);
retirementIceland(1978);



function interviewQuestion(job) {
	return function(name) {
			if (job === 'teacher') {
			console.log(name + ', do you like Kandinsky?');
		} else if (job === 'designer') {
			console.log(name + ', do you give detention?');
		} else {
			console.log(name + ', what do you do?');
		}
	}
}

interviewQuestion('teacher')('John');

//Bind, Call and Apply

var harry = {
	name: 'Harry',
	age: 40,
	job: 'barrister',
	presentation: function(style, timeOfDay) {
		if (style === 'formal') {
			console.log('Good ' + timeOfDay 
				+ ' ladies and gentlemen! I\'m ' 
				+ this.name + ' and I\'m ' 
				+ this.age + ' years old and I\'m a ' 
				+ this.job + '.');
		} else if (style === 'friendly') {
			console.log('Hi! How are you? I\'m ' 
			+ this.name + ' and I\'m ' + 
			this.age + ' years old and I\'m a ' + 
			this.job + '. Hope you have a great ' + 
			timeOfDay + '.');			
		}
	}
};
var emily = {
	name: 'Emily',
	age: 20,
	job: 'boxer'
};

harry.presentation('formal', 'morning');

harry.presentation.call(emily, 'friendly', 'afternoon'); //this is called method borrowing

//the call method allows us to change the 'this' variable

//the apply method accepts the arguments as an array so

//For exxample, it would look like: harry.presentation.apply(emily, ['friendly', 'afternoon']);

//Bind generates a copy of a function

var harryFriendly = harry.presentation.bind(harry, 'friendly');

harryFriendly('afternoon');
harryFriendly('night');

//this is called carrying

var emilyFormal = harry.presentation.bind(emily, 'formal');

emilyFormal('day');


//bind allows us to copy a function with a preset argument

var years = [1980, 1990, 2020, 2000, 1970];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	} 
	return arrRes;
}

function calcAge(el) { //el for element
	return 2020 - el;
}

var ages = arrayCalc(years, calcAge);//we are not calling the function here we are passing it through to be called back later
console.log(ages);


function isFullAge(el) {
	return el >= 18;
}
var ages = arrayCalc(years, calcAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));


console.log(ages);
console.log(fullJapan);

//Toolbox FULL!!
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

(function() {

console.log('Do the Dean Quiz!');

var Question = function(question, options, answer, display) {
	this.question = question;
	this.options = options;
	this.answer = answer;
	this.display = function() {
		var x = 1;
		console.log(this.question);
		for (var i = 0; i < this.options.length; i++) {
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

nextQuestion = function() {
	var current = quiz[Math.floor(Math.random() * 5)]; 
	current.display();
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
}



nextQuestion();
})();
//5. Use the prompt function to ask the user for the correct answer. 

//parseInt() makes a strng into a number