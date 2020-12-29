const log = console.log;

let man = {
  head: `  0 `,
  body: ` -|-`,
  legs: `  /\\ `
};

let words = `abruptly absurd abyss affix askew avenue awkward axiom azure bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard boggle bookworm boxcar boxful buckaroo buffalo buffoon buxom buzzard buzzing buzzwords caliph cobweb cockiness croquet crypt curacao cycle daiquiri dirndl disavow dizzying duplex dwarves embezzle equip espionage euouae exodus faking fishhook fixable fjord flapjack flopping fluffiness flyby foxglove frazzled frizzled fuchsia funny gabby galaxy galvanize gazebo giaour gizmo glowworm glyph gnarly gnostic gossip grogginess haiku haphazard hyphen iatrogenic icebox injury ivory ivy jackpot jaundice jawbreaker jaywalk jazziest jazzy jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful juicy jukebox jumbo kayak kazoo keyhole khaki kilobyte kiosk kitsch kiwifruit klutz knapsack larynx lengths lucky luxury lymph marquis matrix megahertz microwave mnemonic mystify naphtha nightclub nowadays numbskull nymph onyx ovary oxidize oxygen pajama peekaboo phlegm pixel pizazz pneumonia polka pshaw psyche puppy puzzling quartz queue quips quixotic quiz quizzes quorum razzmatazz rhubarb rhythm rickshaw schnapps scratch shiv snazzy sphinx spritz squawk staff strength strengths stretch stronghold stymied subway swivel syndrome thriftless thumbscrew topaz transcript transgress transplant triphthong twelfth twelfths unknown unworthy unzip uptown vaporize vixen vodka voodoo vortex voyeurism walkway waltz wave wavy waxy wellspring wheezy whiskey whizzing whomever wimpy witchcraft wizard woozy wristwatch wyvern xylophone yachtsman yippee yoked youthful yummy zephyr zigzag zigzagging zilch zipper zodiac zombie`;

words = words.split(' ');

let random = Math.floor(Math.random()*words.length);
let word = words[random];

let guesses = [];
for (let i = 0; i < word.length; i++) {
  guesses.push('_'); // add something to array
}

log(word);

function displayGuesses() {
  let blanks = '';
  for (let i = 0; i < word.length; i++) {
    blanks += guesses[i] + ' ';
  }
  return blanks;
}

function displayHangman() {
  return man.head + "\n" + man.body + "\n" + man.legs;
}

let playingGame = true;
let invalidInput = false;
let correctGuess = null;
let guess = null;

while (playingGame) {
  let msg = displayHangman() + "\n\n" + displayGuesses();

  if (invalidInput) {
    msg += '\nInvalid input! Please enter a lowercase letter!';
  } else if (correctGuess) {
    msg += '\ncorrect guess: ' + guess;
  } else if (correctGuess == false) {
    // explicitly check if correctGuess is false
    // to not display "incorrect guess" when starting game
    msg += '\nincorrect guess: ' + guess;
  }
  invalidInput = false;
  guess = window.prompt(msg);

  // check for null input (prompt was cancelled)
  if (guess == null) {
    break;
  }

  // check for invalid input
  if (guess.length != 1 || !"abcdefghijklmnopqrstuvwxyz".includes(guess)) {
    invalidInput = true;
    continue;
  }

  correctGuess = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == guess) {
      correctGuess = true;
      guesses[i] = guess;
    }
  }
  let hasWon = true;
  for (let i = 0; i < word.length; i++) {
    if (guesses[i] == "_") {
      hasWon = false;
      break;
    }
  }
  if (hasWon) {
    alert('You won! Thanks for playing.');
    playingGame = false;
  }
}


if (playingGame) {
  alert('You quit! Thanks for playing.');
}
