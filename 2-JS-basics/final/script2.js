/***********************
Variables and data types
***
/*
var firstName = 'Jasmin';
console.log(firstName);

var lastName = 'Chen';
var age = 28;

var fullAge = true;

console.log(fullAge);

var job;

console.log(job);

job = 'teacher';
console.log(job);

console.log(age);

console.log(lastName);

console.log(firstName + ' ' + lastName); 
*/
//Variable Mutation and Type Coercion


//Type coercion
var firstName = 'Jasmin';
var age = 28;

console.log(firstName + ' ' + age);
var job, isMarried; 
job = 'Teacher';
isMarried = 'false';

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//variable mutation
age = 'twenty eight';

job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last Name');

// console.log(firstName + ' ' + lastName);

// var firstName = prompt('change first name');

// console.log(firstName + ' ' + lastName + ' is ' + age + '.');

/**************
 Basic operators 
 **/

var year = 2020;
var ageDean = year - 1982;
var ageJasmin = year - 1978;

console.log(ageDean);
console.log(year + 2);
console.log(year /10);
console.log(year * 4);

/*
//Logical operators

//compare age

var JasOlder = ageJasmin < ageDean;
console.log(JasOlder);

var DeanOlder = ageDean < ageJasmin;
console.log(DeanOlder);

//type of operator

console.log(typeof DeanOlder);
console.log(typeof ageDean);
console.log(typeof 'hello world');
console.log(typeof x);

//Operator precedence 


var now = 2020;
var DeanBirthYear = 1982;
var fullAge = 18;
//multiple operators
var isFullAge = now - DeanBirthYear >= fullAge;
console.log(isFullAge);
//grouping
var average = (ageDean + ageJasmin) / 2;
console.log(average);
//multile assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// 2 + 4 + 5 left to right BUT assignment works right to left

// More operators
x = x * 2; //repetitive
x*= 2;

console.log(x);

x++; //adds an increment of 1
console.log(x);

/***
CODING CHALLENGE 1 
***/

//BMI = mass / height*2 = mass / (height * height) where mass is calculated in kg and height in metres

// 1. store mark and johns mass and height in variables

var JohnMass, MarkMass, JohnHeight, MarkHeight;

JohnHeight = 1.7;
JohnMass = 80; //kg
MarkHeight = 1.62; //meters
MarkMass = 69;



var MarkBMI = (MarkHeight * MarkHeight) / MarkMass;
var JohnBMI = (JohnHeight * JohnHeight) / JohnMass;
console.log(JohnBMI);
console.log(MarkBMI);

var JohnHigherBMI = JohnBMI > MarkBMI;
console.log('Is John\s BMI higher than Mark\s?: ' + JohnHigherBMI);

/** If ELSE **/

var firstName = 'Jorge';
var relationshipStatus = 'single';

if (relationshipStatus === 'married') {
	console.log(firstName + ' is married');
} else {
	console.log(firstName + ' is single and happy.');
}

var isMarried = true;

if (isMarried) {
	console.log(firstName + ' is taken.');
} else {
	console.log(fistName + ' is DTF.');
}

var JohnMass, MarkMass, JohnHeight, MarkHeight;

JohnHeight = 1.7;
JohnMass = 80; //kg
MarkHeight = 1.62; //meters
MarkMass = 69;



var MarkBMI = (MarkHeight * MarkHeight) / MarkMass;
var JohnBMI = (JohnHeight * JohnHeight) / JohnMass;
console.log(JohnBMI);
console.log(MarkBMI);

var JohnHigherBMI = JohnBMI > MarkBMI;
//console.log('Is John\s BMI higher than Mark\s?: ' + JohnHigherBMI);

if (MarkBMI > JohnBMI) {
	console.log('Mark\'s BMI is higher than John\'s.');
}  else {
	console.log('John\'s BMI is higher than Mark\'s');
}



/***
Booleen Logic
***/

var firstName = 'Tom';
var age = 16;

if (age < 16) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { //Between 13 and 20 === >= 13 and <= 20
	console.log(firstName + ' is a teenager.');
} else if (age >=20 && age < 30) {
	console.log(firstName + ' is a young man');
} else {
	console.log(firstName + ' is a man.');
}

/**firstName = prompt('What is your name?');
age = prompt('What is your age?');**/

if (age < 16) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { //Between 13 and 20 === >= 13 and <= 20
	console.log(firstName + ' is a teenager.');
} else if (age >=20 && age < 30) {
	console.log(firstName + 'is a young man');
} else {
	console.log(firstName + ' is a man.');
}

