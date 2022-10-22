# Pong

Pong is a table tennis–themed arcade game, featuring simple two-dimensional graphics, created by Allan Alcorn. It was manufactured by Atari and released in 1972.

https://www.youtube.com/watch?v=fiShX2pTz9A

## Instructions for Part A

Create two paddle sprites and place them on opposite ends of the screen.

Make the ball move to the right.

You will notice that when the ball moves it leaves a trail of ball images behind it. That's because everything drawn to the p5.js canvas stays there, it doesn't become a blank slate every time the draw function is used to make a new frame. This is useful for some art programs but not for a Pong game. Use the p5.js background function with "b" (black) as the input argument `background("b")`

Now try moving the ball to the left. Then try moving the ball up and down, then in a diagonal. Get a sense of how changing the ball's x and y values will affect its trajectory.

Usually Pong is a two player game but to easily test the game you can change the position of both paddles using your mouse. `mouse` is a global p5.play variable you can use to access the current position of the mouse using `mouse.x` and `mouse.y`. HINT: Change the y position of both paddles to `mouse.y`.

## Instructions for Part B

Make a wall image (or two) with the `spriteArt` function. Place two walls at the top and bottom of the screen. You can make the walls one color or patterned or anything if you'd like, besides transparent lol. The second input parameter to the `spriteArt` function is a number value for scale, you can use it to make the wall big without having to type such a long String. HINT: use the `repeat` function too and remember the newline character `\n`.

## Instructions for Part C

Make the ball bounce off the paddles.

Place the ball back in the middle of the screen when it goes off screen.

## Instructions for Part D

Implement key controls to enable two players to play your Pong game. Don't let players move the paddles off screen.

Display both player's scores. HINT: Use the `text` function

When the ball is served from the center of the screen, make it move away from the player that lost the ball, just like in tennis. The y axis (up/down) direction of the serve should be random. HINT: use the `random` function.

You may notice sometimes the ball is pushed down when it hits the corners or top and bottom of the paddle. Due to this push the ball's speed can increase a lot. Set a speed limit for the ball `ball.speedLimit` when it collides with the paddles. HINT: use the ball's `.speed` property.

Now try making the ball speed up a little bit each time it hits the paddles.

Also change ball's trajectory (the direction it moves) based on where it hits the paddle. If it hits the top of the paddle, change the ball's direction so it moves further up. If it hits the bottom of the paddle, change the ball's direction so it moves further down. HINT: use the ball's `.direction` property.

Have the ball's speed get reset each time it goes off screen.

## Instructions for Part E

If you want can personalize your game of Pong by choosing a sport or something else to theme it on. If you don't want to change the way your game looks you can move on to the next level.

Give the ball a new design, it's pretty small so you can keep it simple.

Reference the [p5.js documentation](https://p5js.org/reference/) to learn how to make simple shapes like rectangles, circles, ovals, and triangles. The background of your Pong game should incorporate a few different shapes. You can also make some images with `spriteArt` if you'd like. Be creative!
