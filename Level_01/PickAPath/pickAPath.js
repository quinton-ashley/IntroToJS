// start of wrapper (I will explain how this works later)
async function start() {
	// your code goes here! below this line

	let choice = 0; // initialize choice to 0, user has not made any choice yet

	while (choice != null) {
		// while choice is not null (nothing)
		// null in this case indicates the player cancelled out of the prompt

		let msg = ''; // initialize message to empty String

		if (choice == 0) {
			/* Part A0: Start your story! */
			msg =
				'This is the start of the story. Type one of the numbers and press enter.\n\n\t' +
				'1: your player could pick this choice\n\t' +
				'2: or maybe this path\n\t' +
				'3: or even this option';
		} else if (choice == 1) {
			/* Part A1: continue the story */
			msg =
				'Continue the story, each choice could lead to a different path but you can also reuse choice numbers and have paths converge.\n\n\t' +
				'4: another path\n\t' +
				'5: an additional option';
		}

		// prompt the player to make choices
		choice = await prompt(msg);

		/* Part B0: end the game if there are no more choices to make */

		/* Part B1: check if the player made a valid choice, reject invalid choices */
	}

	exit(); // exits the game
} // end wrapper
