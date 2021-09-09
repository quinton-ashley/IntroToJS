# WheelOfFortune

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen2.jpg)

_This is a BONUS program, the main game for this level is Pong_

For this challenge section you'll make a hangman inspired mini-game from Wheel of Fortune! Hangman only uses one word, Wheel of Fortune also uses multi-word phrases.

Implement the first mini-game mode in Wheel of Fortune. In this mini-game letters should gradually appear in their correct positions in the phrase until the player presses a buzzer indicating they want to guess the whole phrase. You can watch Wheel of Fortune on YouTube to see the game in action!

Make boxes using `pc.rect(x, y, w, h)` around the blank spaces and letters just like in the Wheel of Fortune TV show.

```js
pc.rect(5, 5, 3, 3); // make a 3x3 rect at row 5 column 5 (5,5)
pc.text('w', 6, 6); // make letter 'w' at row 6 column 6 (6,6)
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

If your player guesses wrong or press cancel in the prompt, the game should keep going and they should have the opportunity to guess again.

When the player guesses the phrase correctly their score should be increased by the number of blank spaces left.
