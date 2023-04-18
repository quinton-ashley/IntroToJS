# Hangman

[Hangman](<https://en.wikipedia.org/wiki/Hangman_(game)>) is a word guessing game for two or more players. One player thinks of a word and the other(s) try to guess it by suggesting letters. The word to guess is represented by underscores, representing each letter of the word. If the player(s) guess a correct letter in the word it is written in all the correct positions.

## Instructions for Part A

Split the `wordsList` String into an array, call the array `words`. HINT: use the `split` String function.

Pick a random word from the array of words. HINT: Remember `.length` can be use to get the length of an array. Reference your use of `random()` in the GuessTheNumber game. Remember items in an array can be accessed using square brackets: `array[index]`

## Instructions for Part B

Create a `lines` array with the same amount of underscores as the choosen word. For example, if the word is "quiz" the `lines` array should have four dashes: `['_', '_', '_', '_']`. HINT: Use a for loop with a counter variable!

```js
//   initialize;  condition; increment
for (let i = 0; i < loopAmount; i++) {
	// code that gets run each loop
}
```

Make the game loop! Add a variable that will store how many wrong guesses the player has made. If they make more than 6 wrong guesses the game should end. Put the code that shows the hangman and asks the player for a guess inside the loop. HINT: Use a while loop.

Display the `lines` array like this `_ _ _ _` in the prompt on a new line below the hangman text drawing. HINT: use the String `join` function and remember the newline character `\n`

## Instructions for Part C

If the player guesses a letter which occurs in the word, edit the `lines` array so the letter will be displayed in all its correct positions. For example if the word is "avenue" and the player has guessed "e" your prompt should display: `_ _ e _ _ e` HINT: Use a `for` loop with a counter variable.

If the player guesses a letter which does not occur in the word, the computer should add a body part to the hangman stick figure. HINT: Ensure their guess matched none of the letters in the word.

## Instructions for Part D

If the player wins, the game should end. The player wins if they guess the whole word or if the lines array does not include any lines. Add the condition to the game loop using boolean OR `||`. HINT: Remember the `includes` array function.

If the player wins tell them they won! If they lost show them the word.

These are some hard words to guess within a limit of only 5 mistakes! Make the game a bit easier by adding more drawings to the `hangman` array. Make the scaffold build up before the hangman is drawn.

Ask the player if they'd like to keep playing, if they say yes start a new game. HINT: Use a while loop and the `prompt` function.

## EXTRA CHALLENGE

Show the user the letters they guessed wrong. If the user guesses the same wrong letter twice, don't count it! Tell them they already guessed that letter and they should guess a different letter.
