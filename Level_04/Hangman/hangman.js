const hangman = [
	`
  +---+
  |   |
      |
      |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
	`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`
];

const wordsList =
	'cool know over these about down large please they after drink learn put think again each little red this ago everything live right those all face location run three also far make same to always fast man sea together am father many seven try an find may shop turn and first meaning sit under any five men six until are fly mother sleep us as foot much small use from must smile want ask give never some we at go no sorry well away green not star what because has now stay when bed here ocean stop where black his of store which blue how old strong why bring in on tell will call into one thank with clean is only that yellow cold it or the yes color just our you come kind out there';

// the start function gets run when the game starts
async function start() {
	// your code goes here! below this line

	/* Part A: split the wordsList String into an array called words, then choose a random word */

	/* Part B: make an array with a line for each letter in the word */
	// Example word: 'quiz'
	// lines -> ['_', '_', '_', '_']

	/* Part C: show the lines for the word below the hangman art */
	let guess = await prompt(hangman[0]);

	exit();
} // end of the start function
