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

`pc` is a global object that I made. In the past you've been using `prompt()`. Behind the scenes this function calls `pc.prompt()` which creates a rectangle, text, an input, and two buttons. On level 03 you can use `pc` yourself to draw text, rectangles, and buttons to the screen!

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

## truth-y or false-y?

This code will print "Hello!" to the console's log successfully but how?

```js
let txt = 'Hello!';
if (txt) {
	// that's not a boolean expression... or is it??
	console.log(txt);
}
```

JavaScript has a way of assessing the truthiness of numbers, strings, arrays, and objects when they're evaluated as a boolean expression.

```js
let q0; // false (q0 is undefined, not given a value)
let q1 = null; // false (null means nothing)

let x = 109; // true (any number besides 0 is true)
let y = -20; // true (any number besides 0 is true)
let z = 0; // false (the number is 0)

let txt0 = 'hello'; // true (any string with chars is true)
let txt1 = ''; // false (any empty string is false)

let arr0 = []; // true (array is empty but still exists)
```

So `if (txt)` is checking if `txt` is truth-y. This is equalvalent to explicitly checking:

```js
if (typeof x != 'undefined' && x != false && x != null && x != 0 && x != '')
```

What a long line of code! Good thing JavaScript makes it easy to test truthiness.

This feature of JS is useful for easily checking if variables are undefined.

```js
let btn;

// if the button exists, erase it from the screen
if (btn) btn.erase();
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
