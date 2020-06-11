/*** JAVASCRIPT is the verb, where CSS is the adjective and HTML is the noun ***/

/*** Variables and Data Types ***/

/***What happens to our code?***/

/*

Check your execution context and stack - in a browser, the global context is the window
Check your scope chain - parents and children
Address the DOM - Document Object Model
Message queue - events sit in a queue waiting to happen - listeners get to become an execution context

console.log(); logs to the console

document.querySelector(#) - querySelector will select the html element or css class
STRAIGHT AFTER THIS YOU CAN ADD THE ACTION eg. document.querySelector('.class').addEventListener('event', function);

document.getElementById('IDname'); - will select something by its ID (do not need to use the hash key)

.textContent = ' '; - will add text content to whatever you select
.innerhtml = '<b>' + var + '</b>'; will add html (must write html as a string)

Math.random(); - gives you a random number between 0 and 1. Multiply by a number to inrease this eg. 
	Math.random() * 6; - gives you a random number between 0 and 5. 
	(Math.random() * 6) + 1; - gives you a number between 1 and 6.

Math.floor(); - rounds a decimal to a whole number eg. Math.floor(1.6) will return 2.
Math.floor(Math.random()); - gives you a random number between 0 and 1 rounded to the nearest whole number.

.addEventListener('event', [functionName]); - listens for an event and then calls a function (callback)
.addEventListener('click', function() { //do something here });	- listens for someone to click on something selected and performs and anonymous function which cannot be called again.