/***
AND (&&) A AND B muct be true
OR (||) ONLY A OR B need to be true
NOT (!) inverts true/false variable
**/

/***
The Ternary Operator and Switch Statements
**/

var firstname = 'Mike';
var age = 40;

//firstName = prompt('What is your name?');
//age = prompt('What is your age?');

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
	var drink = 'beer';
} else {
	var drink = 'juice';
}

console.log(firstName + ' can drink ' + drink + '.');

//ternary operator is simpler than the if else 

//switch statement 

var job = 'drug dealer';

//job = prompt('What is your job?');


switch (job) {
	case 'drug dealer':
	case 'unemployed':
		console.log(firstName + ' sells weed.');
		break;
	case 'politician':
	case 'sales':
		console.log(firstName + ' destroys lives.');
		break;
	case 'teacher':
	case 'marketing':
		console.log(firstName + ' teaches children to be robots.');	
		break;
	default:
		console.log(firstName + ' is unemployed at the moment.');		
}

//using the earlier work


/**if (age < 16) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { //Between 13 and 20 === >= 13 and <= 20
	console.log(firstName + ' is a teenager.');
} else if (age >=20 && age < 30) {
	console.log(firstName + 'is a young man');
} else {
	console.log(firstName + ' is a man.');
}**/

//switch statement for true false statements

var age = 18;
var firstName = 'Pickle';


switch (true) {
	case age < 16:
		console.log(firstName + ' is a child.');
		break;
	case age >= 13 && age < 20:
		console.log(firstName + ' is a youth.');
		break;
	case age >=20 && age < 30:
		console.log(firstName + ' should know better by now');
		break;	
	default:
		console.log(firstName + 'is on their own');
}


/****** Truthy and Falsy and equality operators
falsy values: undefined, null, 0, empty strings ('') and NaN (not a number)
truthy values: everything that is not falsy**/

var height;
height = 0;

if (height || height === 0) {
	console.log('Variable is defined.');
} else {
	console.log('Variable has NOT been defined.');
}

//this is a good test for variables being defined
//when the variable is 0 it will read as falsy so you add the OR '0'
//the difference between === and == 

//Equality operators strict quality operator is === and is best. 
//== is not strict and so you can compare the nuber 23 with the string 23 and they will work out.

if (height == '23') {
	console.log('The operator does type coercion!')
}

//CODING CHALLENGE 2

//average score

var JohnTeam = (89 + 150 + 103) / 3;
var MikeTeam = (216 + 94 + 123) / 3;
var MaryTeam = (97 + 9000 + 105) / 3;

console.log(JohnTeam);
console.log(MikeTeam);
console.log(MaryTeam);

//if else

if (JohnTeam < MikeTeam) {
	console.log('The winner is Mike with an average score of ' + MikeTeam + '.');
} else if (JohnTeam > MikeTeam) {
	console.log('The winner is John with an average score of ' + JohnTeam + '.');
} else {
	console.log('Jon and Mike are evenly matched with an average of ' + JohnTeam + '.');
}

//ternery - couldn't

//switch

switch (true) {
	case JohnTeam < MikeTeam:
		console.log('The winner is Mike with an average score of ' + MikeTeam + '.');
		break;
	case JohnTeam > MikeTeam:
		console.log('The winner is John with an average score of ' + JohnTeam + '.');
		break;
	default:
		console.log('Jon and Mike are evenly matched with an average of ' + JohnTeam + '.');
}

if (JohnTeam > MikeTeam && JohnTeam > MaryTeam) {
	console.log('The winner is John with an average score of ' + JohnTeam + '.');
} else if (MikeTeam > JohnTeam && MikeTeam > MaryTeam) {
	console.log('The winner is Mike with an average score of ' + MikeTeam + '.');
} else if (MaryTeam > JohnTeam && MaryTeam > MikeTeam) {
	console.log('The winner is Mary with an average score of ' + MaryTeam + '.');
} else {
	console.log('All three players are evenly matched with an average of ' + JohnTeam + '.');
}

switch (true) {
	case JohnTeam > MikeTeam && JohnTeam > MaryTeam:
		console.log('The winner is John with an average score of ' + JohnTeam + '.');
		break;
	case MikeTeam > JohnTeam && MikeTeam > MaryTeam:
		console.log('The winner is Mike with an average score of ' + MikeTeam + '.');
		break;
	case MaryTeam > JohnTeam && MaryTeam > MikeTeam:
		console.log('The winner is Mary with an average score of ' + MaryTeam + '.');
		break;
	default:
		console.log('All three players are evenly matched with an average of ' + JohnTeam + '.');
}

