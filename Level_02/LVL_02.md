# Level 02 A

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen5.jpg)

## Creating functions 👷

Create functions using the `function` keyword.

```js
// create the function
function sayHello() {
	console.log('hello!');
}

sayHello(); // run the function
```

The code inside a function is not run until the function is called/invoked by using its name and the parenthesis.

## What is p5.js?

To make Pong we're going to use p5.js, a JavaScript graphics library for creative coding.

## p5.js Basics

https://p5js.org/get-started/

The p5.js `draw` function should contain code for drawing an image (frame). Behind the scenes, p5.js will run the `draw` function 60 times per second, this is called the frame rate.

Move objects a little bit in each new frame drawn to the screen. This is called animation.

Note that p5.js adds a lot of variables to the global scope. Note that `width` and `height` refer to the size of the screen in pixels.

## p5.play Sprites

Take a look at the p5.play website to learn about sprites: https://p5play.org/learn/sprite.html

## spriteArt

The `spriteArt` function can be used to create images very easily! The first parameter to `spriteArt` is a String representing the color values of pixels.

```js
let img = spriteArt('wgw');
```

This example code would create an image with one white pixel, followed by a green pixel, and then another white pixel.

Here's the limited color palette you can use for this game. They are the same colors as the real ZX Spectrum, which this level's computer is based on.

|   letter   |     color      |
| :--------: | :------------: |
| '.' or ' ' | transparent 🔳 |
|    'b'     |    Black ⬛    |
|    'u'     |    blUe 🟦     |
|    'r'     |     Red 🟥     |
|    'm'     |   Magenta 🔴   |
|    'g'     |    Green 🟩    |
|    'c'     |    Cyan 🔵     |
|    'y'     |   Yellow 🟨    |
|    'w'     |    White ⬜    |

## Make Strings with Back-ticks

Back-ticks can also be used to create Strings. Back-ticks look like a backwards apostrophe. They can be found on your keyboard on a special key next to the number 1. The back-tick key also has a squiggly line `~` called a tilde on it.

When back-ticks are used to create Strings, the text inside the back-ticks can go on multiple lines of code and retain these newlines without the use of the newline `\n` character.

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

# Level 02 B

## spriteArt scaling

By default each character in the string will be one pixel in the resulting sprite art image. Yet, if you change the scale to 2 then each character in the string will be represented by 4 pixels! This is useful for making larger images.

```js
let face = spriteArt(str, 2);
```

The second input parameter to the `spriteArt` function is an optional scale value. Input parameters are separated by commas.

## String.repeat(amount)

To more easily create large Strings you can use a String function called [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

```js
let pattern = '><'.repeat(4);
// pattern -> '><><><><';
```

## += operator

The `+=` operator can be used to add to the existing value of a variable.

```js
let story = 'The cow';
story += ' jumped over the moon.';
// story -> "The cow jumped over the moon"
```

You can use `+=` with numbers too!

```js
let x = 5;
x += 2; // shortcut for x = x + 2
console.log(x); // x -> 7
```

`-=`, `*=`, and `/=` operators can also be used with numbers.

# Level 02 C

## Bounces

Objects in p5.play collide by default but the paddle and ball won't do a perfect bounce off the paddle automatically.

To have the ball bounce off the paddle and retain its speed, set the ball's bounciness to 1, indicating you want a full bounce. Set the friction to 0, indicating you want no friction.

```js
ball.bounciness = 1;
ball.friction = 0;
```

By default when sprites collide both objects will move. To prevent this, set the sprite to be static when another sprite bounces on it.

```js
wall.collider = 'static';
```

If you want to have a sprite that isn't moved by other sprites but can still be moved by the player, set the sprite's collider to 'kinematic'.

```js
paddle.collider = 'kinematic';
```

## Custom collision

In the example below, `deflectLaser` is a function that will be called when the shield sprite gets hit by a laser. The `deflectLaser` function could make the laser bounce off the shield in a random direction or have it be absorbed by the shield.

```js
shield.collide(laser, deflectLaser);
```

# Level 02 D

## Keyboard Input

Check if the user is pressing a key:

```js
function draw() {
	if (kb.pressing('ArrowLeft')) {
		player.vel.x -= 0.1; // move the player left
	}
	if (kb.pressing('ArrowRight')) {
		player.vel.x += 0.1; // move the player right
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
	background('b');

	fill('u');
	stroke('r');

	//  ( x,  y,  w,  h)
	rect(10, 20, 15, 55);
}
```

## Computer History: ZX Spectrum

Excerpt from the last paragraph of Chapter 1 of "ZX81 BASIC PROGRAMMING" by Stephen Vickers:

"Whatever else you do, keep using the computer. If you have a question 'What does it do if I tell it such & such?' then the answer is easy:type it in & see. Whenever the manual tells you to type something in, always ask yourself, 'What could I type instead?' & try out your replies. The more of your own stuff you write, the better you will understand the ZX81. (This is called un-programmed learning.) Regardless of what you type in, you cannot damage the computer."

This level's computer is based on the ZX Spectrum, an 8-bit personal home computer developed by Sinclair Research. It was first released in the United Kingdom on the 23rd of April 1982 and went on to become Britain's best-selling microcomputer. Watch some of this video to hear what it was like for people to use the ZX Spectrum back then!

https://youtu.be/nRlmTiynbd8?t=242

- [Level 02 A](#level-02-a)
  - [Creating functions 👷](#creating-functions-)
  - [What is p5.js?](#what-is-p5js)
  - [p5.js Basics](#p5js-basics)
  - [p5.play Sprites](#p5play-sprites)
  - [spriteArt](#spriteart)
  - [Make Strings with Back-ticks](#make-strings-with-back-ticks)
- [Level 02 B](#level-02-b)
  - [spriteArt scaling](#spriteart-scaling)
  - [String.repeat(amount)](#stringrepeatamount)
  - [+= operator](#-operator)
- [Level 02 C](#level-02-c)
  - [Bounces](#bounces)
  - [Custom collision](#custom-collision)
- [Level 02 D](#level-02-d)
  - [Keyboard Input](#keyboard-input)
  - [Drawing text to the screen](#drawing-text-to-the-screen)
  - [Level 02 E](#level-02-e)
  - [p5.js fill, stroke, and rect](#p5js-fill-stroke-and-rect)
  - [Computer History: ZX Spectrum](#computer-history-zx-spectrum)
