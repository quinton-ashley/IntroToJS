let phrases;

async function loadGame() {
	// the category of theses phrases is "Fun and Games"
	let data = await fetch(QuintOS.dir + '/phrases.txt').text();
	let phrasesList = await data.text();
}

loadGame();

/* Make an array of phrases, pick a random phrase, and split pharse into an array of words */

/* Display all the boxes for the phrase */
function displayBoxes() {}

let bigBuzzer = `
|⎺|__  _   _ ___________ _ __
| '_ \\| | | |_  /_  / _ \\ '__|
| |_) | |_| |/ / / /  __/ |
|_.__/ \\__,_/___/___\\___|_|`.slice(1);

function buzz() {}

/* Create the buzzer button */
button(bigBuzzer, 18, 5, buzz);

/* Add a letter to a random empty box */
async function addLetter() {}
