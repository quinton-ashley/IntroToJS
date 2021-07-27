# Hangman

## Instructions for PART A

[Hangman](<https://en.wikipedia.org/wiki/Hangman_(game)>) is a paper and pencil guessing game for two or more players. One player thinks of a word, phrase or sentence and the other(s) tries to guess it by suggesting letters within a certain number of guesses.

The word to guess is represented by a row of dashes, representing each letter of the word. For example if the word was "quiz" you should display four dashes: `_ _ _ _`

Tell the player whether their guess was correct or incorrect. If they guessed a letter which occurs in the word, writes it in all its correct positions. You will implement this game logic in PART A.

For example if the word is "avenue" and the player has guessed "e", "x", "b", "r", "v" your prompt should display: `_ v e _ _ e`

If the suggested letter does not occur in the word, the other player draws one element of a hanged man stick figure as a tally mark. You will implement this in PART B.

## Instructions for PART B

The player guessing the word may, at any time, attempt to guess the whole word. If the word is correct, the game is over and the guesser wins. The guesser can also win by guessing all the letters that appear in the word.

If the suggested letter does not occur in the word, the other player draws one part of a hanged man stick figure. If the other player makes enough incorrect guesses to allow his opponent to complete the diagram, the game is over and the guesser loses.
