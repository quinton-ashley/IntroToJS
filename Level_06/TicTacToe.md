# TicTacToe

Tic-tac-toe (also known as noughts and crosses, Xs and Os, or X'y O'sies) is a paper-and-pencil game for two players who take turns marking X or O in the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.

## Instructions for PART A

Implement TicTacToe between two human players. Start by finishing the grid lines.

Create 9 buttons for all the empty spaces on the grid. Use `bigSpace` for the text of these buttons. Start with the top row, then middle row, and then do the last row.

Now create all the buttons using a nested for loop instead of doing them one by one. Pay attention to the intervals at which the buttons are placed.

Make a `takeTurn` function with row and column input parameters. The click callback function for all the buttons should be an anonymous function. Inside the anonymous function call `takeTurn(row, col)`. For now try drawing a `bigX` on the clicked button using the `text` function.

When the first player clicks a button, record their move on the two dimensional `board` array with an 'x' and use the `text` function to draw a `bigX` on the button. After the first player makes their move, change turns so that when the second player clicks the button record their move as an 'o' and draw a `bigO` on the button.

If a player tries to place their 'x' or 'o' on a space that is not empty, do not let them overwrite that space. Show the player an alert window that explains they can't put their mark there because the space is not empty. Show the alerts on the bottom right of the screen, don't let them overlap with the Tic Tac Toe grid or it will get erased when the alert window gets erased. Note that the alert function also accepts an optional width limit as a 4th input parameter: `alert(text, row, col, w)`

Create a function called `checkForWinner` that should take a mark ('x' or 'o') as an input parameter. Check for winners (three Xs or three Os in a row) on all horizontal and vertical rows using a single for loop. Also check for the two diagonals, no loop required. If there is a winner return `true`, if there's not return `false`. Use the function in `takeTurn` and tell the players who won.

Create a function called `checkForDraw` that checks for a draw. Use the function in `takeTurn` and tell the players there was a draw.

After a game is complete, start a new game. Always show whose turn it is and a tally of the score in the top right corner.
