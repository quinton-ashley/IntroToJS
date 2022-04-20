# Level 06 A

Before you can start working on the `TicTacToe` game, you'll have to prove your skills in Javascript. You should be able to complete the first few test sections quite quickly. Stop when you complete the challenge titled "Golf Code".

<https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript>

After you complete those challenges you can upgrade to level 6! 🥳

![](https://elasticbeanstalk-us-east-2-651921832906.s3.us-east-2.amazonaws.com/QuintOS/bootScreen4.jpg)

## Return variables from a function

functions can return a variable (only one). What will the value of `upHigh` be?

```js
function gimmeFive() {
	return 5;
}

let upHigh = gimmeFive() + gimmeFive();
```

## Creating functions with input parameters

function with input parameters x and y, returns the value of `x^2 * y^2`

```js
function doMyMathHomework(x, y) {
	return x * x * y * y;
}

let result0 = doMyMathHomework(1, 3); // returns 9
let result1 = doMyMathHomework(2, 5); // what does this return?
```

## Coding Philosophy: Using functions effectively

Try not to rewrite the same lines of code in different places, put that code in a function instead. If you have a chunk of code and you need to do something only slightly different at another point in your program, sometimes you should make a function with input parameters for the thing(s) that are different. Typically functions should only contain code that is related to the name/description you gave that function, move unrelated code into its own function.

# Level 06 B

## Nested for loops

A `for` loop inside a `for` loop? FORLOOPCEPTION! 😮

```js
for (let row = 0; row < rows; row++) {
	for (let col = 0; col < columns; col++) {
		// nested for loop
	}
}
```

The first `for` loop goes row by row, then the `for` loop on the inside goes through all the columns in that row.

## Arrow function syntax

You can also create functions using the arrow syntax. The arrow is: `=>`

```js
//       (   text    , x, y, action)
button('click me!', 0, 0, () => {
	console.log('button clicked!');
});
```

# Level 06 C

## Two Dimensional Arrays

A two dimensional array (aka 2D array) is an array of arrays.

```js
// red and black checkers on a checkerboard
let board = [
	[' ', ' ', ' ', 'r', ' ', 'B', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', 'r'],
	[' ', ' ', ' ', ' ', 'r', ' ', ' ', ' '],
	[' ', 'B', ' ', ' ', ' ', ' ', ' ', 'b'],
	[' ', ' ', 'b', ' ', ' ', ' ', 'b', ' '],
	[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
	[' ', ' ', ' ', ' ', 'b', ' ', 'b', ' ']
];
```

Two dimensional data, such as checker board piece positions, can be stored in two dimensional arrays. In the example `"r"` represents a single red piece, uppercase `"R"` represents a king (two stacked red pieces).

## 2D array access

How could we access the red piece on the top row?

```js
board[0][3]; // row is 0, column is 3
```

`board[0]` gets the first row in board array and the `[3]` after that gets us the piece at column 3 in that row array. How could we access the red peice in the middle of the board?

## Using nested for loops with 2D arrays

How could we use a nested for loop to clear the board of all the pieces by assigning a blank space " " to every element in the `board` array?

```js
for (let row = 0; row < rows; row++) {
	for (let col = 0; col < columns; col++) {
		board[row][col] = ' ';
	}
}
```

# Level 06 D

## Implied boolean conditions

In this example, if the boolean variable `playerIsDead` gets set to `true`, then tell the user "Game Over!".

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

## exit a function

`return` can be used to exit functions.

```js
function stamp(passport) {
	if (!passport) {
		return;
	}
	//
}
```

## alert and prompt window sizing

A fourth input paramter can be used to restrict the width of prompt and alert windows. Text that is longer than the specified width will be put on new lines. This width limiter can be used with the `text`, `alert`, and `prompt` functions.

```js
let message =
	"This here is lot of text, like a whole lot. You really don't need to read all of it. You can stop reading this now, it is not important. This is just filler text. I don't know why you're still reading it. Just kidding I want you to read all of it so please keep reading this! You have to read it. Did you stop reading? Well that's too bad there was a suprise at the end. Just kidding again, there is not. Stop reading now though, I'm serious you will only be disappointed. There is nothing special at the end of this long paragraph. This paragraph is not the credits of a Marvel movie! Skip to the end please. Wow, now you're almost at the end. Alright you did it, this is the end of the paragraph.";
//         (text  , row, col, w)
await alert(message, 5, 20, 16);
```

- [Level 06 A](#level-06-a)
	- [Return variables from a function](#return-variables-from-a-function)
	- [Creating functions with input parameters](#creating-functions-with-input-parameters)
	- [Coding Philosophy: Using functions effectively](#coding-philosophy-using-functions-effectively)
- [Level 06 B](#level-06-b)
	- [Nested for loops](#nested-for-loops)
	- [Arrow function syntax](#arrow-function-syntax)
- [Level 06 C](#level-06-c)
	- [Two Dimensional Arrays](#two-dimensional-arrays)
	- [2D array access](#2d-array-access)
	- [Using nested for loops with 2D arrays](#using-nested-for-loops-with-2d-arrays)
- [Level 06 D](#level-06-d)
	- [Implied boolean conditions](#implied-boolean-conditions)
	- [exit a function](#exit-a-function)
	- [alert and prompt window sizing](#alert-and-prompt-window-sizing)
