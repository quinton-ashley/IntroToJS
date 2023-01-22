async function start() {
	// your code goes here! below this line

	let path = 0;

	// while path is not null (nothing)
	while (path != null) {
		// null in this case indicates the player cancelled out of the prompt

		let message;

		if (path == 0) {
			message =
				'This is the start of the story. Type one of the numbers and press enter.\n\n\t' +
				'1: your player could pick this choice\n\t' +
				'2: or maybe this path\n\t' +
				'3: or even this option';
		} else if (path == 1) {
			message =
				'Continue the story, each choice could lead to a different path but you can also reuse choice numbers and have paths converge.\n\n\t' +
				'4: another path\n\t' +
				'5: an additional option';
		}

		// asks the player to choose a path
		path = await prompt(message);
	}

	exit();
}