/**** FUNCTIONS: VERY IMPORTANT ***/

function calculateAge(birthYear) {
	return 2020 - birthYear;
}

calculateAge(1982);

var ageDean = calculateAge(1982);
var ageJasmin = calculateAge(1978);
var ageDamon = calculateAge(1982);
var ageMarg = calculateAge(1945);

console.log(ageDean, ageMarg, ageDamon, ageJasmin);

//KEY PROGRAMMING PRINCIPLE: DON'T REPEAT YOURSELF D.R.Y

function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	var retirementyear = year + 65;

	if (retirement > 0) {
		console.log(firstName + ' retires in ' + retirement + ' years.');
	} else {
		console.log(firstName + ' retired in ' + retirementyear + '.');
	}
}

yearsUntilRetirement(1980, 'Dean');
yearsUntilRetirement(1945, 'Marg');
yearsUntilRetirement(1978, 'Jasmin');

//Key points functions can be written and return something using the return expression.
//functions don't ahve to return something but they often do
//you can call on functions later on
//D.R.Y.

/********* 
Function statements and expressions
*******/
//function declaration eg.

//function whatDoYouDo(job, function) {}

//function expression
var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'designer':
			return firstName + ' makes things pretty.'; //return keyword finishes a function
		case 'actor':
			return firstName + ' pretends to be other people'; 
		case 'coder':
			return firstName + ' codes';
		default:
			return firstName + ' does something else'
	}

}

console.log(whatDoYouDo('designer', 'Dean'));
console.log(whatDoYouDo('actor', 'Ben'));
console.log(whatDoYouDo('coder', 'Jasmin'));
console.log(whatDoYouDo('teacher', 'Marg'));

//the difference between expressions and statements are:
//expressions end in results
//statements don't necessarily provide any immediate value (eg. if/else)

//****ARRAYS*****//

//arrays are like collections of variables
//create / initialise new array

var names = ['John', 'Dick', 'Harry']
var years = new Array(1990, 1969, 1950);

//first element is 0, then 1, 2, 3 onwards...

console.log(names[0]);
console.log(names);
console.log(names.length);
console.log(names[2]);


//mutate array data
names[1] = 'Ben';
console.log(names);

names[7] = 'Mary';
console.log(names);

names[names.length] = 'Marta';
console.log(names);

console.log(names[8]);

//different data types

var john = ['John', 'Smith', 1950, 'coder', false];
john.push('blue'); //add to end of array
john.unshift('Mr'); //add to start of array
john.pop(); //remove from end of array
john.pop();
john.shift(); //remove from start of array
john.indexOf(1950); //check which position an element is in. If it return -1, it is not in the array 

console.log(john);
console.log(john.indexOf(1950)); //good to test if the element is in the array

var isPolitician = john.indexOf('politician') === -1 ?
'John is not a politican' : 'John is a politician';
	console.log(isPolitician);

var isCoder = john.indexOf('coder') === -1 ?
'John is not a coder' : 'John is a coder';
console.log(isCoder);

/**CODING CHALLENGE 3 ****/



//var percentage = 0.15;
//var tipAmount = bill * percentage;
//var billTotal = bill + (bill * percentage);

//console.log('John should tip ' + tipAmount + ' which means he pays ' + billTotal + ' in total.');
	


function calculateTip(bill) {
	var tipAmount; 

	if (bill < 50) {
		return tipAmount = bill * 0.2;
	} else if (bill >= 50 && bill < 200) {
		return tipAmount = bill * 0.15;
	} else {
		return tipAmount = bill * 0.1;
	}
}

function calculateTotal(bill) {
	var billTotal = bill + calculateTip(bill);
	return billTotal;
}


//console.log('John should tip ' + tipAmount + ' which means he pays ' + billTotal + ' in total.');

var bill1 = calculateTip(124);
var bill2 = calculateTip(48);
var bill3 = calculateTip(268);

var bill = [124, 48, 268];
var tips = [calculateTip(bill[0]), calculateTip(bill[1]), calculateTip(bill[2])];

/*var total1 = calculateTotal(124);
var total2 = calculateTotal(48);
var total3 = calculateTotal(268);*/

var totals = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];
//console.log(bill1, bill2, bill3);
//console.log(total1, total2, total3);
console.log(tips);
console.log(totals);

/*** OBJECTS and properties ***/

//curly braces syntax - object literal
var damon = {
	firstName: 'Damon',
	lastName: 'Chen',
	birthYear: 1980,
	family: ['Marg', 'Jasmin'],
	job: 'cook',
	isMarried: false
};

