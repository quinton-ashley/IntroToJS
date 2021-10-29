# Level 02 A

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen5.jpg)

## What is p5.js?

To make Pong we're going to use 2D graphics instead of text based graphics. p5.js is a JavaScript graphics library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else!

## p5.js Basics

https://p5js.org/get-started/

p5.js puts a lot of functions into the global scope so you can use them without having to reference the p5 canvas object `p5.instance` first.

I already did the setup function for you. So in your `pong.js` file just make the draw function.

```js
function setup() {
	createCanvas(320, 200); // creates canvas with width of 640 and height of 400
	frameRate(60); // 60 frames per second
	noStroke(); // no stroke line around shapes
}
```

Your `draw` function will contain code for drawing a new frame. It will be looped 60 times per second, this is called the frame rate.

## spriteArt

p5.js has it's own `createImage` function, but it's a bit complicated. I created a simple `spriteArt` function that we can use to make sprites for our games very easily!

The first parameter to `spriteArt` is a string representing the color values of pixels.

```js
let img = spriteArt('w.w');
```

This example code would create an image with one white pixel, followed by a transparent pixel, and then another white pixel. You can also use spaces to indicate transparent pixels.

Here's the full color palette you can use, same colors as the real ZX Spectrum! The keys are the letters and the values are the html hexadecimal color values.

```js
let palette = {
	' ': '', // transparent 🔲
	'.': '', // transparent 🔳
	b: '#000000', // Black ⬛
	u: '#0000d8', // blUe 🟦
	r: '#d80000', // Red 🟥
	m: '#d800d8', // Magenta 🔴
	g: '#00d800', // Green 🟩
	c: '#00d8d8', // Cyan 🔵
	y: '#d8d800', // Yellow 🟨
	w: '#ffffff' // White ⬜
};
```

|--|--|
|letter|color|
|b|black|

I will explain how this function works in the level 8 lesson.

## Drawing Images in p5.js

```js
let smiley = `
...yyyy
.yykyykyy
yyyyyyyyyy
yykyyyykyy
.yykkkkyy
...yyyy`;

smiley = spriteArt(smiley); // create sprite image outside draw loop

function draw() {
	image(smiley, 0, 0);
}
```

Creates a simple yellow and black smiley face 😃 and draws it on every frame at (0, 0) on the p5.js canvas.

Note that you don't have to complete the width of each line with transparent pixels. Also note that by default these sprite art images are scaled by a factor of 2, so if you make a smiley that's 10 characters wide the image will actually have a width of 20 pixels when drawn on the p5.js canvas.

## End of Level 02 A

Here's what you learned about in Level 2:

- objects `{ key: 'value' }`
- p5.js basics
- `spriteArt()` function

# Level 02 B

## Vectors

To make Pong, we'll have to use Math "in real life"! How exciting! 😄

In Physics a vector is a direction in which something is moving and the magnitude of how fast it's moving there at a given interval of time.

In 2D (two dimensional) games, a sprite's vector can be stored as the velocity, aka speed, at which a sprite is moving along the x-axis and the velocity it's moving along the y-axis per frame.

```js
ball.velocity.x = 1;
ball.velocity.y = 1;
```

To make the ball bounce off the paddles and walls, we'll have to change its vector. When the ball touches the paddles we will invert its x velocity. When the ball touches the wall we will invert its y velocity.

## End of Level 05 B

- vectors (x and y velocities)

## Computer History: Commodore 64

This level's computer is based on the Commodore 64

- [Level 02 A](#level-02-a)
	- [What is p5.js?](#what-is-p5js)
	- [p5.js Basics](#p5js-basics)
	- [spriteArt](#spriteart)
	- [Drawing Images in p5.js](#drawing-images-in-p5js)
	- [End of Level 02 A](#end-of-level-02-a)
- [Level 02 B](#level-02-b)
	- [Vectors](#vectors)
	- [End of Level 05 B](#end-of-level-05-b)
	- [Computer History: Commodore 64](#computer-history-commodore-64)
