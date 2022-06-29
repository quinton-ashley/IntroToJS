# TicTacAIO

Artificial Intelligence Os!

## Instructions

For TicTacAIO you'll just be adding onto your code from 'TicTacToe'. Copy and paste the code from `ticTacToe.js` into your `ticTacAIO.js` file.

Make buttons for starting a two player game or one player game against your AI player. Remove these buttons from the screen when they start

Start by making the most simple AI player possible. It should pick the first available space.

Make buttons for choosing between AI difficulty levels: easy, medium, or hard. These buttons should appear after the user clicks the "One Player Start" button.

The medium level AI should pick between remaining available spaces on the Tic Tac Toe grid randomly.

The hard level AI should pick a winning move if available, blocks opponent's winning moves if they have any, and otherwise it should fallback to the medium AI level code (picking a random available space).

BUG FIX! Prevent human players from making moves while any alert windows are being displayed, that includes "game won", "draw", and "this space is taken" alerts.

## CHALLENGE SECTION

TicTacToe is a solved game, meaning that if both players always play their best moves the game will end in a forced draw.

Try implementing an Unbeatable AI player that uses strategies to win against unskilled players. Remember, the best offense is a good defense. Don't focus so much on making your Unbeatable AI a winner, just ensure they can never lose.

There are a few formations that skilled players can use to force a win in TicTacToe. These are formations of three marks, even if the opponent can block one instance of three in a row win they can't block the second. The Unbeatable AI must prevent their opponent from making these formations.

Test out your Unbeatable AI with a 0 player mode. Make it play hundreds of games against your Hard AI. When they finish playing you should be able to view the score and the results of every match in the console.

If the Hard AI is able to win a match against the Unbeatable AI, you'll know you need to add something to your Unbeatable AI code.
