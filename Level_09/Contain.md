# Contain

Contain is a 1 player or 2-4 player co-op variant of Pong, with the goal being to keep multiple balls within a square surrounded by four small paddles. Contain at least two balls or it's game over!

## Instructions

Copy and paste your code from Pong into your `GAMES/contain.js` file.

Remove the walls but keep the paddles on the left and right sides of the screen. Add horizontal paddles to the top and bottom of the screen. You will have to make new sprite art for the horizontal paddles using the `spriteArt()` function. They should look like the other paddles rotated 90 degrees.

Move all four paddles using the mouse position coordinates: `mouseX` and `mouseY`.

Use the `bounce` function with a callback to play a sound when the ball bounces off a paddle.

Make four balls on the screen at once! Make an array called `balls`. The goal of this game is for players to contain at least two of the four balls.

Since we don't want all the balls to be served at once, make a new function called `serve`. This function should serve the balls one by one with a delay. Before serving the first ball make a countdown ("3", "2", "1") using `text()`.

Make a `for` loop in the p5.js `draw` function to loop through all of the balls and check for bounces with the paddles.

Make a new property `active` of the ball class, a boolean to store whether the ball is actively on the screen or not. By default set this property to false. Set `active` to true when the ball is served.

In the for loop for the balls in the p5.js `draw` function, skip the iteration of the loop using `continue` if the ball is inactive. The program doesn't need to check for collisions between the paddles and the balls that are offscreen.

Make the total speed of each ball increase each time they bounce off a paddle.

Use `text()` to display the player's score, it can be based on the number of bounces they've gotten on their paddles and/or the amount of time they contained at least two balls.

Use a variable to store the number of balls served and the number of balls actively on the screen. If the number of balls is 1 or less then the game should end! Show them a "Game Over" screen and then let them try again. Use `await alert()`

## CHALLENGE SECTION

How do we change the angle of the ball's vector to be a bit random each time a new ball is "served" without changing the ball's total speed? Take a look at this website for the math you'll need to do this:

<https://setosa.io/ev/sine-and-cosine/>

Start by figuring out where the ball will go depending on what theta is. Theta should be in the range 0 to 2π. Use `Math.PI` for π. Then make theta randomly a bit lower or higher from a perfect diagonal.

The balls should not be able to go straight up and down or left and right.

How could you check for collisions between balls without using the p5.play `bounce` function? Make a collision detection method for intersections between circles. Circles intersect if the distance between their centers is less than the sum of their radius (plural).

```
distance = (x2-x1)²+(y2-y1)²
```
