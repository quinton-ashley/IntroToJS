# TicTacToe

Tic-tac-toe (also known as noughts and crosses, Xs and Os, or X'y O'sies) is a paper-and-pencil game for two players who take turns marking X or O in the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.

## Instructions for PART A

Implement TicTacToe between two human players. Start by finishing the template code, create all the big buttons using a nested for loop. Use `bigSpace` as the text for the initial state of the buttons.

Make a `btnClicked` function with row and column input parameters. Use an anonymous function to call `btnClicked` for all the buttons in the loop. When a player clicks a button, record their move on the `board[][]` with an `x` or `o` and use `pc.text` to draw a `bigX` or `bigO` on the button.

Also change turns after a button is clicked.

If a player tries to place their x or o on a space that is not empty do not let them overwrite that space. Alert the player, say they can't put their mark there because the space is not empty. Show the alerts on the bottom right of the screen, don't let them overlap with anything or it will get erased when the alert window gets erased.

Check for winners (three Xs or three Os in a row) on all horizontal and vertical rows using a single for loop. Also check for diagonals. The function should take a mark ('x' or 'o') as a parameter `checkForWinner('x')`.

Also check for a draw.

After a game is complete, start a new game. Keep track of how many times each player has won and display the tally at all times in the top right part of the screen.

## Instructions for PART B

Make buttons to let the user pick between starting a two player game or one player game against your AI player.

Make three levels of AI player:

- easy : picks the first available space
- medium : picks any available space randomly
- hard : picks winning move if available, blocks opponent's winning moves if they have any, otherwise picks any available space

In single player mode either let the player pick the AI difficulty or make it progressive, meaning the player has to beat easy AI, then medium AI, before they play against hard AI.

## Instructions for PART C

TicTacToe is a solved game, meaning that if both players always play their best moves, the game will end in a forced draw.

Implement an unbeatable AI player that will also use strategies to beat unskilled players most of the time.

Make a 0 player mode and watch two of your AI players play against each other. Have a limit to the number of matches that will be played and use `await delay(ms)` between matches and/or turns so the results can actually be viewed by the user.
