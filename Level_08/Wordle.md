# Wordle

Wordle is a combination of Mastermind and Hangman in which you must guess a word in six tries. Each guess must be a valid five-letter word. After each guess, the color of the tiles will change to show how close your guess was to the word.

https://www.nytimes.com/games/wordle/index.html

## Instructions for Part A

Split the list of common five letter words from the `words5.txt` file into an array of `words`. Take a look at the file, it has one word per line. HINT: Review your Hangman code. Remember the String `split` function.

Split the list of all five letter words from the `dictionary5.txt` file into an array, call it `dictionary`. Note this will be a bit more challenging since the file has multiple words per line. HINT: Remember you can use `arr.push(item)` to add to arrays.

## Instructions for Part B

Pick a random word from `words`, call it `word`. HINT: Review your Hangman program.

Each letter in each of the player's valid guesses will be displayed inside a box. The player only has 6 chances to guess the 5 letter word. All 30 empty boxes should be displayed in the beginning.

When the player guesses a word, check if the word is five letters. If it is not five letters, alert the player.

Also check if the player's guess can be found in the dictionary, if not, alert the player.

If the player's guess is valid, show it on the board. Make a game loop to let the player guess again. Do not count invalid guesses as one of the player's six guesses.

## Instructions for Part C

Show the player whether the letters in their guesses are in the correct position in the word.

Also show the player whether the letters in their guesses are found in the word.

If you'd like the extra challenge, the actual rules are a bit more complicated. Here are some examples:

If the word is BEING and the player's guess is KNEEL, only the first E in kneel should be marked as appearing in the word, the second E should not be marked as appearing in the word. This indicates there is an E in the word but it is closer to the first E.

If the word is BEING and the player's guess is SEVEN, the first E should be marked as appearing in the correct position in the word. The second E should not be marked. This shows that there is only one E and the user already found its position.
