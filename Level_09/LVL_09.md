---
# Level 09 A
---

Before you can start working on the `TicTacToe` game, you'll have to prove your skills in Javascript. You should be able to complete the first few test sections quite quickly. Stop when you complete the challenge titled "Golf Code".

<https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript>

After you complete those challenges you can upgrade to level 6! 🥳

---

# Level 09 B

---

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

---

# Level 09 C

---

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

---

## 2D array access

How could we access the red piece on the top row?

```js
board[0][3]; // row is 0, column is 3
```

`board[0]` gets the first row in board array and the `[3]` after that gets us the piece at column 3 in that row array. How could we access the red piece in the middle of the board?

---

## Using nested for loops with 2D arrays

How could we use a nested for loop to clear the board of all the pieces by assigning a blank space " " to every element in the `board` array?

```js
for (let row = 0; row < rows; row++) {
	for (let col = 0; col < columns; col++) {
		board[row][col] = ' ';
	}
}
```

---

# Level 09 D

---

## alert and prompt window sizing

A fourth input parameter can be used to restrict the width of prompt and alert windows. Text that is longer than the specified width will be put on new lines. This width limiter can be used with the `txt`, `alert`, and `prompt` functions.

```js
let message =
	"This here is lot of text, like a whole lot. You really don't need to read all of it. You can stop reading this now, it is not important. This is just filler text. I don't know why you're still reading it. Just kidding I want you to read all of it so please keep reading this! You have to read it. Did you stop reading? Well that's too bad there was a surprise at the end. Just kidding again, there is not. Stop reading now though, I'm serious you will only be disappointed. There is nothing special at the end of this long paragraph. This paragraph is not the credits of a Marvel movie! Skip to the end please. Wow, now you're almost at the end. Alright you did it, this is the end of the paragraph.";
//         (text  , row, col, w)
await alert(message, 5, 20, 16);
```

---

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

---
