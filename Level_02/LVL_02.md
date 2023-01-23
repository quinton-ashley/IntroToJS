---
# Level 02 A
---

## Creating functions 👷

Create functions using the `function` keyword.

```js
// create the function
function sayHello() {
	log('hello!'); // prints "hello!" in the JS console
}

sayHello(); // run the function
```

The code inside a function is not run until the function is called/invoked by using its name and the parenthesis.

## Using Libraries 📚

As a programmer it's important to learn how to use libraries.

Libraries, primarily referred to as packages in JS, are collections of code that other people have written.

The most popular JS packages provide solutions to common problems. Using libraries can prevent you from wasting time re-inventing the wheel! Although building something from scratch can sometimes be a good educational experience or allow for greater customization, often it's better to use a library.

---

## What is p5.play and p5.js? 🌸

To make Pong we're going to use p5.play, a 2D game engine made by Computer Science teachers to help you turn your game ideas into JavaScript code!

<https://p5play.org>

The lead developer of p5.play is Quinton Ashley, a Computer Science teacher at Crimson Education who's also the author of these lessons!

---

## p5.play Sprites

Take a look at page 0 and 1 of the Sprite learn pages on the p5.play website.

<https://p5play.org/learn/sprite.html>

---

## spriteArt

The p5.play `spriteArt` function can be used to create images very easily! The first parameter to `spriteArt` is a String representing the color values of pixels.

```js
let img = spriteArt('wgw');
```

This example code would create an image with one white pixel, followed by a green pixel, and then another white pixel.

---

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

---

## Make Strings with Back-ticks

Back-ticks can also be used to create Strings. Back-ticks look like a backwards apostrophe. They can be found on your keyboard on a special key next to the number 1. The back-tick key also has a squiggly line `~` called a tilde on it.

When back-ticks are used to create Strings, the text inside the back-ticks can go on multiple lines of code and retain these newlines without the use of the newline `\n` character.

---

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

---

It's a simple yellow and black smiley face image! 😃

---

# Level 02 B

---

## spriteArt scaling

By default each character in the string will be one pixel in the resulting sprite art image. Yet, if you change the scale to 2 then each character in the string will be represented by 4 pixels! This is useful for making larger images.

```js
let face = spriteArt(str, 2);
```

The second input parameter to the `spriteArt` function is an optional scale value. Input parameters are separated by commas.

---

## String.repeat(amount)

To more easily create large Strings you can use a String function called repeat.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat>

```js
let pattern = '><'.repeat(4);
// pattern -> '><><><><';
```

---

# Level 02 C

---

## p5.play Input Devices

Take a look at page 0 of the Input learn pages on the p5.play website.

<https://p5play.org/learn/input_devices.html>

---

## += operator

The `+=` operator can be used to add to the existing value of a variable.

```js
let story = 'The cow';
story += ' jumped over the moon.';
// story -> "The cow jumped over the moon"
```

---

You can use `+=` with numbers too!

```js
let x = 5;
x += 2; // shortcut for x = x + 2
console.log(x); // x -> 7
```

`-=`, `*=`, and `/=` operators can also be used with numbers.

---

# Level 02 D

---

## Drawing text to the screen

Text can be displayed on screen at a given text row and column.

```js
//  (text         , row, col)
text('Hello World!', 10, 12);
```

Note that the text (row, col) system is different than the dimensions of the screen in (x, y) pixel coordinates.

---

# Level 02 E

---

## Custom collision handling

In p5.play it's easy to change what happens after two sprites collide using the `collided` function.

```js
if (laser.collided(shield)) {
	laser.direction = 20;
	laser.speed = 1;
}
```

In this example code, the laser gets deflected upward after hitting the shield.

---

## End of Level 02

Remember, don't "reinvent the wheel" if you don't have to!

![](../src/memes/02_0.jpeg)

---

## Computer History: ZX Spectrum

Excerpt from the last paragraph of Chapter 1 of "ZX81 BASIC PROGRAMMING" by Stephen Vickers:

"Whatever else you do, keep using the computer. If you have a question 'What does it do if I tell it such & such?' then the answer is easy:type it in & see. Whenever the manual tells you to type something in, always ask yourself, 'What could I type instead?' & try out your replies. The more of your own stuff you write, the better you will understand the ZX81. (This is called un-programmed learning.) Regardless of what you type in, you cannot damage the computer."

---

This level's computer is based on the ZX Spectrum, an 8-bit personal home computer developed by Sinclair Research. It was first released in the United Kingdom on the 23rd of April 1982 and went on to become Britain's best-selling microcomputer. Watch some of this video to hear what it was like for people to use the ZX Spectrum back then!

<https://youtu.be/nRlmTiynbd8?t=242>

---
