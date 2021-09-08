# TicTacToe

Tic-tac-toe (also known as noughts and crosses, Xs and Os, or X'y O'sies) is a paper-and-pencil game for two players who take turns marking X or O in the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.

## Instructions for PART A

Implement TicTacToe between two human players. Start by finishing the template code, create all the big buttons using a nested for loop. Use `bigSpace` as the text for the initial state of the buttons.

Make a `btnClicked` function with row and column input parameters. Use an anonymous function to call `btnClicked` for all the buttons in the loop. When the first player clicks a button, record their move on the two dimensional `board` array with an 'x' and use `pc.text` to draw a `bigX` on the button. After the first player makes their move, change turns so that when the second player clicks the button record their move as an 'o' and draw a `bigO` on the button.

If a player tries to place their 'x' or 'o' on a space that is not empty, do not let them overwrite that space. Show the player an alert window that explains they can't put their mark there because the space is not empty. Show the alerts on the bottom right of the screen, don't let them overlap with the Tic Tac Toe grid or it will get erased when the alert window gets erased.

Create a function called `checkForWinner` that should take a mark ('x' or 'o') as an input parameter. Check for winners (three Xs or three Os in a row) on all horizontal and vertical rows using a single for loop. Also check for the two diagonals, no loop required.

Create a function called `checkForDraw` that checks for a draw.

After a game is complete, start a new game. Always show whose turn it is and a tally of the score in the top right corner.

## Instructions for PART B

Make buttons to let the user pick between starting a two player game or one player game against your AI player.

Make three levels of AI player:

- Easy : picks the first available space
- Medium : picks any available space randomly
- Hard : picks a winning move if available, blocks opponent's winning moves if they have any, otherwise it picks any available space

Also make a "Challenge Mode" option for the AI difficulty. Make it progressive, so the player has to beat easy AI, then medium AI, before they play against hard AI.

## Instructions for PART C

TicTacToe is a solved game, meaning that if both players always play their best moves, the game will end in a forced draw.

Try implementing a Very Hard AI player that's unbeatable and uses tricky strategies to beat unskilled players.

First make a 0 player mode to test your Very Hard AI against your Hard AI. Have a limit to the number of matches that will be played. You should be able to view the results of each match.
