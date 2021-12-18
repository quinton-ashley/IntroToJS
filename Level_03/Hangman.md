# Hangman

[Hangman](<https://en.wikipedia.org/wiki/Hangman_(game)>) is a word guessing game for two or more players. One player thinks of a word and the other(s) try to guess it by suggesting letters. The word to guess is represented by underscores, representing each letter of the word. If the player(s) guess a correct letter in the word it is written in all the correct positions.

## Instructions for PART A

Split the `words` String into an array of words, assign the array to the `words` variables. HINT: use the `split` String function.

Pick a random word index from the array of words. HINT: reference your use of `Math.random()` in the GuessTheNumber game.

## Instructions for PART B

Use your random word index to get the word form the array of words.

Create a `lines` array with the same amount of underscores as the choosen word. For example, if the word is "quiz" the `lines` array should have four dashes: `['_', '_', '_', '_']`. HINT: Use `word.length` and the `repeat` and `split` String functions.

Display the `lines` array like this `_ _ _ _` in the prompt on a new line below the hangman text drawing. HINT: use the `join` String function.

## Instructions for PART C

If the player guesses a letter which occurs in the word, edit the `lines` array so the letter will be displayed in all its correct positions. For example if the word is "avenue" and the player has guessed "e", "x", "b", "r", "v" your prompt should display: `_ v e _ _ e`

## Instructions for PART D

Replace the while loops you used for counting, use for loops instead!

If the player guesses a letter which does not occur in the word, the computer should add a body part to the hangman stick figure. HINT: Don't check if they got a letter wrong, just ensure their guess matched none of the letters in the word.

If the player makes too many wrong guesses and the hangman drawing is completed, the game should end. HINT: use `break` to exit the game loop early.

Make the game a bit easier by adding more drawings to the `hangman` array.

The player guessing the word may, at any time, attempt to guess the whole word. If the word is correct, the game is over and the guesser wins. The guesser should also still be able to win by guessing all the letters that appear in the word.

At the end of the game tell the player if they won or lost and show them what the word was.
