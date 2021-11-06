# Contain

Contain is a 1 player or 2-4 player co-op variant of Pong, with the goal being to keep multiple balls within a square surrounded by four small paddles. Contain at least two balls or it's game over!

## Instructions

Copy and paste your code from Pong into your `GAMES/contain.js` file.

Remove the walls and add horizontal paddles to the top and bottom of the screen. You will have to make new sprite art for the horizontal paddles using the `spriteArt()` function. Make them look like the other paddles just turned 90 degrees.

Make four balls on the screen at once! Make an array of balls and adjust the game loop to loop through all of them.

Now since we don't want all the balls to be served at one time, make an `async` function to serve a ball from the center every 4 seconds using `await delay(4000)`.

Use a variable to store the number of balls served and the number of balls actively on the screen. Make a new property of the ball class, a boolean to store whether it is actively on the screen or not. Don't check for collisions with the paddles for balls that are offscreen.

Make the total speed of the ball increase as the game goes on.

Use `text()` to display the player's score, it can be based on the number of bounces they've gotten on their paddles and/or the amount of time they contained at least two balls.

The game ends when the player runs out of balls! Show them a "Game Over" screen and then let them try again. Use `await alert()`

## CHALLENGE SECTION

Interested in learning how the p5.play sprite bounce function works? Try implementing your own methods for checking for bounces.

How do you write "is ball touching the paddle" in code? Mathematically what we need to know is when the ball's rectangle intersects the rectangle of the paddles or wall. Yes, the ball is a circle but for now we'll use a rectangle for our collision detection calculations.

In this diagram are numbered rectangles. It is easy for us humans to see visually why the numbered rectangles are not intersecting the middle rectangle, number 4.

```txt
┌───┐┌───┐┌───┐
│ 0 ││ 1 ││ 2 │
└───┘└───┘└───┘
┌───┐┌───┐┌───┐
│ 3 ││ 4 ││ 5 │
└───┘└───┘└───┘
┌───┐┌───┐┌───┐
│ 6 ││ 7 ││ 8 │
└───┘└───┘└───┘
```

Stop and try to make one sentence that logically explains what must be true if two rectangles are NOT intersecting.

Here's the answer: two rectangles are NOT intersecting if the rectangle is either fully above or below and/or fully to the left or to the right of the other rectangle.

Since rectangles can be defined by their top left point and the bottom right corners, we only need to check those against the other rectangles top left and bottom right corners.

```txt
(x, y)
 ┌─────────────┐
 │             │
 │             │
 └─────────────┘
            (x+w, y+h)
```

How do we change the angle of the ball's vector to be a bit random each time a new ball is "served" without changing the ball's total speed? Take a look at this website for the math you'll need to do this:

<https://setosa.io/ev/sine-and-cosine/>

Start by figuring out where the ball will go depending on what theta is. Theta should be in the range 0 to 2π. Use `Math.PI` for π. Then make theta randomly a bit lower or higher from a perfect diagonal.

Check for collisions between balls. Make a different collision detection method for collisions between circles. Circles intersect if the distance between their centers is less than the sum of their radius (plural).

```
distance = (x2-x1)²+(y2-y1)²
```
