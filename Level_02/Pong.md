# Pong

Pong is a table tennis–themed arcade game, featuring simple two-dimensional graphics, created by Allan Alcorn. It was manufactured by Atari and released in 1972.

If you're not familiar with Pong take a look at this demonstration video:

<https://www.youtube.com/watch?v=fiShX2pTz9A>

## Instructions for Part A

Create two paddle sprites using the existing `paddleImg` and place them on opposite ends of the screen.

Make the ball move to the right. HINT: Set `ball.direction` and `ball.speed` in the p5.js `setup` function.

You will notice that when the ball moves it leaves a trail of ball images behind it. That's because everything drawn to the p5.js canvas stays there, it doesn't become a blank slate every time the draw function is used to make a new frame. This is useful for some art programs but not for a Pong game. Use the p5.js background function with "b" (black) as the input argument `background("b")`

Now try moving the ball to the left. Then try moving the ball up and down, then in a diagonal. Get a sense of how changing the ball's direction will affect its trajectory.

Usually Pong is a two player game but to easily test the game you can change the position of both paddles using your mouse. `mouse` is a global p5.play variable you can use to access the current position of the mouse using `mouse.x` and `mouse.y`. HINT: Change the y position of both paddles to `mouse.y`.

You may notice that if the paddles hit the ball, they will not bounce correctly! The paddles should not move when the ball hits them. HINT: Set the collider type of the paddles to 'kinematic'. This will allow players to move the paddles but prevents the ball from moving them.

The ball still won't really bounce off the paddle correctly though! Set the following properties to make the ball have a full bounce off the paddles without losing speed to friction:

```js
ball.bounciness = 1;
ball.friction = 0;
```

## Instructions for Part B

If you want you can customize the look of your Pong game by changing the design of the ball and paddles to be more colorful. You could also change the background color. If not you can keep it black and white for the classic Pong look.

Make a wall image (or two) with the `spriteArt` function. Place two walls at the top and bottom of the screen. You can make the walls one color or patterned or anything if you'd like. HINT: use the `repeat` function too and remember the newline character `\n`. HINT: The walls should have 'static' colliders.

## Instructions for Part C

Place the ball back in the middle of the screen when it goes off screen. Let the ball go off the screen for a while before placing it back in the center to give players time to react! HINT: Use `ball.x` to get the x position of the ball.

## Instructions for Part D

Implement key controls to enable two players to play your Pong game. When players aren't pressing any keys the paddles shouldn't move. Don't let players move the paddles off screen. HINT: Use `sprite.vel.y`

Display both player's scores. HINT: Use the `text` function with low numbers for the row and column values.

When the ball is served from the center of the screen, make it move away from the player that lost the ball, just like in tennis. The y axis (up/down) direction of the serve should be random. HINT: Use `sprite.direction`. Also if you use the `random()` function without any input parameters it will return a decimal number in the range of 0 to almost 1.

## Instructions for Part E

Try making the ball speed up a little bit each time it hits one of the paddles. Reset the ball's speed when it's served from the center.

You may have noticed some bugs in your Pong game! Keep these bugs in mind when completing the rest of part E. To complete the "CHALLENGE SECTION" for this project you'll need to figure out how to solve these bugs:

- sometimes when the ball hits the corner of the paddles, it deflects at a "bad" angle, causing the ball to move up and down too much
- sometimes the paddles can move into the ball, which forces the ball to move away from them, increasing the ball's speed by a lot

Customize your game of Pong by adding another dimension to the paddles. For example:

- enable players to rotate the paddles (use `sprite.rotationSpeed`)
- enable players to move the paddles left and right (use `sprite.vel.x`)
- change the trajectory of the ball depending on where it hits the paddle (use `sprite.direction`)

## CHALLENGE SECTION

Solve all the bugs described in part E!

If you want, you can further customize your game of Pong by choosing a sport or something else to theme it on.

Reference the [p5.js documentation](https://p5js.org/reference/) to learn how to make simple shapes like rectangles, circles, and ellipses. The background of your Pong game should incorporate a few different shapes. You can also make more images with `spriteArt` if you'd like. Be creative!

This example `draw` function draws a black background and then a blue rectangle with a red stroke (outline).

```js
function draw() {
	background('b');

	fill('u');
	stroke('r');

	//  ( x,  y,  w,  h)
	rect(10, 20, 15, 55);
}
```
