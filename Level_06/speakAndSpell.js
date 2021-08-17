let inp;

// value is the text the user entered in the input
function onSubmit(value) {}

// called everytime the user enters text in the input
function onChange(value) {
	letterSoundA.play(); // example plays letter A sound
}

async function nextWord() {
	await pc.erase(); // erase the screen

	// create the input for letters
	inp = pc.input('', 0, 0, onSubmit, onChange);
}

pc.text('Press enter to start', 0, 0); // text on row 0
pc.input('', 0, 1, nextWord); // input on row 1
