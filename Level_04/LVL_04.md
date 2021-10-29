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

`pc` is a global object that I made. In the past you've been using `prompt()`. Behind the scenes this function calls `prompt()` which creates a rectangle, text, an input, and two buttons. On level 03 you'll use `pc` to draw text and buttons to the screen!

```js
//  (text         , row, col)
text('Hello World!', 10, 12);
```

`text` expects at least three input arguments/parameters seperated by commas. The first input paramter is the string to display and the 2nd and 3rd are the row and column to display it on.

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

Let's learn how to add a button. The `button` function is just like `text` but it also expects a fourth input parameter, a callback function that gets run when the button is clicked.

A callback function is a function passed as an input argument to a function that will run the callback function. They used to be used for nearly everything asynchronous in JavaScript. These days callbacks are mainly just used for events, like button clicks.

```js
function btnClick() {
	console.log('You clicked the button!');
}
//       (text       , row, col, function)
button('Click me!', 5, 5, btnClick);
```

## End of Level 03 A

- `pc` object
- how to create functions
- `button(txt, row, col, func)`

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

## Erasing a button

Remove buttons from the screen by using the erase function on them. You must store the button returned by `button` to use the `erase` function on it.

```js
let btn = button('Click this!', 10, 10, clickResponse);
btn.erase();
```

## Implied boolean conditions

In this example, `playerIsDead` is a boolean varible.

```js
let playerIsDead = false;
```

If `playerIsDead` gets set to `true` while the user is playing a game, then tell the user "Game Over!".

```js
if (playerIsDead == true) {
	await alert('Game Over!');
}
```

In Javascript you don't have to use `== true` in boolean conditions because checking for equivalence to `true` is implied. You can just put the variable in a boolean condition on it's own.

```js
if (playerIsDead) {
	await alert('Game Over!');
}
```

## How to check if a variable is defined

Sometimes you'll need to check if a variable is defined before you do something with it. If you put a variable that doesn't have a boolean value in a boolean condition by itself, Javascript will evaluate its "truthiness".

```js
let robot; // robot created but not defined

// only have the robot shoot lasers if it is defined!
if (robot) {
	robot.shootLasers();
}
```

You can check if a variable exists by putting it on it's own in a boolean condition. To check if it's undefined (falsy), put a negation operator `!` in front of the variable name in the boolean condition. Variables are considered undefined if they were not assigned a value.

Remember that the prompt function will return a string with the text the user entered or `null` if the user cancelled out of the prompt. In this example, if `name` is set to any string of text it will be considered truthy. If `name` is `null` or an empty string it will be considered falsy and the user will be asked for their name again.

```js
let name;

while (!name) {
	name = await prompt("What's your name?");

	if (!name) {
		await alert('ERROR: You did not type anything!');
	}
}

await alert('Hello ' + name + '!');
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

## Adding to Arrays

So how do we add to arrays? By using the `.push()` function.

```js
let names = ['Amy', 'Ellie', 'Max'];
let nums = [50, 21, 46, 83];

names.push('Jake'); // adds "Jake" to names array
// names -> ['Amy', 'Ellie', 'Max', 'Jake']

nums.push(97); // adds 97 to the nums array
// nums -> [50, 21, 46, 83, 97]
```

## asynchronous functions

To use `await` inside a function you must make it an `async` function. Remember that `await` is used to wait for user interaction.

```js
async function sayHello() {
	let name = await prompt("What's your name?");
	await alert('Hello ' + name + '!');
}
```

Async functions and callbacks are the two main forms of asynchronous programming in JavaScript. Async functions were created so that asynchronous code could be written linearly like synchronous code, one line after the other.

## Computer History: GRiD Compass

This level's computer is based on the GRiD Compass 1101. The following description is from http://oldcomputers.net/grid1101.html

![](http://oldcomputers.net/pics/grid1101-right.jpg)

Designed to be the ultimate portable computer, the clamshell-style GRiD Compass 1101 is the grand-daddy of all present-day laptop computers.

The Compass is very high-tech, with its flat-black, die-cast magnesium-alloy case, and bright, sharp electroluminescent display (ELD). No other system packed so much speed and power in as small a case, and none had such a unique and large, easy-to-read screen, allowing full 80x24 text.

Of course, all of these great features raised the price significantly. At $8150, the GRiD Compass 1101 was the most expensive personal computer you could buy.

Originally developed for business executives, GRiDs were also used by the U.S. military 'in the field', and by NASA on the Space Shuttles during the 1980's and 90's. It's even been said that the US President's "nuclear football" at one time included a GRiD computer.

- [Level 03 A](#level-03-a)
	- [Drawing text to the screen](#drawing-text-to-the-screen)
	- [Creating functions 👷](#creating-functions-)
	- [Creating a Button](#creating-a-button)
	- [End of Level 03 A](#end-of-level-03-a)
- [Level 03 B](#level-03-b)
	- [Recursion](#recursion)
	- [Erasing a button](#erasing-a-button)
	- [Implied boolean conditions](#implied-boolean-conditions)
	- [How to check if a variable is defined](#how-to-check-if-a-variable-is-defined)
	- [truthy or falsy?](#truthy-or-falsy)
- [Level 03 C](#level-03-c)
	- [Date](#date)
	- [Adding to Arrays](#adding-to-arrays)
	- [asynchronous functions](#asynchronous-functions)
	- [Computer History: GRiD Compass](#computer-history-grid-compass)
