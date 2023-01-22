// start of wrapper (I will explain how this works later)
async function start() {
	// your code goes here! below this line

	// the user hasn't made a choice yet
	let path = 0;

	while (path != null) {
		// while path is not null (nothing)
		// null in this case indicates the player cancelled out of the prompt

		let message = ''; // initialize message to empty String

		if (path == 0) {
			/* Part A0: Start your story! */
			message =
				'This is the start of the story. Type one of the numbers and press enter.\n\n\t' +
				'1: your player could pick this choice\n\t' +
				'2: or maybe this path\n\t' +
				'3: or even this option';
		} else if (path == 1) {
			/* Part A1: continue the story */
			message =
				'Continue the story, each choice could lead to a different path but you can also reuse choice numbers and have paths converge.\n\n\t' +
				'4: another path\n\t' +
				'5: an additional option';
		}

		// prompt the player to choose a path
		path = await prompt(message);
	}

	exit(); // exits the game
} // end wrapper
