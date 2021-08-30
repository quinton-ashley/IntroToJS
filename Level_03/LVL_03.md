# Level 03 A

Before you level up to level 2, complete the Guess the Number PART C challenge section. Edit your `load.js` file:

```js
QuintOS.level = 0;
```

After that you can upgrade to level 3! 🥳

```js
QuintOS.level = 3;
```

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen3.jpg)

## Drawing text to the screen

`pc` is a global object that I made. In the past you've been using `prompt()`. Behind the scenes this function calls `pc.prompt()` which creates a rectangle, text, an input, and two buttons. On level 03 you'll use `pc` to draw text and buttons to the screen!

```js
let x = 10;
let y = 12;

pc.text('Hello World!', x, y);
```

## Creating functions 👷

How do we create our own functions? Using the `function` keyword!

```js
function sayHello() {
	// creates the function
	console.log('hello!');
}

sayHello(); // runs the function
```

## Creating a Button

Let's learn how to add a button. The function is just like `pc.text` but the fourth input parameter is a function that gets run when the button is clicked.

```js
function btnClick() {
	console.log('You clicked the button!');
}
//                 (text       , x, y, function)
let btn = pc.button('Click me!', 5, 5, btnClick);
```

Remove the button from the screen by using the erase function of the `btn` object.

```js
btn.erase();
```

## End of Level 03 A

- `pc` object
- how to create functions
- `pc.button(txt, x, y, func)`

# Level 03 B

## Recursion

Recursion is when a function calls itself. It's another way to loop code in addition to for loops and while loops.

```js
function doRecursion() {
	doRecursion(); // infinite loop! OH NO!
}
```

Example of a recursion loop that ends when the player's score reaches 20.

```js
let score = 0;

function doRecursion() {
	//
	// ... game code here ...
	score++;
	//
	if (score < 20) {
		doRecursion();
	}
}
```

## Using boolean variables

```js
let playerIsDead = false;
```

If `playerIsDead` gets set to `true`, then tell the user "Game Over!".

```js
if (playerIsDead == true) {
	await pc.alert('Game Over!');
}
```

In Javascript you don't have to use `== true`. You can just put the variable in a boolean condition on it's own.

```js
if (playerIsDead) {
	await pc.alert('Game Over!');
}
```

## How to check if a variable is defined

Sometimes you'll need to check if a variable is defined before you do something with it. If you put a variable that doesn't have a boolean value in a boolean condition by itself, Javascript will evaluate its "truthiness".

```js
let robot;

// if the robot exists, have it shoot lasers!
if (robot) {
	robot.shootLasers();
}
```

You can check if a variable is undefined, by putting a negation operator `!` in front of the variable name in the boolean condition. Variables are undefined if they were created but not assigned a value.

Remember that the prompt function will return a string with the text the user entered or `null` if the user cancelled out of the prompt. In this example, if `name` is set to any string of text it will be considered truthy. If `name` is `null` or an empty string it will be considered falsy and the user will be asked for their name again.

```js
let name;

while (!name) {
	name = await pc.prompt("What's your name?");

	if (!name) {
		await pc.alert('ERROR: You did not type anything!');
	}
}
```

The while loop will repeat until `name` is defined by the user. Neat!

## truthy or falsy?

Any value that is not falsy is truthy. Variables are falsy if they are:

```js
undefined;
null;
0; // the number 0
(''); // an empty string
```

# Level 03 C

## Date

Take a look at the MDN documentation for [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) and run the JavaScript demo.

`Date.now()` returns the current date in milliseconds.

## asynchronous functions

To use `await` inside a function you must make it an `async` function. When you use the `pc.alert` function `await` waits for the user to press enter.

```js
async function sayHello() {
	await pc.alert('Hello!');
}
```

## Info

Based on the GRiD Compass
