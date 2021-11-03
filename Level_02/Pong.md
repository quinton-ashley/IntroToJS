# Pong

Pong is a table tennis–themed arcade game, featuring simple two-dimensional graphics, created by Allan Alcorn. It was manufactured by Atari and released in 1972.

## Instructions for PART A

In the p5.js `draw()` function, use the `image(img, x, y)` function to draw the ball and paddles on the screen. The ball should start in the center and the paddles should go on each side of the screen.

Make variables to store the position of the ball.

Make the ball move to the right. Then try moving it to the left. Then try moving the ball in a diagonal. Get a sense of how changing the ball's x and y values will affect its trajectory.

Figure out how to move the paddles using your mouse. Look for this information in the p5.js documentation!

Personalize your game of Pong by choosing a sport to theme it on. Give the ball a design but be careful not to change its 8x8 size. The ball is pretty small so keep it simple.

Here's some example code for making a red background:

```js
background(color16('r'));
```

`color16(colorChar)` gets one of the 16 colors in the Commodore 64 color palette. Use it inside p5.js functions like `background()`, `fill()`, and `stroke()`.

## Instructions for PART B

Make `ball` and `paddle` sprites. Instead of changing the ball's x and y positions every frame use the `velocity` property of the sprite to store the ball's vector: its `x` and `y` velocities.

Make a wall image `imgWall` with `spriteArt`. Place two walls at the top and bottom of the screen. You can make the `imgWall` one color or patterned or anything if you'd like (besides transparent haha).

For now, try simply making the ball move straight down and then bounce off the bottom and top walls. When you get that to work have the ball go in a diagonal. When the ball touches either wall invert its y velocity.

Checking for intersections between the ball and paddle is harder because they are both moving objects.

Place the ball back in the middle of the screen when it goes off the edge of the screen. Make it go in any diagonal direction.

In level 9 you'll learn how to make the ball move at different angles, other than pure diagonal, without changing its total speed.
