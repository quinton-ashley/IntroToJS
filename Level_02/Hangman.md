# Hangman

## Instructions for PART A

[Hangman](<https://en.wikipedia.org/wiki/Hangman_(game)>) is a word guessing game for two or more players. One player thinks of a word and the other(s) try to guess it by suggesting letters. The word to guess is represented by underscores, representing each letter of the word. If the player(s) guess a correct letter in the word it is written in all the correct positions.

Use .split() to split the `words` string into an array of words, assign the array to the `words` variables. Then pick a random word from that array. Reference your use of `Math.random()` in the GuessTheNumber game.

Create a `lines` array with the same amount of underscores as the choosen word. For example, if the word is "quiz" the `lines` array should have four dashes: `['_', '_', '_', '_']`

Display the `lines` array like this `_ _ _ _` in the prompt on a new line below the hangman text drawing.

Tell the player whether their guess was correct or incorrect. If they guessed a letter which occurs in the word, edit the `lines` array so it will be displayed in all its correct positions. For example if the word is "avenue" and the player has guessed "e", "x", "b", "r", "v" your prompt should display: `_ v e _ _ e`

## Instructions for PART B

Replace the `while` loops that use a counter variable with `for` loops.

Use your browser's debugger to learn the order of operations of the `for` loop's sections.

## Instructions for PART C

If the suggested letter does not occur in the word, the other player draws one part of a hanged man stick figure. If the other player makes enough incorrect guesses to allow his opponent to complete the hangman drawing, the game is over and the guesser loses. Tell the player they lost and what the word was.

The player guessing the word may, at any time, attempt to guess the whole word. If the word is correct, the game is over and the guesser wins. The guesser should also still be able to win by guessing all the letters that appear in the word. When the player wins, tell them they won and what the word was.

Also when the player wins or loses, show them all the guesses they made.
