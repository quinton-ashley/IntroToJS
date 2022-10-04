# QuickClicks

Test your reflexes with the Quick Clicks target practice game! Click a target to make another one appear in a random position on the screen. To win the game, click between 10 targets as fast as possible, but don't click an imposter target or you'll lose!

## Instructions for Part A

Try placing the target button in the bottom right corner of the screen. Note the values used for the row and column.

Put the target button in a random position on the screen. HINT: `random(start, end)` returns decimal numbers but row and col values need to be whole numbers

Make four imposter targets using a `for` loop. Imposter targets should look a bit different from the real target. The smaller the differences the harder your Quick Clicks game will be.

## Instructions for Part B

When the player clicks the target button, place another target and another four imposter targets in random positions on the screen. HINT: Use a recursion callback to the `makeTargets` function.

You will notice that using recursion generates a lot of targets quickly! You can use the `erase()` function to remove all text and buttons from the screen.

## Instructions for Part C

Before the game starts, place an alert window with instructions on how to play in the middle of the screen. Tell the user to press the "OKAY" button to start the game.

If the player clicks an imposter target tell them "Game Over!" because they clicked an imposter target. Show them the location of the real target but don't allow them to click it.

## Instructions for Part D

After the player clicks 10 target buttons, calculate the user's average, slowest, and fastest response times. To get the speeds at which the player clicked between buttons you'll first need to create an array that stores the time at which they clicked each target. HINT: Use the `push` function to add `Date.now()` to an array called `times`

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

## Instructions for Part E

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

BUG FIX! Though unlikely, it is possible that an imposter target is placed directly over a real target. Try to prevent this!
