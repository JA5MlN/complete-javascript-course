/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

DOM stands for Document Object Model: structured representation of anHTML document
for each HTML section thre is a DOM. We use JS language to manipulate the DOM

This project shows you:
1. How to create fundamental game variables
2. How to generate a random number
3. How to manipulate the DOM
4. How to read the DOM
5. How to change CSS styles

*/

//1. How to create fundamental game variables

var scores, roundScore, activePlayer, dice, gamePlaying, toWin;

start();

gamePlaying = true;

//2. How to generate a random number

//dice = 6;  //Math.random gives me a random number between 0 and 1

//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice; //amazing setter = we set a value
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

/*var x = document.querySelector('#score-0').textContent; //just to read with this ID and store in variable x
console.log(x); //getter - we get a value

document.querySelector('.dice').style.display = 'none'; //can change css WOW
*/

/****** EVENTS

Events are notification that are sent to notify the code that something happened on the webpage
An event listener is a function that sits and waits for an event to happen
In this section:
1. How to set up and event handler
2. what  callback function is
3. what an anonymous function is
4. another way to select elements by ID
5. How to change the image in an <img> element
6. What the ternary operator is
7. How to add remove and toggle html classes
8. How to use functions to apply DRY
9. STATE variable - tells us the condition of a system
*/

/*function btn() {
	//do something here
}
btn();*/

function start() {
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
toWin = 100;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.dice-0').style.display = 'none';
document.querySelector('.dice-1').style.display = 'none';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

/*
document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {

	// 1. Random number
		dice = Math.floor(Math.random() * 6) + 1;

	//2. Display result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';

	//3. Update the round score IF the rolled number was NOT a 1
		if (dice !== 1) {   // !== means is different from
			//add score
			roundScore += dice; // this is the same as writing roundScore = roundscore + dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;	
		} else {
			//next player
			nextPlayer();
		}
	}

});
*/

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {

	// 1. Random number
		dice = [(Math.floor(Math.random() * 6) + 1), (Math.floor(Math.random() * 6) + 1)];
		console.log(dice);

	//2. Display result
		var diceDOM1 = document.querySelector('.dice-0');
		diceDOM1.style.display = 'block';
		diceDOM1.src = 'dice-' + dice[0] + '.png';

		var diceDOM2 = document.querySelector('.dice-1');
		diceDOM2.style.display = 'block';
		diceDOM2.src = 'dice-' + dice[1] + '.png';

	//3. If a one is rolled next player and no score
		if (dice[0] === 1 || dice[1] === 1) {   // !== means is different from
		nextPlayer();
		document.querySelector('.dice-0').classList.toggle('.dice-0-grey');
		document.querySelector('.dice-1').classList.toggle('.dice-1-grey');

	//4. Update the round score IF either rolled number was NOT a 1
		} else if (dice[0] === 6 && dice[1] === 6) {
		scores[activePlayer] = 0; 		
		document.querySelector('#score-' + activePlayer).textContent = '0';		
		nextPlayer();
		} else {
			//add score
			roundScore += (dice[0] + dice[1]);
			//display
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if (gamePlaying) {	
		//add current score to players GLOBAL score
		scores[activePlayer] += roundScore; 

		//update user interface
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		//check if the player won the game
		if (scores[activePlayer] >= toWin) {
			document.querySelector('#name-' + activePlayer).innerHTML = ('Winner!');
			document.querySelector('.dice-0', '.dice-1').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		} else {
		nextPlayer();
		}
	}
});

function nextPlayer() {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		//document.querySelector('.dice-0').classList.toggle('.dice-0-grey');
		//document.querySelector('.dice-1').classList.toggle('.dice-1-grey');
}


document.querySelector('.btn-new').addEventListener('click', start);

//function to change win conditions
document.querySelector('#setPoints').addEventListener('click', function() {
 	toWin = document.getElementById('toWin').value;
 	console.log(toWin); 
}); 



//THREE CHALLENGES

//Challenge 1: PLayer loses ENTIRE score if her rolles 2 sixes in a row

