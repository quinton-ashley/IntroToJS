let dictionary = [];
let words = [];
let board;

async function loadGame() {
	/* load the text files*/

	startGame();
}

loadGame();

/* Display all the boxes for the letters */
function displayBoxes() {}

async function startGame() {
	/* pick new word */

	displayBoxes();
	await prompt('Guess the word!', 3, 18, 20);
}
