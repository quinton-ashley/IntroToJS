# WheelOfFortune

The TV show, "Wheel of Fortune", features many different mini-games that contestants play. You'll make one of the hangman inspired mini-games. In this mini-game blank boxes representing all the letters in a phrase are presented to the player. Letters are revealed to the player slowly, one by one, in their correct positions. The sooner the player presses the buzzer and correctly guesses the phrase, the more points they win!

## Instructions

Make boxes using `textRect(x, y, w, h)` around the blank spaces and letters just like in the Wheel of Fortune TV show.

```js
textRect(5, 5, 3, 3); // make a 3x3 rect at row 5 column 5 (5,5)
text('w', 6, 6); // make letter 'w' at row 6 column 6 (6,6)
```

Use `for` loops to make all the boxes for the phrase!

```txt
┌─┐┌─┐┌─┐┌─┐┌─┐
│W││h││e││e││ │
└─┘└─┘└─┘└─┘└─┘
```

Use the `delay` function to delay the rate at which letters are displayed.

```js
// you need to make the function asynchronous to use await
async function takeFive() {
	log('wait 5 seconds...');
	await delay(5000); // waits for a delay of 5000ms aka 5 seconds
	log('5 seconds passed');
}
```

Just like in TicTacToe, you should keep track of which letters have been placed on the board using the `board` 2d array. Reference the AI level 1 code in TicTacToe for choosing available spaces. Use the same method to find a random space to add a letter.

If the player guesses the phrase correctly their score should be increased by the number of blank spaces left.

If the player guesses wrong or press cancel in the prompt, their score should be decreased by 1 but the game should then keep going and they should have the opportunity to guess again.

If the player is too slow and all the letters in the phrase are shown, they lose that round and their score should be decreased by 3.
