// start of wrapper (I will explain how this works later)
(async () => {
	// your code goes here! below this line

	let choice = -1; // initialize choice to -1, user has not made any choice yet

	while (choice != null) {
		// while choice is not null (nothing)
		let msg = ''; // initialize message to empty string
		if (choice == -1) {
			/* PART A: Start your story! */
			msg =
				"It's a dark October night. You're staying up late coding but suddenly you hear a knock at your door!\n\n\t" +
				'1: Ask "Who is it?"\n\t' +
				'2: Ignore it and keep coding\n\t' +
				'3: Try to go to sleep';
		} else if (choice == 1) {
			/* PART A: continue the story */
			msg =
				'Continue the story, each choice will lead to another path, you can reuse the same options though and have paths converge.\n\t' +
				'4: another option\n\t' +
				'5: another option';
		}

		// prompt the player to make choices
		choice = await prompt(msg);

		/* PART B: end the game if there are no more choices to make */

		/* PART B: check if the player made a valid choice */
	}

	exit(); // exits the game
})(); // end wrapper
