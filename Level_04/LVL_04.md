# Level 04 A

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen3.jpg)

## Drawing text to the screen

In the past you've been using `prompt()` which creates a rectangle, text, an input, and two buttons. In this level you'll learn how to draw text and buttons to the screen on their own!

```js
//  (text         , row, col)
text('Hello World!', 10, 12);
```

`text` expects at least three input arguments/parameters seperated by commas. The first input parameter is the String to display and the second and third inputs parameters are the row and column to display it on.

## Creating a Button

Let's learn how to add a button. The `button` function is just like `text` but it also expects a fourth input parameter, a callback function that gets run when the button is clicked.

A callback function is a function passed as an input argument to a function that will run the callback function. They used to be used for nearly everything asynchronous in JavaScript. These days callbacks are mainly just used for events, like button clicks.

```js
function btnClick() {
	console.log('You clicked the button!');
}
//    (text,     row, col, function)
button('Click me!', 5, 5, btnClick);
```

## End of Level 04 A

- drawing text to the screen
- how to create functions
- creating buttons

# Level 04 B

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

Remember that the prompt function will return a String with the text the user entered or `null` if the user cancelled out of the prompt. In this example, if `name` is set to any String of text it will be considered truthy. If `name` is `null` or an empty String it will be considered falsy and the user will be asked for their name again.

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
(''); // an empty String
```

# Level 04 C

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

## Changing the positions of prompts and alerts

The position of prompt and alert windows can be changed by defining their row and column values just like with the `text` function.

```js
//         (text           , row, col, w)
await alert('I can move too!', 5, 20, 16);
```

A fourth input paramter can be used to restrict the width of the window. This also works with the `text` and `prompt` functions but not the `button` function. Text that is longer than the specified width will be put on new lines.

If row, column, and width are not defined, default position values are used, which are different for each of the QuintOS virtual computers.

# Level 04 D

## modulo operator

The modulo operator `%` gets the gets the remainder of a division.

```js
// true if x is even (divisible by 2)
if (x % 2 == 0) {
	console.log('x is even!');
}

// true if y is divisible by 5
if (y % 5 == 0) {
	console.log(y + ' is a multiple of 5');
}
```

# Computer History: GRiD Compass

This level's computer is based on the GRiD Compass 1101. The following description is from http://oldcomputers.net/grid1101.html

![](http://oldcomputers.net/pics/grid1101-right.jpg)

Designed to be the ultimate portable computer, the clamshell-style GRiD Compass 1101 is the grand-daddy of all present-day laptop computers.

The Compass is very high-tech, with its flat-black, die-cast magnesium-alloy case, and bright, sharp electroluminescent display (ELD). No other system packed so much speed and power in as small a case, and none had such a unique and large, easy-to-read screen, allowing full 80x24 text.

Of course, all of these great features raised the price significantly. At $8150, the GRiD Compass 1101 was the most expensive personal computer you could buy.

Originally developed for business executives, GRiDs were also used by the U.S. military 'in the field', and by NASA on the Space Shuttles during the 1980's and 90's. It's even been said that the US President's "nuclear football" at one time included a GRiD computer.

# Level 04 Table of Contents

- [Level 04 A](#level-04-a)
	- [Drawing text to the screen](#drawing-text-to-the-screen)
	- [Creating a Button](#creating-a-button)
	- [End of Level 04 A](#end-of-level-04-a)
- [Level 04 B](#level-04-b)
	- [Recursion](#recursion)
	- [Erasing a button](#erasing-a-button)
	- [Implied boolean conditions](#implied-boolean-conditions)
	- [How to check if a variable is defined](#how-to-check-if-a-variable-is-defined)
	- [truthy or falsy?](#truthy-or-falsy)
- [Level 04 C](#level-04-c)
	- [Date](#date)
	- [Adding to Arrays](#adding-to-arrays)
	- [asynchronous functions](#asynchronous-functions)
	- [Changing the positions of prompts and alerts](#changing-the-positions-of-prompts-and-alerts)
- [Level 04 D](#level-04-d)
	- [modulo operator](#modulo-operator)
- [Computer History: GRiD Compass](#computer-history-grid-compass)
- [Level 04 Table of Contents](#level-04-table-of-contents)
