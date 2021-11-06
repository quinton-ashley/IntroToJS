# Pong

Pong is a table tennis–themed arcade game, featuring simple two-dimensional graphics, created by Allan Alcorn. It was manufactured by Atari and released in 1972.

## Instructions for PART A

Create two paddle sprites and place them on opposite ends of the screen.

Make the ball move to the right. Then try moving it to the left. Then try moving the ball in a diagonal. Get a sense of how changing the ball's x and y values will affect its trajectory.

You will notice that when the ball moves it leaves a trail of ball images behind it. That's because everything drawn to the p5.js canvas stays there, it doesn't become a blank slate everytime the draw function is used to make a new frame. To clear the screen draw a background using the background function with `0` as the input argument `background(0)` (0 is black 255 is white)

`mouseX` and `mouseY` store the position of the mouse at all times. Use `mouseY` to change the positions of the paddles.

Personalize your game of Pong by choosing a sport to theme it on. Give the ball a design but be careful not to change its 8x8 size. The ball is pretty small so keep it simple.

Make a wall image (or two) with the `spriteArt` function. Place two walls at the top and bottom of the screen. You can make the walls one color or patterned or anything if you'd like, besides transparent lol.

## Instructions for PART B

For now, try simply making the ball move straight down and then bounce off the bottom and top walls. When the ball touches either wall invert its y velocity. When you get that to work have the ball go in a diagonal.

Checking for intersections between the ball and paddle is harder because they are both moving objects. Use the p5.play Sprite bounce function in your p5.js draw function.

Place the ball back in the middle of the screen when it goes off the edge of the screen. Make it go in any diagonal direction.

In level 9 you'll learn how to make the ball move at different angles, other than pure diagonal, without changing its total speed.

Reference the documentation to learn how to make simple shapes like rectangles, circles, ovals, and triangles. Your Pong game should incorporate a few shapes. The `colorPal` function can be use it inside p5.js functions like `background`, `fill`, and `stroke` that expect a color. `colorPal` retreives the color associated with the given letter from the color palette. Here's some example code for making a red background:

```js
background(colorPal('r'));
```

Check out the p5.js documentation! https://p5js.org/reference/
