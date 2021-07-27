# Pong

Pong is a table tennis–themed arcade game, featuring simple two-dimensional graphics, created by Allan Alcorn. It was manufactured by Atari and released in 1972.

## Instructions for PART A

Make objects to store the position and geometry data for the ball and two paddles. The ball should start in the center of the screen and one paddle should be on each side.

Make the `draw()` function and draw the ball and paddles.

Make the ball move to the right. Then try moving it to the left. Then try moving the ball in a diagonal. Get a sense of how changing the ball's x and y values will affect its trajectory.

## Instructions for PART B

Make `Ball` and `Paddle` classes. Make a wall image `imgWall` with `spriteArt`. Place two walls at the top and bottom of the screen. You can make the `imgWall` one color or make it have a colored pattern if you'd like.

In the `Ball` class constructor, add a `velocity` property to store a ball's vector: its `x` and `y` velocities.

For now, try simply making the ball move straight down and then bounce off the bottom and top walls. When you get that to work have the ball go in a diagonal.

Now, detect intersections between the ball and paddles and walls. Make a function `intersects(a, b)` that returns false if the input objects `a` and `b` do not intersect and true if they do.

When the ball touches either paddle invert its x velocity. When the ball touches either wall invert its y velocity.

Figure out how to place the ball back in the middle of the screen when it goes off the edge.

When balls are "served" from the center, they should never go straight up and down or straight left and right. There should be an equal chance of the ball going in any diagonal direction.

Make the ball go in a random direction at the start of the game and after it goes offscreen. Put the code for doing this in a function called `changeDirection()` in the `Ball` class. You will have to use `this.changeDirection()` to run the function from inside the scope of a function within `Ball`.

You may notice the ball's speed will not be consistent if you don't change the x and y velocity in proportion to each other. You'll learn how to make the ball go at slightly random diagonal directions without changing the ball's total speed when you make Contain, the Level 6 bonus game!

Personalize your game of Pong by choosing a sport to theme it on. Give the ball a design but be careful not to change its 8x8 size. The ball is pretty small so keep it simple.

If you choose to make your Pong tennis themed make a background image that looks like a tennis court, with lines and a net.

You should draw onto an image using p5.js functions. You can use [createGraphics](https://p5js.org/reference/#/p5/createGraphics) if you'd like to make an empty image object to start with. You can use any p5.js function on images, useful methods include `background`, `line`, `ellipse`, and `rect`. You can read about them on the [p5.js reference](https://p5js.org/reference/) page.

Here's some example code for making an image the size of the screen with a red background:

```js
let imgBg = createGraphics(320, 200);
imgBg.background(color16("r"));
```

`color16(colorChar)` gets one of the 16 colors in the Commodore 64 color palette. Use it inside `background()`, `fill()`, and `stroke()`.
