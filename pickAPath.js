const log = console.log;

let playingGame = true;

let name = window.prompt("Enter your name: ");

if (!name) {
	playingGame = false;
}

function pickPath(choice) {
	let msg; // message
	let opt = []; // options
	if (choice == 1000) {
		msg = name + ` walked into the Everglade forrest. He saw a house in the distance. He also saw a deer. Should they: \n` +
			`0: follow the deer\n` +
			`1: go towards the house?`;
		opt = [0, 1];
	} else if (choice == 0) {
		msg = `They followed the deer. But it was too fast and they got lost by going off the path! Should they try to get help or try to find shelter for the night?
		2: try to find help
		3: try to find shelter`;
		opt = [2, 3]
	} else if (choice == 1) {
		msg = `They go to the house and find an old man inside. He wants to tell them a story? Listen to the old man's story?
		4: yes
		5: no`;
		opt = [4, 5];
	} else if (choice == 2) {
		msg = `They don't find any help. Everyone's cellphone ran out of battery! Should they:
		3: try to find shelter
		6: stay where they are`;
		opt = [3, 6];
	} else if (choice == 3) {
		msg = `They found a cave. They stayed in it for 10 minutes but suddenly heard growling. It was bear! Should they:
		7: try to quietly leave the cave
		8: RUN!`;
		opt = [7, 8];
	} else if (choice == 4) {
		msg = `The old man told a scary story about the bears in the forest. You're scared to leave the house now. Should you:
		9: try to spend the night on the couch
		10: go back outside to the forrest`;
		opt = [9, 10];
	} else if (choice == 5) {
		msg = `The old man got upset. You hurt his feelings. He tells you to leave his house. It is now the middle of the night. Should you
		11: beg the old man to stay at his house
		10: leave the house`;
		opt = [11, 10];
	} else if (choice == 7) {
		msg = `They snapped a twig lying on the cave floor. The bear woke up!
		8: RUN!
		12: try to not move`;
		opt = [8, 12];
	} else if (choice == 8) {
		msg = `They ran from the cave without the bear noticing! They ran so far they could see the house again!
		1: go to the house
		14: keep running!`;
		opt = [1, 14];
	} else if (choice == 9) {
		msg = `They spent the night on the couch. When they woke up it had snowed!
		15: build a snowman
		16: go sledding`;
		opt = [15, 16];
	} else if (choice == 10) {
		msg = `It's night time now and you're lost! Should they try to get help or try to find shelter for the night?
		2: try to find help
		3: try to find shelter`;
		opt = [2, 3];
	} else if (choice == 12) {
		msg = `The bear comes close to them. Sniffs right in front their face! What do you do?
		8: RUN!
		13: try to not move`;
		opt = [8, 13];
	}
	return {
		message: msg,
		options: opt
	};
}

let goodEndings = {
	15: 'They built a great snowman!',
	16: 'They went sledding on a big hill!'
};

let badEndings = {
	13: 'They got eaten by the bear!'
};

let exitOpt = "\npress cancel to exit game";

let choice = 0;
let nextChoice = 1000;

let invalidChoice = false;

while (playingGame) {

	if (!invalidChoice) {
		choice = nextChoice;
	}

	// choice was an end game choice
	if (badEndings[nextChoice] || goodEndings[nextChoice]) {
		// if bad ending
		if (badEndings[nextChoice]) {
			alert('You lost! ' + badEndings[nextChoice] + ' Try again!');
		} else {
			alert('You won! ' + goodEndings[nextChoice] + ' Good job!');
		}
		break; // exit
	}

	let path = pickPath(choice);

	let msg = "PickAPath v0.1\n";

	if (invalidChoice) {
		if (nextChoice == -10) {
			msg += "Invalid choice: you didn't enter a number\n";
		} else {
			msg += "Invalid choice: " + nextChoice + "\n";
		}
	}

	msg += path.message + exitOpt;

	nextChoice = window.prompt(msg);

	if (nextChoice == '') {
		nextChoice = -10;
		invalidChoice = true;
		continue;
	}
	// user cancelled, exit game
	if (nextChoice == null) {
		break;
	}

	nextChoice = Number(nextChoice);

	invalidChoice = !path.options.includes(nextChoice);

} // end of while loop


if (!playingGame) {
	alert('Bye! Thanks for playing! (why did u leave? D= [im sad now])');
} else {
	alert('Bye! Thanks for playing!');
}


// close();
