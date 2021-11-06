# Snake

Move your snake over food pellets to eat them and get bigger but don't run into yourself or the walls!

## Instructions for PART A

Let the player change the direction the snake moves using the arrow keys. For now you will just be moving the head of the snake. Limit movement so that the snake can't go in the opposite direction that it's currently headed.

Add a food pellet at a random empty location (not occupied by the snake) on the lcd screen. When the snake head touches a food pellet, make a new food pellet appear.

The snake must stay within the boundaries of the screen, if it goes off screen the player loses the game.

When the snake head is about to go off the edge of the screen, the whole snake should stop moving and start blinking repeatedly to show it is dead. Use the modulo operator `%` and p5.js `frameCount` to acheive this effect inside the `draw` function.

!Hint: don't let the snake head be assigned a position off the screen.

Create the rest of the snake. The available snake blocks are named `snake head`, `snake body`, and `snake tail`. Add two body objects and one tail to the `snake` array.

When the snake head moves the rest of the snake should follow it.

If the snake is about to run into itself, the whole snake should stop moving and blink to show it is dead.

Each time the snake eats a pellet make it move a bit faster unless it is already going max speed. Define the max speed as a reasonable limit on how fast the snake should move. The snake should still move one block at a time, so don't change that amount, change the rate at which it moves.

## Instructions for PART B

Pick three modes from the Google's online snake game to implement in your snake game!
