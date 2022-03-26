# Level 02 A

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen5.jpg)

## What is p5.js?

To make Pong we're going to use p5.js, a JavaScript graphics library for creative coding.

## Creating functions 👷

How do we create our own functions? Using the `function` keyword!

```js
// create the function
function sayHello() {
	console.log('hello!');
}

sayHello(); // run the function
```

The code inside a function is not run until the function is called/invoked by using it's name and the parenthesis.

## p5.js Basics

https://p5js.org/get-started/

The p5.js `draw` function should contain code for drawing an image (frame). Behind the scenes, p5.js will run it 60 times per second, this is called the frame rate. This allows you to move objects on the screen by animating them, moving them a little bit when each new frame is drawn to the screen.

## p5.play Sprites

Sprites are characters or items in 2D video games that typically move above the background layer(s). Sprite objects in the p5.play library have attributes such as their x and y position.

```js
let ball = createSprite(imgBall);
ball.x = 5;
ball.y = 12;
```

## spriteArt

The `spriteArt` function can be used to create images very easily! The first parameter to `spriteArt` is a String representing the color values of pixels.

```js
let img = spriteArt('w.w');
```

This example code would create an image with one white pixel, followed by a transparent pixel, and then another white pixel. You can also use spaces to indicate transparent pixels.

Here's the full color palette you can use for this game. They are the same colors as the real ZX Spectrum, which this level's computer is based on.

| letter |     color      |
| :----: | :------------: |
|   .    | transparent 🔳 |
|   b    |    Black ⬛    |
|   u    |    blUe 🟦     |
|   r    |     Red 🟥     |
|   m    |   Magenta 🔴   |
|   g    |    Green 🟩    |
|   c    |    Cyan 🔵     |
|   y    |   Yellow 🟨    |
|   w    |    White ⬜    |

## Make Strings with Backticks

Backticks can also be used to create Strings. Backticks look like a backwards apostrophe. They can be found on your keyboard on a special key next to the number 1. The backtick key also has a squiggly line called a tilda on it.

When backticks are used to create Strings, the text inside the backticks can go on multiple lines of code and retain these newlines without the use of the newline `\n` character.

```js
let str = `
...yyyy
.yybyybyy
yyyyyyyyyy
yybyyyybyy
.yybbbbyy
...yyyy`;

let img = spriteArt(str);
```

Can you tell what the image is?

...

It's a simple yellow and black smiley face image! 😃

## p5.js global variables

Note that p5.js adds a lot of variables to the global scope. Note that `width` and `height` refer to the size of the screen in pixels.

## End of Level 02 A

Here's what you learned about in Level 2:

- p5.js basics
- the `spriteArt` function
- how to create sprites and position them

# Level 02 B

# Getting a Sprite's width and height

When you create a sprite using an image the width and height of the sprite is automatically assigned to the sprite based on the size of the image. These attributes can be accessed using `.width` and `.height` or with `.w` and `.h`

```js
console.log('size of the ball: ' + ball.w + 'x' + ball.h);
```

## spriteArt scaling

```js
let face = spriteArt(str, 2);
```

Multiple input parameters can be given to some functions. Input parameters are seperated by commas. The second input parameter to the `spriteArt` function is an optional scale value. By default each character in the string will be one pixel in the resulting image. If you change the scale to 2 then each character in the string will be represented by 4 pixels! This is useful for making larger images.

## String.repeat(amount)

