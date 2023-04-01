# TicTacToe

Tic-tac-toe (also known as noughts and crosses, Xs and Os, or X'y O'sies) is a paper-and-pencil game for two players who take turns marking X or O in the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.

## Instructions for Part A

For this project you'll be implementing TicTacToe between two human players.

Start by finishing the grid lines.

Create 9 buttons for all the empty spaces on the grid. Use `bigSpace` for the text of these buttons. Start by making the buttons on the top row, then the middle row, and then do the last row.

## Instructions for Part B

Now create all the buttons using a nested for loop instead of doing them one by one. Pay attention to the intervals at which the buttons are placed.

Make a `takeTurn` function with row and column input parameters. The click callback function for all the buttons should be an anonymous arrow function. Inside the anonymous function run `takeTurn(row, col)`. For now try drawing a `bigX` on the clicked button using the `text` function.

After player X takes their turn, player O should be able to place their `bigO` mark on the grid. HINT: Store whose turn it is in a variable.

## Instructions for Part C

If a player tries to place their 'x' or 'o' on a space that is not empty, do not let them overwrite that space. To achieve this, start by storing the position of the marks the players make in a two dimensional `board` array.

When a player clicks a button the `takeTurn` function should check if the corresponding position in the board array is empty. Show the player an alert window that explains they can't put their mark there because the space is not empty. You may notice the alert is not placed in an ideal location haha.

## Instructions for Part D

Show alerts on the bottom right of the screen, don't let them overlap with the Tic Tac Toe grid or it will get erased when the alert window gets erased. HINT: Remember that the alert function accepts an optional width limit as a 4th input parameter: `alert(text, row, col, w)`

Create a function called `checkForWinner` that should take a mark ('x' or 'o') as an input parameter. First try checking for winners (three Xs or three Os in a row) on the first row. If there is a winner return `true`, if there's not return `false`. Use the `checkForWinner` function in `takeTurn` and tell the players who won using an alert.

Now implement checking for a winner in all horizontal rows and vertical columns in a loop. Also check for the two diagonals, no loop required.

Create a function called `checkForDraw` that checks for a draw (all spaces filled and no winner). Use the function in `takeTurn` and tell the players there was a draw.

After a game is complete, start a new game.

Always show whose turn it is and a tally of the score in the top right corner. Use the `txt` function, not alerts.

Make it random who starts first in the beginning or in case of a draw, otherwise, let the player who lost go first.
