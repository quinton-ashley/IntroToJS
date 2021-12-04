# Level 02 A

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen5.jpg)

## What is p5.js?

To make Pong we're going to use 2D graphics instead of text based graphics. p5.js is a JavaScript graphics library for creative coding.

## Creating functions 👷

How do we create our own functions? Using the `function` keyword!

```js
// create the function
function sayHello() {
	console.log('hello!');
}

sayHello(); // run the function
```

## p5.js Basics

https://p5js.org/get-started/

The p5.js `draw` function should contain code for drawing an image (frame). p5.js will run it 60 times per second, this is called the frame rate. To animate objects on screen simply change their position everytime the draw function is run.

## spriteArt

p5.js has it's own `createImage` function, but it's a bit complicated. I created a simple `spriteArt` function for QuintOS that we can use to make sprites for our games very easily!

The first parameter to `spriteArt` is a String representing the color values of pixels.

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

## Making Strings with Backticks

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

let bigImg = spriteArt(str);
```

Can you tell what the image is?

It's a simple yellow and black smiley face image. 😃

Note that you don't have to complete the width of each line with transparent pixels, you can just leave it blank.

## String.repeat(amount)

To more easily create large Strings you can use a String function called [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

```js
let pattern = '><'.repeat(4);
// pattern -> '><><><><';
```

## p5.play Sprites

To make Pong you'll need to have the ball move and bounce off the paddles. To acheive this use sprites!

Sprite objects have attributes such as their x and y position.

```js
let ball = createSprite(imgBall);
ball.x = width / 2;
ball.y = height / 2;
```

Note that `width` and `height` refer to the size of the screen in pixels.

When you create a sprite using an image the width and height of the sprite is automatically assigned to the sprite based on the size of the image. They can be accessed using `.w` and `.h`

```js
console.log('size of the ball: ' + ball.w + 'x' + ball.h);
```

## End of Level 02 A

Here's what you learned about in Level 2:

- p5.js basics
- the `spriteArt` function
- the `repeat` String function
- how to create sprites and position them

# Level 02 B

Checking for intersections between the ball and paddle is harder because they are both moving objects.

## Vectors

To finish Pong, we'll have to use Math "in real life"! How exciting! 😄

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

## Immovable objects

By default when sprites bounce of each other both objects will move. To prevent this, set the sprite to be immovable when another sprite bounces on it.

```js
paddle.immovable = true;
```

## colorPal

`colorPal` retreives the color associated with the given letter from the retro computer's color palette. Here's some example code for making a red background:

```js
background(colorPal('r'));
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
  - [spriteArt](#spriteart)
  - [Making Strings with Backticks](#making-strings-with-backticks)
  - [String.repeat(amount)](#stringrepeatamount)
  - [p5.play Sprites](#p5play-sprites)
  - [End of Level 02 A](#end-of-level-02-a)
- [Level 02 B](#level-02-b)
  - [Vectors](#vectors)
  - [Bounces](#bounces)
  - [Immovable objects](#immovable-objects)
  - [colorPal](#colorpal)
  - [Computer History: ZX Spectrum](#computer-history-zx-spectrum)
