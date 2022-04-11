# Wordle

Wordle is a combination of Mastermind and Hangman in which you must guess a word in six tries. Each guess must be a valid five-letter word. After each guess, the color of the tiles will change to show how close your guess was to the word.

https://www.nytimes.com/games/wordle/index.html

## Instructions for PART A

Split the list of common five letter words from the `words5.txt` file into an array of `words`. Take a look at the file, it has one word per line.

Split the list of all five letter words from the `dictionary5.txt` file into an array, call it `dictionary`. Note this will be a bit more challenging since the file has multiple words per line.

## Instructions for PART B

Each letter in each of the player's valid guesses will be displayed inside a box. The player only has 6 chances to guess the 5 letter word. All 30 empty boxes should be displayed in the beginning.

Pick a random word from `words`, call it `word`. HINT: Review your Hangman program.

When the player guesses a word, check if the word is five letters also check if it can be found in the dictionary. If the player's guess doesn't meet these requirements, alert the player. Do not count this guess as one of the players six guesses. HINT: It's more efficient to check whether the player's guess is five letters before checking if it is found in the dictionary.

If the player's guess is valid, edit the board array so that the word is shown.

## Instructions for PART C