To more easily create large Strings you can use a String function called [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

```js
let pattern = '><'.repeat(4);
// pattern -> '><><><><';
```

## += operator

The `+=` operator can be used to add to the existing value of a variable.

```js
let x = 5;
x += 2;
log(x); // x -> 7
```

`-=`, `*=`, and `/=` operators can be used in JS too.

# Level 02 C

## Vectors

In Physics a vector is a direction in which something is moving and the magnitude of how fast it's moving there at a given interval of time.

In 2D (two dimensional) games, a sprite's vector can be stored as the velocity at which a sprite is moving along the x-axis and the velocity it's moving along the y-axis per frame. The ball's speed is the combination of these velocities.

```js
ball.velocity.x = 1;
ball.velocity.y = 1;
```

## Bounces

You can easily check for bounces between sprites using the p5.play sprite bounce function.

```js
ball.bounce(paddle);
```

By default when sprites bounce off each other both objects will move. To prevent this, set the sprite to be immovable when another sprite bounces on it.

```js
paddle.immovable = true;
```

## colorPal

`colorPal` retreives the color associated with the given letter from the retro computer's color palette. Here's some example code for making a red background:

```js
background(colorPal('r'));
```

# Level 02 D

## Respond to keyboard input

The `keyPressed` is a p5.js function that is run whenever a key is pressed.

```js
function draw() {}
function keyPressed() {
	if (key == 'ArrowUp') {
		log('The up arrow key was pressed!');
	}
}
```

Implement `keyPressed` outside the `draw` function.

## Check if a key is held

```js
function draw() {
	if (isKeyDown('ArrowLeft')) {
		player.x -= 2; // move the player left by 2 pixels
	}
	if (isKeyDown('ArrowRight')) {
		player.x += 2; // move the player right by 2 pixels
	}
}
```

## Drawing text to the screen

Text can be displayed on screen at a given text row and column.

```js
//  (text         , row, col)
text('Hello World!', 10, 12);
```

## Level 02 E

## p5.js fill, stroke, and rect

This example `draw` function draws a black background and then a blue rectangle with a red stroke (outline). The `colorPal` function can be use it inside p5.js functions like `background`, `fill`, and `stroke` that expect a color.

```js
function draw() {
	background(colorPal('b'));

	fill(colorPal('u'));
	stroke(colorPal('r'));

	//  ( x,  y,  w,  h)
	rect(10, 20, 15, 55);
}
```

## Computer History: ZX Spectrum

Excerpt from the last paragraph of Chapter 1 of "ZX81 BASIC PROGRAMMING" by Stephen Vickers:

"Whatever else you do, keep using the computer. If you have a question 'What does it do if I tell it such & such?' then the answer is easy:type it in & see. Whenever the manual tells you to type something in, always ask yourself, 'What could I type instead?' & try out your replies. The more of your own stuff you write, the better you will understand the ZX81. (This is called unprogrammed learning.) Regardless of what you type in, you cannot damage the computer."

This level's computer is based on the ZX Spectrum, an 8-bit personal home computer developed by Sinclair Research. It was first released in the United Kingdom on the 23rd of April 1982 and went on to become Britain's best-selling microcomputer. Watch some of this video to hear what it was like for people to use the ZX Spectrum back then!

https://youtu.be/nRlmTiynbd8?t=242

- [Level 02 A](#level-02-a)
  - [What is p5.js?](#what-is-p5js)
  - [Creating functions 👷](#creating-functions-)
  - [p5.js Basics](#p5js-basics)
  - [p5.play Sprites](#p5play-sprites)
  - [spriteArt](#spriteart)
  - [Make Strings with Backticks](#make-strings-with-backticks)
  - [p5.js global variables](#p5js-global-variables)
  - [End of Level 02 A](#end-of-level-02-a)
- [Level 02 B](#level-02-b)
- [Getting a Sprite's width and height](#getting-a-sprites-width-and-height)
  - [spriteArt scaling](#spriteart-scaling)
  - [String.repeat(amount)](#stringrepeatamount)
  - [+= operator](#-operator)
- [Level 02 C](#level-02-c)
  - [Vectors](#vectors)
  - [Bounces](#bounces)
  - [colorPal](#colorpal)
- [Level 02 D](#level-02-d)
  - [Respond to keyboard input](#respond-to-keyboard-input)
  - [Check if a key is held](#check-if-a-key-is-held)
  - [Drawing text to the screen](#drawing-text-to-the-screen)
  - [Level 02 E](#level-02-e)
  - [p5.js fill, stroke, and rect](#p5js-fill-stroke-and-rect)
  - [Computer History: ZX Spectrum](#computer-history-zx-spectrum)
