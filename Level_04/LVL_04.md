# Level 04 A

Do the GuessTheNumber challenge section before starting level 04!

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen3.jpg)

## Creating a Button

Let's learn how to add a button. The `button` function is just like `text` but you can add a fourth input parameter, a callback function that gets run when the button is clicked.

```js
function btnClick() {
	console.log('You clicked the button!');
}
//    (text,     row, col, function)
button('Click me!', 5, 5, btnClick);
```

Note that the function is passed as a variable but it is not run. It gets run only when the button is clicked.

## Recursion

In the past few lessons you've learned about `for` loops and `while` loops. Recursion is another way to loop code. It is simply a function that calls itself inside its own defintion.

```js
function doRecursion() {
	doRecursion(); // infinite loop! OH NO!
}
```

Here's a more practical example of a recursion loop that ends when the player losses all their health points.

```js
player.health = 100; // initial health

function gameLoop() {
	//
	// ... game code here ...
	//
	if (enemy.attack(player) == true) {
		player.health -= enemy.damage;
	}
	//
	if (player.health > 0) {
		gameLoop();
	} else {
		gameOver();
	}
}
```

# Level 04 B

## Erasing a button

To remove a button from the screen, store it in a variable and then use the button's erase function.

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

## Check if a variable is defined

Sometimes you'll need to check if a variable is defined before you do something with it. If you put a variable that doesn't have a boolean value in a boolean condition by itself, Javascript will evaluate its "truthiness". You can check if a variable exists by putting it on it's own in a boolean condition.

```js
let robot; // robot created but not defined

// only have the robot shoot lasers if it is defined!
if (robot) {
	robot.shootLasers();
}
```

## Check if a variable is undefined

To check if a variable is undefined (falsy), put a negation operator `!` in front of the variable name in the boolean condition. Variables are considered undefined if they were not assigned a value.

```js
let robot;

if (!robot) {
	robot = createRobot();
}
```

## truthy or falsy?

Any value that is not falsy is truthy. Variables are falsy if they are:

```js
undefined;
null;
0; // the number 0
(''); // an empty String
```

In this example code the while loop will repeat until `username` is defined by the user (truthy).

```js
let username;

while (!username) {
	username = await prompt('What do you want your username to be?');

	if (!username) {
		await alert('ERROR: You are required to enter a username!');
	}
}

await alert('Hello ' + username + '!');
```

Remember that the prompt function will return a String with the text the user entered or `null` if the user cancelled out of the prompt.

If `username` is set to any String of text it will be considered truthy. If `username` is undefined, `null`, or an empty String it will be considered falsy.

# Level 04 C

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

Callbacks are non-linear, so they are good for handling events (like button clicks) that in some cases we wouldn't want our program to wait for. For example if you gave the user a choice between clicking a "Yes" or "No" button you wouldn't want the program to wait for them to click "Yes" because they might click "No". Different callback function need to be used to handle the user's response.

Now you might be wondering how await-ing the prompt function works, since the user can either enter text or click cancel?! In level 11 you'll learn how to make await-able `Promise` objects that resolve after an event or any number of different events.

## Change the position of prompts and alerts

The position of prompt and alert windows can be changed by defining their row and column values just like with the `text` function.

```js
//         (text           , row, col, w)
await alert('I can move too!', 5, 20, 16);
```

A fourth input paramter can be used to restrict the width of the window. Text that is longer than the specified width will be put on new lines. This width limiter can be used with the `text`, `alert`, and `prompt` functions.

If row, column, and width are not defined, default position values are used, which are different for each of the QuintOS virtual computers.

# Level 04 D

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
	- [Creating a Button](#creating-a-button)
	- [Recursion](#recursion)
- [Level 04 B](#level-04-b)
	- [Erasing a button](#erasing-a-button)
	- [Implied boolean conditions](#implied-boolean-conditions)
	- [Check if a variable is defined](#check-if-a-variable-is-defined)
	- [Check if a variable is undefined](#check-if-a-variable-is-undefined)
	- [truthy or falsy?](#truthy-or-falsy)
- [Level 04 C](#level-04-c)
	- [asynchronous functions](#asynchronous-functions)
	- [async/await vs callbacks](#asyncawait-vs-callbacks)
	- [Change the position of prompts and alerts](#change-the-position-of-prompts-and-alerts)
- [Level 04 D](#level-04-d)
	- [Date](#date)
	- [Adding to Arrays](#adding-to-arrays)
- [Level 04 E](#level-04-e)
	- [modulo operator](#modulo-operator)
	- [for loops with non-standard incrementation](#for-loops-with-non-standard-incrementation)
- [Computer History: GRiD Compass](#computer-history-grid-compass)
- [Level 04 Table of Contents](#level-04-table-of-contents)
