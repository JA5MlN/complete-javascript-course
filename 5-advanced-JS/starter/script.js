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

//Every JS object has a proptype property, which akes inheritance possible in JS
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

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Pickle');

var designerQuestion = interviewQuestion('designer');

designerQuestion('David');
designerQuestion('Minnie');
designerQuestion('Puddles');
designerQuestion('Killer');

interviewQuestion('teacher')('Billy');
