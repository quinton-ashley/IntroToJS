# Level 05 A

Complete the bonus game, Wheel Of Fortune, before continuing to level 4. Edit your `load.js` file:

```js
QuintOS.level = 2;
QuintOS.gameSelect = "WheelOfFortune";
```

If you've got this far congratulations! You've reached Intermediate Level Javascript! 🥳 Edit your `load.js` file:

```js
QuintOS.level = 5;
```

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen5.jpg)

## Creating Objects

Objects have properties, aka key/value pairs. Everything in Javascript (Number, String, Array, etc.) is actually an Object too! You've already used some properties that these objects have such as `.length` for strings.

Let's take a look at how we could use an object to store attributes about Gumball, a character from the Cartoon Network show The Amazing World of Gumball.

```js
let gumball = {
  name: ["Gumball", "Tristopher", "Watterson"],
  species: "cat",
  age: 12,
  grade: 7,
  studentID: "000029083",
  teacher: "Ms. Simian",
};
```

Properties can be accessed using the dot syntax or with the `[]` square brackets.

```js
gumball.age; // -> 12
gumball["age"]; // same thing

gumball.name[2]; // -> 'Watterson'

// editing the animal for property 'c'
gumball.grade = 8;
// adding new content to the object
gumball.brother = "Darwin";
```

What does the `gumball` object look like after these changes?

```js
let gumball = {
  name: ["Gumball", "Tristopher", "Watterson"],
  species: "cat",
  age: 12,
  grade: 8,
  studentID: "000029083",
  teacher: "Ms. Simian",
  brother: "Darwin",
};
```

## What is p5.js?

To make Pong we're going to use 2D graphics instead of text based graphics. p5.js is a JavaScript graphics library for creative coding, with a focus on making coding accessible and inclusive for artists, designers, educators, beginners, and anyone else!

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
let img = spriteArt("w.w");
```

This example code would create an image with one white pixel, followed by a transparent pixel, and then another white pixel. You can also use spaces to indicate transparent pixels.

Here's the full color palette you can use, same colors as the real Commodore 64! The keys are the letters (and emoji in the comments) and the values are the html hexadecimal color values.

```js
let palette = {
  " ": "", // transparent 🔲
  ".": "", // transparent 🔳
  k: "#000000", // blacK ⬛
  d: "#626252", // Dark-gray ⚫
  m: "#898989", // Mid-gray 🔘
  l: "#adadad", // Light-gray ⚪
  w: "#ffffff", // White ⬜
  c: "#cb7e75", // Coral 🔴
  r: "#9f4e44", // Red 🟥
  n: "#6d5412", // browN 🟫
  o: "#a1683c", // Orange 🟧
  y: "#c9d487", // Yellow 🟨
  e: "#9ae29b", // light grEEn 🟢
  g: "#5cab5e", // Green 🟩
  t: "#6abfc6", // Teal 🔵
  b: "#50459b", // Blue 🟦
  i: "#887ecb", // Indigo 🟣
  p: "#a057a3", // Purple 🟪
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

Note that you don't have to complete the width of each line with transparent pixels. Also note that by default these sprite art images are scaled by a factor of 2, so if you make a smiley that's 10 characters wide the image will actually have a width of 20 pixels when drawn on the p5.js canvas.

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

## End of Level 05 A

Here's what you learned about in Level 5:

- objects `{ key: 'value' }`
- p5.js basics
- `spriteArt()` function

# Level 05 B

## Classes

Classes in JavaScript are blueprints for objects. They're useful for creating multiple objects that have the same variables (properties) and behaviors (functions). To declare a class, you use the class keyword with the name of the class ("Rectangle" here). The class blueprint goes inside the `{}` squiggly brackets. All classes must have a `constructor` function which is used to create the object.

```js
class Rectangle {
  constructor(width, height) {
    this.x = 0;
    this.y = 0;
    this.w = width;
    this.h = height;
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
  }
}

let box0 = new Rectangle(2, 4);
let box1 = new Rectangle(3, 2);
let box2 = new Rectangle(5, 6);
```

This kind of programming is called object-oriented programming. Since this mode of thinking is similar to how us humans perceive objects in real life it makes it easier to use them when coding.

Note that you shouldn't use the keyword `function` when defining functions in a class.

## Getters

Let's say you wanted to make a calculated property like area that could change if the box changes size.

```js
console.log("The area of box 0 is " + box0.w * box0.h); // 20!
```

To get a calculated property like area, you can use a getter.

```js
class Rectangle {
  constructor(width, height) {
    this.x = 0;
    this.y = 0;
    this.w = width;
    this.h = height;
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
  }

  get area() {
    return this.w * this.h;
  }
}

let box0 = new Rectangle(5, 4);
console.log("The area is " + box0.area); // 20
box0.w = 6; // change width to 6
console.log("Now the area is " + box0.area); // 24
```

This example shows how the area will still be calculated correctly even after the width of the box changes.

## Vectors

To make Pong, we'll have to use Math "in real life"! How exciting! 😄

In Physics a vector is a direction in which something is moving and the magnitude of how fast it's moving there at a given interval of time.

In 2D (two dimensional) games, a sprite's vector can be stored as the velocity, aka speed, at which a sprite is moving along the x-axis and the velocity it's moving along the y-axis per frame.

```js
this.velocity = {
  x: 1,
  y: 1,
};
```

To make the ball bounce off the paddles and walls, we'll have to change its vector. When the ball touches the paddles we will invert its x velocity. When the ball touches the wall we will invert its y velocity.

## End of Level 05 B

- classes: `class`, `get`, `this`, and `new`
- vectors (x and y velocities)

## Computer History: Commodore 64

This level's computer is based on the Commodore 64

- [Level 05 A](#level-05-a)
  - [Creating Objects](#creating-objects)
  - [What is p5.js?](#what-is-p5js)
  - [p5.js Basics](#p5js-basics)
  - [spriteArt](#spriteart)
  - [Drawing Images in p5.js](#drawing-images-in-p5js)
  - [End of Level 05 A](#end-of-level-05-a)
- [Level 05 B](#level-05-b)
  - [Classes](#classes)
  - [Vectors](#vectors)
  - [Collision Detection](#collision-detection)
  - [End of Level 05 B](#end-of-level-05-b)
  - [Computer History: Commodore 64](#computer-history-commodore-64)
