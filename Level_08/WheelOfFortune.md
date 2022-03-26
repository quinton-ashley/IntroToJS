# WheelOfFortune

The TV show, "Wheel of Fortune", features many different mini-games that contestants play. You'll make one of the hangman inspired mini-games. In this mini-game blank boxes representing all the letters in a phrase are presented to the player. Letters are revealed to the player slowly, one by one, in their correct positions. The sooner the player presses the buzzer and correctly guesses the phrase, the more points they win!

## Instructions for PART A

Split the `phrasesList` into an array of `phrases`. Select a random phrase, call it `fullPhrase`, and split it into an array of words called `phrase`. HINT: Review your Hangman program.

```js
// example
fullPhrase -> 'Community Chest'
phrase -> ['Community', 'Chest']
```

Make a 2D `board` array that should be initialized to store blank space strings for all the letters in the phrase. Similar to TicTacToe, you will use this `board` to keep track of which letters have been revealed. HINT: Use the `repeat` and `split` String functions.

```js
// blank spaces for the phrase "Community Chest"
board -> [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ']
]
```

Make boxes using `textRect` around the blank spaces and letters just like in the Wheel of Fortune TV show. Use `for` loops to make all the boxes for the phrase! HINT: Review your TicTacToe progam.

```txt
┌─┐┌─┐┌─┐┌─┐┌─┐
│W││h││e││e││ │
└─┘└─┘└─┘└─┘└─┘
```

## Instructions for PART B

Create an `addLetter` function that uses the `delay` function to delay the rate at which random letters in the phrase are revealed to the player. HINT: `delay` must be used in an async function. Do not reveal the same letters more than once, your `addLetter` function should only reveal a letter at a position in the phrase which has not been revealed previously. Use splice to remove letters from an array of available letter coordinates.

If the player guesses the phrase correctly their score should be increased by the number of blank spaces left in the `board`.

If the player guesses wrong or press cancel in the prompt, their score should be decreased by 1 point but the game should keep going and the player should have the opportunity to guess again.

If the player is too slow and all the letters in the phrase are shown, they should lose that round and their score should be decreased by 3 points.
