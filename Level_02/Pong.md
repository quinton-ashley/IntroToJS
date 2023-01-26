# Pong

Pong is a table tennis–themed arcade game, featuring simple two-dimensional graphics, created by Allan Alcorn. It was manufactured by Atari and released in 1972.

If you're not familiar with Pong take a look at this demonstration video!

<https://www.youtube.com/watch?v=fiShX2pTz9A>

## Instructions for Part A

Create two paddle sprites and place them on the left and right sides of the screen. Set their image to the `paddleImg`.

Make the ball move to the right by assigning a postive value to `ball.speed` in the p5.js `setup` function.

You will notice that when the ball moves it leaves a trail of ball images behind it! That's because everything drawn to the p5.js canvas stays there, it doesn't become a blank slate every time the draw function is used to make a new frame. This is useful for some art programs but not for most games. Use the p5.js background function with "b" (black) as the input argument `background("b")`

Notice how if a ball hits a paddle it bounces off the paddle super slowly and the paddle gets knocked. In Pong, the paddles shouldn't be pushed around by the ball. HINT: Set the collider type of the paddles to 'kinematic'. This will prevent the ball sprite from being able to move the paddles but players will still be able to move them (after you implement key controls in part C).

Try assigning different angle values to `ball.direction`. Try moving the ball to the left, then try moving the ball up and down, and then in diagonals. Get a sense of how changing the ball's direction affects its trajectory.

## Instructions for Part B

Make a wall image (or two) with the `spriteArt` function. Place walls at the top and bottom of the screen. You can make the walls one color or patterned or anything if you'd like. HINT: use the `repeat` function too and remember the newline character `\n`. HINT: The walls should have 'static' colliders.

If you want, you can further customize your game of Pong by choosing a sports theme or other design for it.

## Instructions for Part C

Implement key controls to enable two players to play your Pong game. When players aren't pressing any keys the paddles shouldn't move. HINT: Use `ball.velocity.y`

Don't let players move the paddles off screen.

Place the ball back in the middle of the screen when it goes off screen. Let the ball travel far from the edge of the screen before placing it back in the center to give players time to react to it being lost! HINT: Use `ball.x` to get the x position of the ball.

When the ball is served from the center of the screen, make it move away from the player that lost the ball, just like in tennis. The y axis (up/down) diagonal direction of the serve should be random. HINT: Adjust `ball.direction`.

## Instructions for Part D

Display both player's scores using the QuintOS `text` function.

## Instructions for Part E

Sometimes the paddles can move inside the ball's collider, forcing the ball to move away from them, which can overly increase the ball's speed by a lot! If you haven't noticed this yet while testing your game try hitting the ball on the top or corner of the paddle while moving the paddle. This may be correct physics but it's not how players expect a Pong game to work.

Fix this bug by overriding the ball's speed after it collides with a paddle. HINT: Use the `collided` function.

If you're interested in working on improving your Pong game

## CHALLENGE SECTION

Try making the ball speed up a little bit each time it hits one of the paddles.

Reset the ball's speed when it's served from the center.

Sometimes when the ball hits the corner of the paddles, it deflects at a "bad" angle, causing the ball to move up and down too much. Fix this bug by adjusting the ball's direction after it collides with a paddle.

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
