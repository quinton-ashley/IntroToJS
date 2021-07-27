const log = console.log;
let inp;

let incorrect = false;
let word;

async function sayLetters() {
	for (let i = 0; i < word.length; i++) {
		let c = word[i].toUpperCase();
		await play(letterSounds[c]);
	}
}

async function nextWord() {
	word = words[Math.floor(Math.random() * words.length)];
	log(word);
	await pc.erase();
	// create the input
	inp = pc.input('', 0, 0, onSubmit, onChange);
	await play(wordSounds[word]);
}

async function onSubmit(value) {
	if (value == word) {
		await play(speechSounds["you_are_correct_next_spell"]);
	} else {
		incorrect = true;
		await play(speechSounds["that_is_incorrect_the_correct_spelling_of"]);
		await play(wordSounds[word]);
		await play(speechSounds['is']);
		await sayLetters();
		await play(speechSounds["now_spell"]);
	}
	await nextWord();
}

// value is the text the user entered in the input
async function onChange(value) {
	// last character entered
	c = value[value.length - 1];
	c = c.toUpperCase();

	await play(letterSounds[c]);
}

function play(sound) {
	return new Promise((resolve, reject) => {
		sound.play();
		sound.onended(() => {
			resolve();
		});
	});
}

async function startGame() {
	await play(speechSounds['spell']);
	await nextWord();
}

pc.text('Press enter to start', 0, 0);
let startInp = pc.input('', 0, 1, startGame);
