# Pong

Pong is a table tennis–themed arcade game, featuring simple two-dimensional graphics, created by Allan Alcorn. It was manufactured by Atari and released in 1972.

## Instructions for PART A

Create two paddle sprites and place them on opposite ends of the screen.

Make the ball move to the right. Then try moving it to the left. Then try moving the ball in a diagonal. Get a sense of how changing the ball's x and y values will affect its trajectory. HINT: Do this inside the draw function.

You will notice that when the ball moves it leaves a trail of ball images behind it. That's because everything drawn to the p5.js canvas stays there, it doesn't become a blank slate everytime the draw function is used to make a new frame. To clear the screen draw a background using the background function with `0` as the input argument `background(0)` (0 is black 255 is white)

Usually Pong is a two player game but to easily test the game you can change the position of both paddles using your mouse. `mouseX` and `mouseY` store the position of the mouse at all times. HINT: Change the y position of the paddles to `mouseY`.

Personalize your game of Pong by choosing a sport or something else to theme it on. Give the ball a new design, it's pretty small so you can keep it simple.

Make a wall image (or two) with the `spriteArt` function. Place two walls at the top and bottom of the screen. You can make the walls one color or patterned or anything if you'd like, besides transparent lol. The second input parameter to the `spriteArt` function is a number value for scale, you can use it to make the wall big without having to type such a long string. HINT: use the `repeat` function too and remember the newline character `\n`.

Make the ball bounce off the walls. To easily test your code for this, make the ball move straight down and then when it bounces have it go straight up. HINT: store the y velocity of the ball (the direction it is moving vertically) in a seperate variable.

## Instructions for PART B

Use the ball's velocity property to move it instead of changing it's x and y values. When you change the x and y velocities of the ball then the p5.play `drawSprites` function will change its position.

Place the ball back in the middle of the screen when it goes off the edge of the screen.

When the ball is served make it go in any pure diagonal direction randomly. In level 9 you'll learn how to make the ball move at different angles, other than pure diagonal, without changing its total speed.

Make the ball speed up a little bit each time it hits the walls. Have the ball's speed get reset each time it goes off screen.

Reference the [p5.js documentation](https://p5js.org/reference/) to learn how to make simple shapes like rectangles, circles, ovals, and triangles. The background of your Pong game should incorporate a few different shapes. The `colorPal` function can be use it inside p5.js functions like `background`, `fill`, and `stroke` that expect a color. You can also make some images with `spriteArt` if you'd like. Be creative!
