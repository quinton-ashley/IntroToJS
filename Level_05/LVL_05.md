# Level 05 A

Do the GuessTheNumber challenge section before starting level 04!

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen3.jpg)

## Coding Philosophy: Naming variables

Good code should be easy for other programmers (humans) to read and efficient for your computer to run. Here are some guidelines for how to write good code!

Above all, it's important to put effort into thinking of GOOD names for your variables. Good variable names in Javascript are short and concise descriptors.

## Create a Button

Buttons glow when hovered over and are clickable. The `button` function is quite similar to the `text` function.

```js
//    (text, row, col)
button('Yes', 5, 5);
button('No', 5, 9);
```

# Level 05 B

## Respond to button clicks

You can add a fourth input parameter to the button function, a callback function that gets run when the button is clicked.

```js
function test() {
	console.log('You clicked the button!');
}
//    (text,     row, col, function)
button('Click me!', 5, 5, test);
```

Note that the callback function is passed as a variable, it is not run using parenthesis `()` when the button is created. It gets run only when the button is clicked.

## Recursion

In the past few lessons you've learned about `for` loops and `while` loops. Recursion is another way to loop code. It is simply a function that calls itself inside its own definition.

```js
function doRecursion() {
	doRecursion(); // infinite loop! OH NO!
}
```

Here's a more practical example of a recursion loop that ends when the player losses all their health points.

```js
let health = 100; // initial health

function gameLoop() {
	//
	// ... game code here ...
	//
	if (health > 0) {
		gameLoop();
	} else {
		gameOver();
	}
}
```

# Level 05 C

## Change the position of prompts and alerts

The position of prompt and alert windows can be changed by defining their row and column values just like with the `text` and `button` functions. You can also limit the width of the window.

```js
//         (text           , row, col, width limit)
await alert('I can move too!', 5, 12, 20);
```

## asynchronous functions

To use `await` inside a function you must make it an `async` function.

```js
async function sayHello() {
	let name = await prompt("What's your name?");
	await alert('Hello ' + name + '!');
}
```

## async/await vs callbacks

`async`/`await` and callbacks are the two main forms of asynchronous programming in JavaScript. `async`/`await` was added to JavaScript in 2017 so that asynchronous code could be written linearly, like synchronous code, one line after the other.

Callbacks are non-linear, so they are good for handling events (like button clicks) that in some cases we wouldn't want our program to wait for. For example if you gave the user a choice between clicking a "Yes" or "No" button you wouldn't want the program to wait for them to click "Yes" because they might click "No". A separate callback function is needed to handle each response.

Now you might be wondering how await-ing the prompt function works, since the user can either enter text or click cancel?! In level 11 you'll learn how to make await-able `Promise` objects that resolve after an event or any number of different events.

# Level 05 D

## Date

Take a look at the MDN documentation for [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) and run the JavaScript demo.

`Date.now()` returns the current date in milliseconds.

# Level 05 E

## modulo alternation

Here's how modulo can be used for alternation.

```js
for (let i = 0; i < 10; i++) {
	if (i % 2 == 0) {
		text('even', i);
	} else {
		text('odd', i);
	}
}
```

## for loops with non-standard incrementation

This code does the same kind of alternation.

```js
for (let i = 0; i < 10; i += 2) {
	text('even', i);
	text('odd', i + 1);
}
```

# Computer History: GRiD Compass

This level's computer is based on the GRiD Compass 1101. The following description is from http://oldcomputers.net/grid1101.html

![](http://oldcomputers.net/pics/grid1101-right.jpg)

Designed to be the ultimate portable computer, the clamshell-style GRiD Compass 1101 is the grand-daddy of all present-day laptop computers.

The Compass is very high-tech, with its flat-black, die-cast magnesium-alloy case, and bright, sharp electroluminescent display (ELD). No other system packed so much speed and power in as small a case, and none had such a unique and large, easy-to-read screen, allowing full 80x24 text.

Of course, all of these great features raised the price significantly. At $8150, the GRiD Compass 1101 was the most expensive personal computer on the market.

Originally developed for business executives, GRiDs were also used by the U.S. military 'in the field', and by NASA on the Space Shuttles during the 1980's and 90's. It's even been said that the US President's "nuclear football" at one time included a GRiD computer.

# Level 04 Table of Contents

- [Level 05 A](#level-05-a)
	- [Coding Philosophy: Naming variables](#coding-philosophy-naming-variables)
	- [Create a Button](#create-a-button)
- [Level 05 B](#level-05-b)
	- [Respond to button clicks](#respond-to-button-clicks)
	- [Recursion](#recursion)
- [Level 05 C](#level-05-c)
	- [Change the position of prompts and alerts](#change-the-position-of-prompts-and-alerts)
	- [asynchronous functions](#asynchronous-functions)
	- [async/await vs callbacks](#asyncawait-vs-callbacks)
- [Level 05 D](#level-05-d)
	- [Date](#date)
- [Level 05 E](#level-05-e)
	- [modulo alternation](#modulo-alternation)
	- [for loops with non-standard incrementation](#for-loops-with-non-standard-incrementation)
- [Computer History: GRiD Compass](#computer-history-grid-compass)
- [Level 04 Table of Contents](#level-04-table-of-contents)
