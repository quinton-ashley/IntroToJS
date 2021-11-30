# QuickClicks

Test your reflexes with the Quick Clicks target practice game! Click a target to make another one appear in a random position on the screen. The goal is to click between targets as fast as possible.

## Instructions for PART A

Put the button in a random position on the screen.

Remember! `Math.random()` returns a value between 0 and 1 (not including 1)

## Instructions for PART B

When the player clicks the button place another button in a random position on the screen. Use recursion to achieve this!

After the player clicks a button it should get erased. Do not attempt to erase a button if it doesn't exist.

## Instructions for PART C

Before the game starts be sure to tell the user how to play. Place an alert window with instructions in the middle of the screen.

After the player clicks 10 buttons, show the user some results regarding how fast they clicked the buttons. To find the speed at which they click between buttons you'll first need to create an array of times. Track how fast it takes the player to click the button using [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date). Each time they click a button add the current time in milliseconds to the array of times. HINT: Use the `push` function to add to arrays

Create an array of speeds that stores time in milliseconds it took the player to click each button. Each number in this array should represent the difference between the time a button was clicked and the time the next button was click. HINT: If the player clicks the button 10 times there will only be 9 speeds (time between each button click).

Remember! `for` loops with a counter variable:

```js
//   initialize;  condition; increment
for (let i = 0; i < loopAmount; i++) {
	// code
}
```

After 10 clicks calculate the user's average, slowest, and fastest response times. Display these statistics using an alert window.

## Instructions for PART D

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
