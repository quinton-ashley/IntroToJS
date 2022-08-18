# Pong

Pong is a table tennis–themed arcade game, featuring simple two-dimensional graphics, created by Allan Alcorn. It was manufactured by Atari and released in 1972.

https://www.youtube.com/watch?v=fiShX2pTz9A

## Instructions for Part A

Create two paddle sprites and place them on opposite ends of the screen.

Make the ball move to the right. HINT: Do this inside the draw function.

You will notice that when the ball moves it leaves a trail of ball images behind it. That's because everything drawn to the p5.js canvas stays there, it doesn't become a blank slate every time the draw function is used to make a new frame. This is useful for some art programs but not for a Pong game. Use the p5.js background function with "b" (black) as the input argument `background("b")`

Now try moving the ball to the left. Then try moving the ball up and down, then in a diagonal. Get a sense of how changing the ball's x and y values will affect its trajectory.

Usually Pong is a two player game but to easily test the game you can change the position of both paddles using your mouse. `mouse` is a global p5.play variable you can use to access the current position of the mouse using `mouse.x` and `mouse.y`. HINT: Change the y position of both paddles to `mouse.y`.

Personalize your game of Pong by choosing a sport or something else to theme it on. Give the ball a new design, it's pretty small so you can keep it simple.

## Instructions for Part B

Make a wall image (or two) with the `spriteArt` function. Place two walls at the top and bottom of the screen. You can make the walls one color or patterned or anything if you'd like, besides transparent lol. The second input parameter to the `spriteArt` function is a number value for scale, you can use it to make the wall big without having to type such a long String. HINT: use the `repeat` function too and remember the newline character `\n`.

## Instructions for Part C

Make the ball bounce off the walls without using the `bounce` function. To easily test your code for this, have the ball move straight down, when it bounces it should go straight up. HINT: change `ball.velocity.y` when the ball touches a wall.

Make the ball bounce off the paddles. As a challenge you can implement the bounce yourself or use the p5.play `bounce` function.

Place the ball back in the middle of the screen when it goes off screen.

## Instructions for Part D

Implement key controls to enable two players to play your Pong game. Don't let players move the paddles off screen.

Display both player's scores. HINT: Use the `text` function

When the ball is served from the center of the screen, make it move away from the player that lost the ball, just like in tennis. Also there should be a 50% chance that the ball moves up or down. The y velocity of the ball shouldn't be able to be zero or close to zero. Why not? That would make the game really boring if the ball moved straight left and right!

Make the ball speed up a little bit each time it hits the walls. Have the ball's speed get reset each time it goes off screen.

## Instructions for Part E

Reference the [p5.js documentation](https://p5js.org/reference/) to learn how to make simple shapes like rectangles, circles, ovals, and triangles. The background of your Pong game should incorporate a few different shapes. You can also make some images with `spriteArt` if you'd like. Be creative!
