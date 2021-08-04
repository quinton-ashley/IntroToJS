const hangman = [
  `
  +---+
  |   |
      |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

let parts = 0;

let words = `abruptly absurd abyss affix askew avenue awkward axiom azure bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard boggle bookworm boxcar buckaroo buffalo buffoon buxom buzzard buzzing buzzwords cobweb croquet crypt cycle disavow dizzying duplex dwarves embezzle equip espionage euouae exodus faking fishhook fixable fjord flapjack flopping fluffiness flyby foxglove frazzled frizzled fuchsia funny gabby galaxy galvanize gazebo gizmo glowworm glyph gnarly gnostic gossip grogginess haiku haphazard hyphen icebox injury ivory ivy jackpot jawbreaker jaywalk jazzy jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful juicy jukebox jumbo kayak kazoo keyhole kilobyte kiosk kitsch kiwifruit klutz knapsack larynx lengths lucky luxury lymph marquee matrix megahertz microwave mnemonic mystify nightclub nowadays oxidize oxygen pajama phlegm pixel pizazz polka psyche puppy puzzling quartz queue quips quiz quizzes quorum razzmatazz rhubarb rhythm scratch snazzy sphinx squawk staff strength stretch stronghold stymied subway swivel syndrome thrift thumb topaz transcript transgress transplant twelfth triphthong unknown unzip vaporize voodoo vortex walkway waltz wave wavy waxy well whomever witch wizard wristwatch xylophone yacht youthful yummy zigzag zilch zipper zodiac zombie`;

/* PART A0: split the words string into an array, choose a random word */
words = words.split(" ");
// generate random number between 0 and the number of words in the words array
let random = Math.floor(Math.random() * words.length);
const word = words[random];
console.log(word); // don't look! no cheating! jk ;P

/* PART A1: make an array with a line for each letter in the word */
// Example word: 'quiz'
// lines -> ['_', '_', '_', '_']
let lines = [];
// word.length is the number of letters in the word
for (let i = 0; i < word.length; i++) {
  lines.push("_"); // add a line to the array
}

async function startGame() {
  /* PART A3: make the game loop, don't use the hangman until part B */
  while (lines.includes("_")) {
    /* PART B: display the hangman in the prompt */
    let msg = hangman[parts] + "\n" + lines.join(" ");
    // guess is the letter the user entered
    // or a guess of the full word
    let guess = await prompt(msg);
    let isCorrect = false;
    // test if the guess is a whole word, not just one letter
    if (guess.length > 1) {
      if (guess == word) {
        break; // if guess matches word the user won, end loop
      }
    } else {
      for (let i in lines) {
        // the next letter in the word
        let letter = word[i];
        if (letter == guess) {
          lines[i] = letter;
          isCorrect = true;
        }
      }
    }

    if (isCorrect == true) {
      await alert("correct!");
    } else {
      await alert("incorrect!");
      parts++;
    }

    if (parts > 6) {
      break;
    }
  }

  if (parts <= 6) {
    await alert("You got it! The word is " + word);
  } else {
    await alert("You ran out of attempts. The word is " + word);
  }
  exit();
}

startGame();
