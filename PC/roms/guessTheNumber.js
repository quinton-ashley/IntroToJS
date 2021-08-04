/* Finished game rom with extra challenges implemented */

(async () => {
  // start wrapper (don't worry about this for now)

  /* PART A: Make a random number between 1-100 */
  let num = Math.random() * 100;
  // round up to nearest whole integer
  num = Math.ceil(num);

  // initialize guess
  let guess = 0; // outside the range of 1 to 100 so it can't be equal to num

  /* PART B: Make the game loop */
  for (let attempts = 0; guess != num; attempts++) {
    // break out of while loop if turns count is 7
    // 7 is the maximum attempts needed because
    // 2^7 = 128 which is higher then the 100 values the number could be
    if (attempts == 7) {
      await alert("Out of attempts! :(");
      break;
    }

    // ask user to guess a number, returns the number they guessed
    guess = await prompt("Guess a number 1 to 100");

    /* PART A: Tell the player their guess was too low, too high, or correct */
    if (guess < num) {
      await alert("Your guess was too low");
    } else if (guess > num) {
      await alert("Your guess was too high");
    } else if (guess == num) {
      await alert("You got it!");
    } else {
      await alert("Invalid guess");
      attempts--; // attempts-- counter-acts the attempts++ of the for loop
      // results in no change to amount of valid guess attempts
      // the player has left
    }
  }

  exit();
})(); // end wrapper
