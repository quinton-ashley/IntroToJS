(async () => { // start of wrapper (I will explain how this works later)

	let choice = -1; // initialize choice to -1, user has not made any choice yet

	while (choice != null) { // while choice is not null (nothing)
		let msg = ''; // initialize message to empty string
		if (choice == -1) {
			/* PART A: Start your story! */
			msg = "Will your players walk onto a pirate ship or step into outer space? Your story starts here and it's up to your players to choose where the story goes. What should you do? \n\n\t" +
				"1: write about pirates\n\t" +
				"2: write about astronauts\n\t" +
				"3: write about pirates in space!";
		} else if (choice == 1) {
			/* PART A: continue the story */
			msg = "Continue the story, each choice will lead to another path, you can reuse the same options though and have paths converge.\n\t" +
				"4: another option\n\t" +
				"5: another option";
		}

		// prompt the player to make choices
		choice = await prompt(msg);

		/* PART B: end the game if there are no more choices to make */

		/* PART B: check if the player made a valid choice */

	}

	exit(); // exits the game
})(); // end wrapper
