# QuickClicks

Test your reflexes with the Quick Clicks target practice game! Click a target to make another one appear in a random position on the screen. The goal is to click between targets as fast as possible.

## Instructions for PART A

Try placing the button in the bottom right corner of the screen. Note the values of the row and column.

Put the button in a random position on the screen.

Remember! `Math.random()` returns a value between 0 and 1 (not including 1)

When the player clicks the button place another button in a random position on the screen. HINT: Use recursion to achieve this!

## Instructions for PART B

After the player clicks a button it should get erased. Do not attempt to erase a button if it doesn't exist!

## Instructions for PART C

Before the game starts, place an alert window with instructions on how to play in the middle of the screen. Tell the user to press the "OKAY" button to start the game.

## Instructions for PART D

After the player clicks 10 buttons, calculate the user's average, slowest, and fastest response times. To get the speeds at which the player clicked between buttons you'll first need to create an array that stores the time at which they clicked each target. HINT: Use the `push` function to add `Date.now()` to an array called `times`

Now create an array of speeds that stores the time in milliseconds it took the player to click each button. Each number in this array should represent the difference between the time a button was clicked and the time the next button was clicked. HINT: If the player clicks the button 10 times there will only be 9 speeds (time between each button click). Use a `for` loop to create the array of speeds.

Remember! `for` loops with a counter variable:

```js
//   initialize;  condition; increment
for (let i = 0; i < loopAmount; i++) {
	// code
}
```

To calculate the average speed, add all the speeds up and divide by the amount of speeds.

The fastest speed is the lowest number in the speeds array. The slowest speed is the highest.

Display the result in an alert window.

## Instructions for PART E

Add a background pattern to the game that should cover the entire space within the frame. Create this pattern yourself using for loops by drawing with `text(txt, row, col)`

Remember! You can use the `repeat` String function

```js
let pattern = '><'.repeat(4);
// pattern -> '><><><><';
```

Try making a cool geometric pattern like this! HINT: use the modulo operator to make alternating lines

```
⎺\⎽⎽/⎺⎺\⎽⎽/⎺
⎽/⎺⎺\⎽⎽/⎺⎺\⎽
⎺\⎽⎽/⎺⎺\⎽⎽/⎺
⎽/⎺⎺\⎽⎽/⎺⎺\⎽
```
