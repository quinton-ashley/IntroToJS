# Level 05 A

Complete the bonus game, Wheel Of Fortune, before continuing to level 4. Edit your `load.js` file:

```js
QuintOS.level = 2;
QuintOS.gameSelect = 'WheelOfFortune';
```

If you've got this far congratulations! You've reached Intermediate Level Javascript! 🥳 Edit your `load.js` file:

```js
QuintOS.level = 5;
```

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen5.jpg)

## What is p5.js?

p5.js is a JavaScript library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else!

You're going to use it to make Pong!

## p5.js Basics

https://p5js.org/get-started/

p5.js puts a lot of functions into the global scope so you can use them without having to reference the p5 canvas object `p5.instance` first.

I already did the setup function for you. So in your `pong.js` file just make the draw function.

```js
function setup() {
	createCanvas(640, 400); // creates canvas with width of 640 and height of 400
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

Here's the full color palette you can use, same colors as the real Commodore 64! The keys are the letters (and emoji in the comments) and the values are the html hexadecimal color values.

```js
let palette = {
	' ': '', // transparent 🔲
	'.': '', // transparent 🔳
	k: '#000000', // blacK ⬛
	d: '#626252', // Dark-gray ⚫
	m: '#898989', // Mid-gray 🔘
	l: '#adadad', // Light-gray ⚪
	w: '#ffffff', // White ⬜
	c: '#cb7e75', // Coral 🔴
	r: '#9f4e44', // Red 🟥
	n: '#6d5412', // browN 🟫
	o: '#a1683c', // Orange 🟧
	y: '#c9d487', // Yellow 🟨
	e: '#9ae29b', // light grEEn 🟢
	g: '#5cab5e', // Green 🟩
	t: '#6abfc6', // Teal 🔵
	b: '#50459b', // Blue 🟦
	i: '#887ecb', // Indigo 🟣
	p: '#a057a3' // Purple 🟪
};
```

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

Note that you don't have to complete the width of each line with transparent pixels. Also note that these sprite art images are scaled by a factor of 2, so if you make a smiley that's 10 characters wide the image will actually have a width of 20 pixels when drawn on the p5.js canvas.

You can also use emoji squares and circles:
🔲🔳⬛⚫🔘⚪⬜🔴🟥🟫🟧🟨🟢🟩🔵🟦🟣🟪

```js
let smiley = `
🔳🔳🔳🟨🟨🟨🟨
🔳🟨🟨⬛🟨🟨⬛🟨🟨
🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
🟨🟨⬛🟨🟨🟨🟨⬛🟨🟨
🔳🟨🟨⬛⬛⬛⬛🟨🟨
🔳🔳🔳🟨🟨🟨🟨`;
```

## Creating Objects

Objects have properties, aka key/value pairs. Everything in Javascript (Number, String, Array, etc.) is actually an Object too! You've already used some properties that these objects have such as `.length` for strings.

Let's take a look at how we could use an object to store attributes about Gumball, a character from the Cartoon Network show The Amazing World of Gumball.

```js
let gumball = {
	name: ['Gumball', 'Tristopher', 'Watterson'],
	species: 'cat',
	age: 12,
	grade: 7,
	studentID: '000029083',
	teacher: 'Ms. Simian'
};
```

Properties can be accessed using the dot syntax or with the `[]` square brackets.

```js
gumball.age; // -> 12
gumball['age']; // same thing

gumball.name[2]; // -> 'Watterson'

// editing the animal for property 'c'
gumball.grade = 8;
// adding new content to the object
gumball.brother = 'Darwin';
```

What does the `gumball` object look like after these changes?

```js
{
  name: ["Gumball", "Tristopher", "Watterson"],
	species: "cat",
	age: 12,
  grade: 8,
	studentID: "000029083",
	teacher: "Ms. Simian",
	brother: "Darwin"
}
```

## End of Level 05 A

Here's what you learned about in Level 5:

- classes: `class`, `this`, and `new`
- p5.js basics
- `spriteArt()` function

# Level 05 B

## Classes

Classes in JavaScript are blueprints for objects. They're useful for creating more complex objects. To declare a class, you use the class keyword with the name of the class ("Rectangle" here). The class blueprint goes inside the `{}` squiggly brackets. All classes must have a `constructor` function which is used to create the object.

```js
class Rectangle {
	constructor(width, height) {
		this.w = width;
		this.h = height;
	}
}

let rect = new Rectangle(5, 4);
console.log('The area is ' + rect.w * rect.h);
```

What will the area be? How could you make a function that calculates the area?

```js
class Rectangle {
	constructor(width, height) {
		this.w = width;
		this.h = height;
	}

	area() {
		return this.w * this.h;
	}
}

let rect = new Rectangle(5, 4);
console.log('The area is ' + rect.area());
```

You can probably see how this would be useful to create multiple objects that have the same variables (properties) and behaviors (functions). This kind of programming is called object-oriented programming. Since this mode of thinking is similar to how us humans perceive objects in real life it makes programming them easier.

## Vectors

To make Pong, we'll have to use Math "in real life"! How exciting! 😄

In Physics a vector is a direction in which something is moving and the magnitude of how fast it's moving there.

In 2D (two dimensional) games, a sprite's vector can be stored as the velocity, aka speed, at which a sprite is moving along the x-axis and the velocity it's moving along the y-axis.

```js
this.velocity = {
	x: 1,
	y: 1
};
```

To make the ball bounce off the paddles and walls, we'll have to change its vector. When the ball touches the paddles we will invert its x velocity. When the ball touches the wall we will invert its y velocity.

## Collision Detection

How do you write "is ball touching the paddle" in code though? Mathematically what we need to know is when the ball's rectangle intersects the rectangle of the paddles or wall. Yes, the ball is a circle but for now we'll use a rectangle for our collision detection calculations.

In this diagram are numbered rectangles. It is easy for us humans to see visually why the numbered rectangles are not intersecting the middle rectangle, number 4.

```txt
┌───┐┌───┐┌───┐
│ 0 ││ 1 ││ 2 │
└───┘└───┘└───┘
┌───┐┌───┐┌───┐
│ 3 ││ 4 ││ 5 │
└───┘└───┘└───┘
┌───┐┌───┐┌───┐
│ 6 ││ 7 ││ 8 │
└───┘└───┘└───┘
```

Stop and try to make one sentence that logically explains what must be true if two rectangles are NOT intersecting.

Here's the answer: two rectangles are NOT intersecting if the rectangle is either fully above or below and/or fully to the left or to the right of the other rectangle.

Since rectangles can be defined by their top left point and the bottom right corners, we only need to check those against the other rectangles top left and bottom right corners.

```txt
(x, y)
 ┌─────────────┐
 │             │
 │             │
 └─────────────┘
            (x+w, y+h)
```

## End of Level 05 B

- Classes
- vectors
- a 2D rectangle collision detection algorithm

## Computer History

This level's computer is based on the Commodore 64
