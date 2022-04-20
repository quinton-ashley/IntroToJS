# Level 04 A

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen3.jpg)

## slice String

```js
let str = 'hello'.slice(1);
log(str); // -> 'ello'
```

`slice` returns a substring of the original string which starts at the index provided as the first input parameter.

## Create a Button

Buttons glow when hovered over and are clickable. The `button` function is quite similar to the `text` function.

```js
//    (text, row, col)
button('Yes', 5, 5);
button('No', 5, 9);
```

# Level 04 B

## Respond to button clicks

Let's learn how to add a button. The `button` function is just like the `text` function but you can add a fourth input parameter, a callback function that gets run when the button is clicked.

```js
function btnClick() {
	console.log('You clicked the button!');
}
//    (text,     row, col, function)
button('Click me!', 5, 5, btnClick);
```

Note that the callback function is passed as a variable, it is not run using parenthesis `()` when the button is created. It gets run only when the button is clicked.

## Recursion

In the past few lessons you've learned about `for` loops and `while` loops. Recursion is another way to loop code. It is simply a function that calls itself inside its own defintion.

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

# Level 04 C

## Erase

```js
erase();
```

Use erase to remove all text and buttons from the screen.

## Change the position of prompts and alerts

The position of prompt and alert windows can be changed by defining their row and column values just like with the `text` and `button` functions.

```js
//         (text           , row, col)
await alert('I can move too!', 5, 20);
```

## asynchronous functions

To use `await` inside a function you must make it an `async` function.

```js
async function sayHello() {
	let name = await prompt("What's your name?");
	await alert('Hello ' + name + '!');
}
```

# Level 04 D

## async/await vs callbacks

`async`/`await` and callbacks are the two main forms of asynchronous programming in JavaScript. `async`/`await` was added to JavaScript in 2017 so that asynchronous code could be written linearly, like synchronous code, one line after the other.

Callbacks are non-linear, so they are good for handling events (like button clicks) that in some cases we wouldn't want our program to wait for. For example if you gave the user a choice between clicking a "Yes" or "No" button you wouldn't want the program to wait for them to click "Yes" because they might click "No". Different callback function need to be used to handle the user's response.

Now you might be wondering how await-ing the prompt function works, since the user can either enter text or click cancel?! In level 11 you'll learn how to make await-able `Promise` objects that resolve after an event or any number of different events.

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

# Level 04 E

## modulo operator

The modulo operator `%` it gets the remainder of a division.

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

- [Level 04 A](#level-04-a)
	- [slice String](#slice-string)
	- [Create a Button](#create-a-button)
- [Level 04 B](#level-04-b)
	- [Respond to button clicks](#respond-to-button-clicks)
	- [Recursion](#recursion)
- [Level 04 C](#level-04-c)
	- [Erase](#erase)
	- [Change the position of prompts and alerts](#change-the-position-of-prompts-and-alerts)
	- [asynchronous functions](#asynchronous-functions)
- [Level 04 D](#level-04-d)
	- [async/await vs callbacks](#asyncawait-vs-callbacks)
	- [Date](#date)
	- [Adding to Arrays](#adding-to-arrays)
- [Level 04 E](#level-04-e)
	- [modulo operator](#modulo-operator)
	- [for loops with non-standard incrementation](#for-loops-with-non-standard-incrementation)
- [Computer History: GRiD Compass](#computer-history-grid-compass)
- [Level 04 Table of Contents](#level-04-table-of-contents)
