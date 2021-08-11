# GuessTheNumber

A simple guess the number game! The computer chooses a random number between 1 and 100, then challenges the player to guess the number.

Make a file called `guessTheNumber.js` in your `quintos-games` folder, copy paste the template code into that file.

https://raw.githubusercontent.com/quinton-ashley/IntroToJS/main/Level_00/guessTheNumber.js

## Instructions for PART A

Since you're just starting to write this program, don't make the number random yet. Create a varible called `num` using `let` and choose the number yourself to make the rest of your program easier to test.

Tell the player to guess a number using `await prompt()` put your message (string) inside the parenthesis of the `prompt` function. Create the variable `guess` using `let`, assign it to the user's response to the `prompt`.

After each guess, the player should be told if their guess was right or wrong. If they were wrong, the player should be told whether their guess was too high or too low. They should also be told when they guess the number correctly. Use the `alert` function inside the code blocks `{}` of `if` and `else if` statements!

At this point you should also know about the global object [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), which has many useful functions. You will use `.random()` and `.ceil()` to make this game.

```js
// Math.random() returns a random decimal number between 0 and 1 (not including 1)
let x = Math.random(); // x could be .2364 or .928279 or 0.45398, it's random!

Math.round(30.1); // -> 30
Math.round(30.7); // -> 31
// Math.round() rounds the number to the nearest integer

let y = Math.floor(22.9); // y -> 22 (y gets assigned the value 22)
// Math.floor() always rounds down

let z = Math.ceil(15.3); // z -> 16
// Math.ceil() always rounds up (ceil for ceiling)
```

Use these `Math` functions to have the computer pick a random whole number between 1 and 100.

[Now you can click here to move onto Level 00 B](https://github.com/quinton-ashley/IntroToJS#level-00-b).

## Instructions for PART B

_Make sure you read all of `LVL_00.md` before doing PART B_

Make the game loop by using a while loop.

## Instructions for PART C

_Complete PickAPath (A and B) first!_

If you haven't already, figure out the best way to play this game. Then calculate the maximum amount of guesses that would ever be required to guess the number using that method. Limit the number of guesses a player can make to that amount.

Use a `for` loop to count the turns but keep the same condition: `guess != num`. Tell the user when they run out of attempts to guess the number. Use `break;` to exit the `for` loop.

If the user enters a number outside the range of 1 to 100, tell them "Invalid guess" but don't count it against them. They should still have the same amount of valid guess attempts no matter how many invalid guess attempts they make.

When you're done move on to Level 03!

## Hints for PART C

In this game the best strategy for the player is to perform a binary search. If the number was between 1 to 7 it should only take a maximum of 3 attempts to guess the number.

Using the binary search method, on attempt 1 the player should always guess 4, the midpoint of 1 to 7. Then if the number was higher they should guess 6, the midpoint between 4 and 7. Then if the number was lower they'd guess 5.

If you make a diagram of all the possible guesses and decision branches using this binary search method, you would create a binary search tree. Each branch of the tree is a choice the player takes if the number they guessed was too low or too high. Each number is a node.

```txt
guess 1:     4      2^0 = 1 node (root of the tree)
            / \     branches
guess 2:   2   6    2^1 = 2 nodes
          / \ / \   branches
guess 3:  1 3 5 7   2^2 = 4 nodes (leaves of the tree)
```

2^3 = 8 which is higher than 7 possible values the number could be, so only 3 attempts are required to guess the number in the range of 1 to 7 if the player uses the binary search method. All the numbers 1 to 7, are contained in the tree.

If the player had to guess between 1 to 10, sometimes it would take more than 3 attempts to guess it correctly. 2^4 is 16, so no more than 4 attempts are needed to guess a number between 1 to 10.

Now that you know how the binary search method works it should be easy to figure out how many guesses are required to guess any number between 1 to 100.
