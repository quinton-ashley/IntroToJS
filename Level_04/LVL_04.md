# Level 04 A

Before you level up to level 3, complete the Pick a Path PART C challenge section. Edit your `load.js` file in the `GAMES` folder.

```js
QuintOS.level = 3;
QuintOS.gameSelect = "PickAPath";
```

Before you can start working on the `TicTacToe` game, you'll have to prove your skills in Javascript. You should be able to complete the first few test sections quite quickly. Stop when you get to the challenge titled "Golf Code".

<https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript>

After you complete those challenges you can upgrade to level 4! 🥳

```js
QuintOS.level = 4;
```

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

function with input parameters x and y, returns the value of x^2 \* y^2

```js
function doMyMathHomework(x, y) {
  return x * x * y * y;
}

doMyMathHomework(1, 3); // returns 9
doMyMathHomework(2, 5); // what does this return?
```

## Two Dimensional Arrays

A two dimensional array (aka 2D array) is an array of arrays.

```js
// red and black checkers on a checkerboard
let board = [
  [" ", " ", "r", " ", " ", "B", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", "r"],
  [" ", " ", " ", " ", "r", " ", " ", " "],
  [" ", "B", " ", " ", " ", " ", " ", "b"],
  [" ", " ", "b", " ", " ", " ", "b", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", "b", " ", "b", " "],
];
```

Two dimensional data, such as checker board piece positions, can be stored in two dimensional arrays. In the example `"r"` represents a single red piece, uppercase `"R"` represents a king (two stacked red pieces).

How could we access the red piece on the top row?

```js
board[0][2];
```

`board[0]` gets the first row in board array and the `[2]` after that gets us the piece at column 3 in that row array. How could we access the red peice in the middle of the board?

## Nested for loops

A for loop inside a for loop? FORLOOPCEPTION! 😮

```js
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    // nested for loop
  }
}
```

How could we use a nested for loop to clear the board of all the pieces by assigning a blank space " " to every element in the `board` array?

## Coding Philosophy: Part 1

Good code should be easy for other programmers (humans) to read and efficient for your computer to run. Here are some guidelines for how to write good code!

Above all, it's important to put effort into thinking of GOOD names for your variables. Good variable names in Javascript are short and concise descriptors. Write sufficiently detailed comments in your code too.

Try not to rewrite the same exact lines of code in different places, put that code chunk in a function and use that function instead. Likewise if you have a chunk of code and you want to do something only slightly different at another point in your program, make a function with input parameters for the thing(s) that make it different. If you have a code chunk inside a function that is unrelated to the name/description you gave that function, move that code into its own function.

## End of Level 04 A

- 2d Arrays
- nested for loops

# Level 04 B

## Coding Philosophy: Part 2

Solve complex problems by thinking algorithmically! That means breaking problems down step by step. "A journey of a thousand miles begins with a single step". If you get stuck on a problem you may be overcomplicating it, keep things simple. Attempt to find a decent solution to a problem before concerning yourself with what the best solution could be. "Writing is rewriting" this is true for most people when writing essays, music, and often code too. No one can write code like the classical composer Mozart wrote music, by creating flawless first drafts that would sound exactly as he hoped. "Put something on the page!", start by thinking of the program logically, then draw it out on paper, then start writing code, test, rewrite, test, rewrite, and more tests! Remember "Computer Science" is a science, it's all about experimentation, and unlike most research science we can get pretty immediate results by running our programs! Getting things wrong is a big part of the process, having the program not do what you expect is an opportunity to learn. Keep trying but if you get really stuck take a long break and come back to it. Taking a break to do something else can really help give you a new headspace and perspective on what you're trying to code.

## Artificial Intelligence in Games

Making an AI for a game, even for TicTacToe, might sound daunting but you already know enough about programming to do it! AI is just code that reacts to a game environment with an action.

Have you ever played Connect Four? Try to think of the simplest method of making a move in Connect Four. Note it's not the same as the worst method, which would be deliberately making moves to help your opponent win.

You may think the simplest method then is to drop a tile in a random column, however that might not be a valid move if that column of tiles is full. So therefore, the simplest method of making a valid move in Connect Four would be to go column by column and drop your tile in the first column that isn't full of tiles yet.

In TicTacToe the simplest method to make a valid move is to look at each space and place one's X or O mark in the first available space. Available spaces are spaces that are not already occupied by an X or O. This will be how your first AI player makes moves.

## End of Level 04 B
