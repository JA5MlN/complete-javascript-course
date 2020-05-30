///////////////////////////////////////


/***What happens to our code?***/
/*
execution context - imagine a container

global context is the default context
- not inside any function
- associated wtih the global object
- in a browser that is the window object
var lastName === window.lastName //true
last name is the property of the widow object

execution stack
like a babushka doll of execution contexts

How?

Execution context object has:
Variable Object (VO)
Scope chain
"This" variable

2 phases 
1. creation phase
    a. Creation of the variable object
    b. creation of the scope chain
    c. determine value fo the 'this'

2. Execution phase
the code of the function that generated the current execution context is run line by line

Creation of the variable object
1. The argument object is created with all the arguments passed into the function
2. The codes is scanned for function declarations: for each function a property is created 
in the VO pointing to the function. (all the functions are stored in the VO)
3. Code is scanned for variable declarations: for each var a property is creted 
in the variable object and set to undefined 

This is called HOISTING - means they are available before they are executed.
functions are hoisted as defined and variables are hoisted as undefined.
*/

// Lecture: Hoisting

calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

calculateAge(1980);

/*it doesn't matter which order you declare the function and call it because they are both hoisted 
first to a virtual object before they are executed - that's why you can call the function
calculateAge, befre you ahve even declared the function. This only works for function declarations*/

// retirement(1965); //does not work 
var retirement = function(year) {  //year is the parameter
console.log(65 - (2016 - year));
} 

retirement(1990);

//hoisting only works for function declarations NOT function expressions, as above

//variables

console.log(age); //for variables they are set as undefined, so you can't use them until they are defined.
var age = 23;
console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo(); //foo has it's own execution context - here it can even have the same name!
console.log(age); //see this age variable is defined in the global context so different


//we can use function variables before we have even declared them in the code!!


///////////////////////////////////////
// Lecture: Scoping

/* Scoping answers the question 'where can we acess a certin variable?'
Each new function creates a scope
To write a new scope in JS, you must write a new function
Lexical scoping (a function inside a function) also has access to the parent function 
and variables*/

// First scoping example


var a = 'Hello!';    // global scope [VO-global]
first();

function first() {
    var b = 'Hi!';      //first() scope gets [VO-1 + VO-global]
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);  //second() scope gets [VO-2 + VO-1 + VO-global]
    }
}


//THIS IS THE SCOPE CHAIN! This does not work backwards. 
//The global scope cannot see it's children!!



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d); //if you console.log a and d it works!
}

*/

///////////////////////////////////////
// Lecture: The this keyword


/*
Regular function call
The this variable points to the global object 
(in a browser this is the window) as default.

Method call
the this variable points to the object that is calling the method.

THE THIS KEYWORD IS NOT ASSIGNED A VALUE UNTIL A FUNCTION 
WHERE IT IS DEFINED IS ACTUALLY CALLED

This is because it is attached to an execution context
*/

//console.log(this);
/*
calculateAge(1980);

function calculateAge(year) {
    console.log(2020 - year);
    console.log(this);    //points to the window because this is a regular function call - global obejct
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        /*
        function innerfunction() {
            console.log(this);  //back to the global context!! because it is a regular function EVEN though it is inside a method
        }
        innerfunction()
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1978,
};


mike.calculateAge = john.calculateAge; 
//we don't have to use the brackets because we are not calling it we are treating these as variables
mike.calculateAge(); //the this is now Mike!! Because this is only assigned when the method is called