console.log(damon);
console.log(damon.firstName);
console.log(damon['lastName']);
var x = 'birthYear';
console.log(damon[x]);

damon.job = 'fitness coach';
damon[isMarried] = true;

console.log(damon);

//new object syntax
var jasmin = new Object();
jasmin.name = 'Jasmin';
jasmin.birthYear = 1978;
jasmin.lastName = 'Chen';

console.log(jasmin);

/* OBJECTS and METHODS */

var damon = {
	firstName: 'Damon',
	lastName: 'Chen',
	birthYear: 1980,
	family: ['Marg', 'Jasmin'],
	job: 'cook',
	isMarried: false,
	calcAge: function() {
	this.age = 2020 - this.birthYear;
	}
};

console.log(damon.calcAge());
damon.calcAge();
console.log(damon);


/*var damon = {
	firstName: 'Damon',
	lastName: 'Chen',
	birthYear: 1980,
	family: ['Marg', 'Jasmin'],
	job: 'cook',
	isMarried: false,
	calcAge: function() {
		this.age = 2020 - this.birthYear;
	}
};

damon.calcAge();
console.log(damon);
*/

/*** CODING CHALLENGE 4 ****/

var mark = {
firstName: 'Mark',
lastName: 'Chung',
mass: 80,
height: 1.80,
calcBMI: function() {
	return this.BMI = (this.height * this.height) / this.mass;
	}
};

//mark.calcBMI();
console.log(mark);

var john = new Object;
john.firstName = 'John';
john.lastName = 'Muhummad Khan';
john.mass = 200;
john.height = 1.70;
john.calcBMI = function() {
	return this.BMI = (this.height * this.height) / this.mass; 
};

//john.calcBMI();

console.log(mark, john);

console.log(mark.BMI, john.BMI);

if (mark.calcBMI() > john.calcBMI()) {
	console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI, which is ' + mark.BMI + '.');
} else if (mark.BMI < john.BMI) {
	console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI, which is ' + john.BMI + '.');
} else {
	console.log('John and Mark have the same BMI, which is ' + mark.BMI + '.');
};

/** Loops and iteration **/

for (var i = 0; i < 10; i++) {
	console.log(i);
}

//i = 0, 0 < 10 true, log 0, to console i ++ (plus one)
//i = 1, 1 < 10 true, log 1 to console, i++
//and so on...
//1 = 10, 10 < 10 false, exit the loop!

for (var i = 1; i <= 20; i +=2) {
	console.log(i);
}

// remember i += 2 means "i is equal to i + 2"

/*var john = ['John', 'Smith', 1990, 'designer', false];

console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);
console.log(john[4]);

//clunky

console.log(john.length);

for (var i = 0; i < john.length; i++) {
	console.log(john[i]);
}

//or while loop

var i = 0;
while(i < john.length) {
	console.log(john[i]); 
	i++;
}


//continue and break statements

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') continue;
	console.log(john[i]);
}

//if it is not a strong then continue to execute the operation
// !== means different

for (var i = 0; i < john.length; i++) {
	if (typeof john[i] !== 'string') break;
	console.log(john[i]);
}

//if it is not a strong then exit the loop! 

*/

//CHALLENGE loop backwards

var john = ['John', 'Smith', 1990, 'designer', false];
i = 4;

console.log(john[i])

for (var i = 4; i >= 0; i -= 1) {
	console.log(john[i]);
}

//Loopig backward

for (var i = john.length - 1; i >= 0; i -= 1) {
	console.log(john[i]);
}

//CODING CHALLENGE 5!

var tipCalculator = {
	meal: [124, 48, 268, 180, 42],
	tip: [],
	total: [],
	calcTip: function() {
		for (i = 0; i < this.meal.length; i++) {
			if (this.meal[i] < 50) {
				this.percentage = 0.2;
			} else if (this.meal[i] >= 50 && this.meal[i] < 200) {
				this.percentage = 0.15; 
			} else {
				this.percentage = 0.1; 
			}
			return this.tip = this.meal[i] * this.percentage;
		}
	},

	calcTotal: function() {
		for (i = 0; i < this.meal.length; i++) {
			return this.total = this.meal[i] + this.tip[i];
		}
	}

}

console.log(tipCalculator);
tipCalculator.calcTip(tipCalculator.meal);
tipCalculator.calcTotal();
console.log(tipCalculator.meal.length);


