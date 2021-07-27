# QuickClicks

Test your reflexes with the Quick Click game!

## Instructions for PART A

Put a button in a random position on the screen.

Tip! Remember `Math.random()` returns a value between 0 and 1 (not including 1)

## Instructions for PART B

When you click the button place another button in a random position on the screen.

## Instructions for PART C

After 20 clicks calculate the user's average, slowest, and fastest response times. Display these statistics to them using an alert window. Before the game starts be sure to tell the user how to play!

Tip! Remember alert windows `await pc.alert(msg)`

Track how fast it takes the player to click the button using [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

Tip! Remember the `push()` function for adding to arrays.

```js
let arr = [4, 17];
arr.push(21); // arr -> [4, 17, 21]
arr.push(35); // arr -> [4, 17, 21, 35]
```

Make a `speeds` array for the time in milliseconds it took the player to click each button. Each number in this array should represent the difference between the time a button was clicked and the time the next button was click.

Tip! Remember `for` loops with a counter variable.

```js
for (let i = 0; i < loopAmount; i++) {
  // code
}
```

Add a background pattern to the game that should cover the entire space within the frame. Create this pattern yourself using for loops by drawing with `pc.text(txt, x, y)`

You can also use a String function called [repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

```js
let pattern = "><".repeat(4);
// pattern -> '><><><><';
```

Try making a cool geometric pattern like this!

```
⎺\⎽⎽/⎺⎺\⎽⎽/⎺
⎽/⎺⎺\⎽⎽/⎺⎺\⎽
⎺\⎽⎽/⎺⎺\⎽⎽/⎺
⎽/⎺⎺\⎽⎽/⎺⎺\⎽
```

You may find it useful to use the modulo operator `%` which gets the remainder of a division.

```js
// true if x is even (divisible by 2)
if (x % 2 == 0) {
  console.log("x is even!");
}

// true if y is divisible by 5
if (y % 5 == 0) {
  console.log(y + " is a multiple of 5");
}
```
