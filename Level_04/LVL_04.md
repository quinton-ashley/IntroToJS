# Level 04 A

Before you level up to level 3, complete the Pick a Path PART C challenge section. Edit your `load.js` file in the `GAMES` folder.

```js
QuintOS.level = 3;
QuintOS.gameSelect = "PickAPath";
```

After that you can upgrade to level 4! 🥳

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
let checkerBoard = [
  ["r", "r", " ", " ", " ", "B", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", "r"],
  [" ", " ", " ", " ", "r", " ", " ", " "],
  [" ", "B", " ", " ", " ", " ", " ", "b"],
  [" ", " ", "b", " ", " ", " ", "b", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", "b", " ", "b", " "]
];
```

Two dimensional data, such as checker board piece positions, can be stored in two dimensional arrays. In the example `"r"` represents a single red piece, uppercase `"R"` represents a king (two stacked red pieces).

## Nested for loops

A for loop inside a for loop? FORLOOPCEPTION! 😮

```js
for (let i = 0; i < limit; i++) {
  for (let j = 0; j < height; i++) {
    // nested for loop
  }
}
```

## Coding Philosophy: Part 1

Good code should be easy for other programmers (humans) to read and efficient for your computer to run. Here are some guidelines for how to write good code!

Above all, it's important to put effort into thinking of GOOD names for your variables. Good variable names in Javascript are short and concise descriptors. Write sufficiently detailed comments in your code too.

Try not to rewrite the same exact lines of code in different places, put that code chunk in a function and use that function instead. Likewise if you have a chunk of code and you want to do something only slightly different at another point in your program, make a function with input parameters for the thing(s) that make it different. If you have a code chunk inside a function that is unrelated to the name/description you gave that function, move that code into its own function.

## End of Level 04 A

- 2d Arrays
- nested for loops

# Level 04 B

## Artificial Intelligence in Games

Making an AI for a game, even for TicTacToe, might sound daunting but you already know enough about programming to do it! AI is just code that reacts to a game environment with an action.

Have you ever played Connect Four? Try to think of the simplest method of making a move in Connect Four. Note it's not the same as the worst method, which would be deliberately making moves to help your opponent win.

The simplest method of making a valid move would be to go column by column and drop your tile in the first column that isn't full of tiles yet.

In TicTacToe the simplest method is to look at each space and place one's X or O mark in the first available space.

## Coding Philosophy: Part 2

Solve complex problems by thinking algorithmically! That means breaking problems down step by step. "A journey of a thousand miles begins with a single step". If you get stuck on a problem you may be overcomplicating it, keep things simple. Attempt to find a decent solution to a problem before concerning yourself with what the best solution could be. "Writing is rewriting" this is true for most people when writing essays, music, and often code too. Very few people are like the classical composer Mozart, who wrote first drafts of music that would sound exactly as he hoped, so he would make no changes to them. "Put something on the page!", start by thinking of the program logically, then draw it out on paper, then start writing code, test, rewrite, test, rewrite, and more tests. Remember "Computer Science" is a science, it's all about experimentation! Getting things wrong is a big part of the process, having the program not do what you expect is an opportunity to learn. Keep trying but if you get really stuck take a break and come back to it. Taking a break to do something else can really help give you a new headspace and perspective on what you're trying to code.

## End of Level 04 B