var tipCalculator = {
	meal: [124, 48, 268, 180, 42],
	tip: [],
	total: [],
	calcTip: function() {
		for (i = 0; i < this.meal.length; i++) {
			console.log(this.meal[i]);
			var percentage = 0.15;
			if (this.meal[i] < 50) {
				percentage = 0.2;
			} else if (this.meal[i] >= 50 && this.meal[i] < 200) {
				percentage = 0.15; 
			} else {
				percentage = 0.1; 
			}
			this.tip[i] = this.meal[i] * percentage;
		}
	},
	calcTotal: function() {
		for (i = 0; i < this.meal.length && i < this.tip.length; i++) {
			console.log(this.tip[i]);
		this.total[i] = (this.meal[i] + this.tip[i]);
		}
	}
}

console.log(tipCalculator);
tipCalculator.calcTip();
tipCalculator.calcTotal();

//part 2

var markTipCalculator = {
	meal: [77, 375, 110, 45],
	tip: [],
	total: [],
	calcTip: function() {
		for (i = 0; i < this.meal.length; i++) {
			console.log(this.meal[i]);
			var percentage = 0.15;
			if (this.meal[i] < 100) {
				percentage = 0.2;
			} else if (this.meal[i] >= 100 && this.meal[i] <= 300) {
				percentage = 0.10; 
			} else {
				percentage = 0.25; 
			}
			this.tip[i] = this.meal[i] * percentage;
		}
	},
	calcTotal: function() {
		for (i = 0; i < this.meal.length && i < this.tip.length; i++) {
			console.log(this.tip[i]);
		this.total[i] = (this.meal[i] + this.tip[i]);
		}
	}
}

console.log(markTipCalculator);
markTipCalculator.calcTip();
markTipCalculator.calcTotal();

// number 6

console.log(tipCalculator.tip);
console.log(markTipCalculator.tip);

var johnTips = [18.59, 9.6, 26.8, 27, 8.4];
var markTips = [15.4, 93.75, 11, 9];


console.log(johnTips[0]);
var sum1 = (johnTips[0] + johnTips[1]);
console.log(sum1);
var sum2 = (sum1 + johnTips[2]);
console.log(sum2);

function calcAv(johnTips) {
	for (i = 0; i < johnTips.length; i++) {
		var sum = sum + johnTips[i];
		return console.log(sum);
	}
}

/*
var test = 0;
test = test + johnTips[0];
console.log(test);
test = test + johnTips[1];
console.log(test);
test = test + johnTips[2];
console.log(test);
*/

/*
var i = 0;
var test = 0;
test = test + johnTips[i];
console.log(test); 
i++;
test = test + johnTips[i];
console.log(test);
i++;
test = test + johnTips[i];
console.log(test);
i++;
test = test + johnTips[i];
console.log(test);
i++;
test = test + johnTips[i];
console.log(test);
i++;
test = test + johnTips[i];
console.log(test);
*/

var johnTips = [18.59, 9.6, 26.8, 27, 8.4];
console.log(johnTips.length);
//JohnSum
var johnSum = 0;
function getSum() {
		var johnSum = 0;
		for (i = 0; i < johnTips.length; i++) {
		console.log(johnSum = johnSum + johnTips[i]);
	}
}	
getSum();

var johnTipAverage = 180.78 / johnTips.length;
console.log(johnTipAverage);

//markSum
var markTips = [15.4, 93.75, 11, 9];
console.log(markTips.length);

var markSum = 0;
function getSum2() {
		var markSum = 0;
		for (i = 0; i < markTips.length; i++) {
		console.log(markSum = markSum + markTips[i]);
	}
}	
getSum2();

var markTipAverage = 129.15 / markTips.length;
console.log(markTipAverage);

if (johnTipAverage < markTipAverage) {
	console.log("On average, Mark\'s family paid the highest tips with $" + markTipAverage + '.');
} else if (johnTipAverage > markTipAverage) {
	console.log("On average, John\'s family paid the highest tips with $" + johnTipAverage + '.');
} else {
	console.log("On average, John\'s family and Mark\'s family paid the same tips with $" + johnTipAverage + '.');
}


//Solution

var john = {
	name: 'John',
	meal: [124, 48, 268, 180, 42],
	calcTips: function() { //right
		this.tips = [];
		this.totals = [];

		for (i = 0; i < this.meal.length; i++) { //right
			var percentage;
			var meal = this.meal[i];

			if (meal < 50) {
				percentage = 0.2;
			} else if (meal >= 50 && meal < 200) {
				percentage = 0.15; 
			} else {
				percentage = 0.1; 
			}
			
			this.tips[i] = meal * percentage;

			this.totals[i] = meal + meal * percentage;
		}
	}

}

john.calcTips();
console.log(john);

//Solution Part 2



